/**
 * ThiNhanh — nhận điểm từ website tĩnh và ghi vào Google Sheets.
 * Gắn script này với một Google Sheet bằng Extensions > Apps Script.
 * Chỉ nhận POST, không đọc hay chia sẻ dữ liệu trong bảng qua endpoint.
 */
const SHEET_NAME = 'DiemThi';
const HEADERS = [
  'Thời gian nhận (máy chủ)',
  'Thời gian nộp (trình duyệt)',
  'Tên người làm',
  'Môn',
  'Tên đề',
  'Mức độ',
  'Trắc nghiệm /4,5',
  'Đúng/Sai /4',
  'Trả lời ngắn /1,5',
  'Tổng điểm /10',
  'Nộp tự động do hết giờ',
  'Mã lượt thi'
];

function doGet() {
  return ContentService.createTextOutput(
    'ThiNhanh: endpoint nhận điểm đã hoạt động. Website gửi điểm bằng phương thức POST.'
  ).setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var raw = e && e.parameter && e.parameter.payload;
    if (!raw || String(raw).length > 12000) {
      return jsonOutput({ ok: false, error: 'Thiếu dữ liệu hoặc dữ liệu quá dài.' });
    }

    var p = JSON.parse(raw);
    var subject = safeText(p.subject, 30);
    if (subject !== 'Vật lí' && subject !== 'Hóa học') {
      return jsonOutput({ ok: false, error: 'Môn học không hợp lệ.' });
    }

    var name = safeText(p.candidateName, 60);
    var title = safeText(p.examTitle, 160);
    if (!name || !title) {
      return jsonOutput({ ok: false, error: 'Thiếu tên người làm hoặc tên đề.' });
    }

    var mc = boundedScore(p.mcPoints, 4.5);
    var tf = boundedScore(p.tfPoints, 4);
    var shortPart = boundedScore(p.shortPoints, 1.5);
    var total = boundedScore(p.totalScore, 10);
    if (Math.abs(total - (mc + tf + shortPart)) > 0.12) {
      return jsonOutput({ ok: false, error: 'Điểm tổng không khớp các phần.' });
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
      throw new Error('Hãy mở Apps Script từ chính Google Sheet cần nhận điểm.');
    }
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length)
        .setFontWeight('bold')
        .setBackground('#16324f')
        .setFontColor('#ffffff')
        .setWrap(true);
    }

    var submittedAt = safeDate(p.submittedAt);
    sheet.appendRow([
      new Date(),
      submittedAt || '',
      name,
      subject,
      title,
      safeText(p.difficulty, 30),
      mc,
      tf,
      shortPart,
      total,
      p.submittedAutomatically === true,
      safeText(p.attemptId, 80)
    ]);
    var row = sheet.getLastRow();
    sheet.getRange(row, 1, 1, 2).setNumberFormat('dd/MM/yyyy HH:mm:ss');
    sheet.getRange(row, 7, 1, 4).setNumberFormat('0.00');
    return jsonOutput({ ok: true });
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err && err.message || err).slice(0, 250) });
  } finally {
    try { if (lock.hasLock()) lock.releaseLock(); } catch (ignored) {}
  }
}

function safeText(value, maxLength) {
  var text = String(value == null ? '' : value).trim().slice(0, maxLength);
  // Prevent a user-provided name/title from being interpreted as a formula.
  if (/^[=+\-@\t\r]/.test(text)) text = "'" + text;
  return text;
}

function boundedScore(value, maximum) {
  var number = Number(value);
  if (!isFinite(number) || number < 0 || number > maximum) {
    throw new Error('Giá trị điểm không hợp lệ.');
  }
  return Math.round(number * 100) / 100;
}

function safeDate(value) {
  if (!value) return null;
  var date = new Date(value);
  return isNaN(date.getTime()) ? null : date;
}

function jsonOutput(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
