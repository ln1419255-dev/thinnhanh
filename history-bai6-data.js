(function(){
"use strict";
try{
 var encoded=(window.HISTORY_BAI6_DATA_CHUNKS||[]).join("");
 if(!encoded)throw new Error("Không tìm thấy dữ liệu Bài 6.");
 var binary=atob(encoded),bytes=new Uint8Array(binary.length);
 for(var i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
 if(!window.DecompressionStream)throw new Error("Trình duyệt chưa hỗ trợ giải nén dữ liệu Bài 6.");
 new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).text().then(function(raw){
  var compact=JSON.parse(raw);
  var bank={
   mc:(compact.mc||[]).map(function(x){return {id:"B6-MC-"+String(x[0]).padStart(3,"0"),lesson:"Bài 6",sourceNumber:x[0],q:x[1],options:x[2],answer:x[3],explanation:x[4]};}),
   tf:(compact.tf||[]).map(function(x){return {id:"B6-TF-"+String(x[0]).padStart(2,"0"),lesson:"Bài 6",sourceNumber:x[0],title:x[1],passage:x[2],items:(x[3]||[]).map(function(y){return {text:y[0],answer:y[1],explanation:y[2]};})};})
  };
  if(bank.mc.length!==139||bank.tf.length!==35)throw new Error("Số lượng câu hỏi không khớp dữ liệu gốc.");
  window.HISTORY_BAI6_BANK=bank;
  window.dispatchEvent(new Event("historybai6bankready"));
 }).catch(function(e){window.dispatchEvent(new CustomEvent("historybai6bankerror",{detail:e.message||"Không đọc được ngân hàng Bài 6."}));});
}catch(e){window.dispatchEvent(new CustomEvent("historybai6bankerror",{detail:e.message||"Không tải được ngân hàng Bài 6."}));}
})();