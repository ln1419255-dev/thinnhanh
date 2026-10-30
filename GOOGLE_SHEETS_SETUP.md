# Kết nối bảng điểm ThiNhanh với Google Sheets

Website hiện đang chạy trên GitHub Pages. Mã nhận điểm đã được chuẩn bị, nhưng đồng bộ chỉ hoạt động sau khi bạn tạo và triển khai endpoint Google Apps Script của riêng mình.

## Cách thiết lập

1. Tạo một Google Sheet mới để lưu kết quả. Bạn có thể đặt tên là **Bảng điểm ThiNhanh**.
2. Trong Sheet, chọn **Tiện ích mở rộng (Extensions) → Apps Script**.
3. Mở tệp `google-sheets/Code.gs` trong kho mã nguồn này, sao chép toàn bộ nội dung rồi dán thay thế nội dung trong trình soạn thảo Apps Script. Nhấn **Lưu**.
4. Chọn **Triển khai (Deploy) → Lần triển khai mới (New deployment)**.
5. Chọn loại **Ứng dụng web (Web app)**. Đặt **Execute as / Thực thi với tư cách** là tài khoản của bạn. Với **Who has access / Ai có quyền truy cập**, chọn **Anyone / Bất kỳ ai** nếu tài khoản cho phép.
6. Nhấn **Deploy**, chấp thuận quyền truy cập nếu Google yêu cầu, rồi sao chép URL ứng dụng web kết thúc bằng `/exec`.
7. Gửi URL `/exec` đó trong cuộc trò chuyện này. URL này cho phép gửi kết quả vào Sheet, vì vậy chỉ chia sẻ với người bạn tin cậy. Không cần đổi quyền chia sẻ của chính Google Sheet thành công khai.

Sau khi nhận URL, cần đặt nó làm endpoint trong cả `physics.html` và `chem.html`, rồi kiểm tra một bài thử trước khi dùng thật.

## Dữ liệu được ghi

Mỗi lần nộp bài sẽ tạo một hàng gồm thời gian nhận, thời gian nộp trên trình duyệt, tên người làm, môn, đề, mức độ, điểm từng phần, tổng điểm, trạng thái tự động nộp do hết giờ và mã lượt thi. Câu trả lời chi tiết của học sinh không được gửi.

## Lưu ý

- Tên người làm sẽ được hỏi khi bắt đầu mỗi bài thi.
- Điểm vẫn được lưu cục bộ trên thiết bị như trước. Khi endpoint được cấu hình, website sẽ gửi thêm thông tin tổng kết điểm đến Google Sheets.
- Endpoint nhận yêu cầu công khai chỉ nên được dùng cho bảng điểm cá nhân/thử nghiệm. Vì website tĩnh không có đăng nhập, người ngoài có thể thử gửi dữ liệu giả. Hãy giữ Google Sheet ở chế độ riêng tư và kiểm tra các hàng bất thường.
- Nếu tài khoản trường học không cho chọn **Anyone / Bất kỳ ai**, đừng công khai Sheet; báo lại để chọn phương án khác.
