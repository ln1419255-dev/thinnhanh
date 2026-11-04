/* Additional verified per-ID explanations for Physics Chapter 2. */
(function(){
 'use strict';
 if(!window.CH2_READY)return;
 const MC={
 't08-mc-04-7589':null,
 't08-mc-34-20033':'Mô hình khí lí tưởng xem phân tử là chất điểm có kích thước rất nhỏ so với khoảng cách trung bình giữa chúng. Vì vậy chọn B; không có nghĩa phân tử không có khối lượng.',
 't08-mc-26-16549':'Tốc độ chuyển động nhiệt phụ thuộc nhiệt độ tuyệt đối và khối lượng phân tử. Với cùng một chất khí, khi T tăng thì tốc độ đặc trưng tăng. Trong các lựa chọn, yếu tố phù hợp là nhiệt độ của khí, chọn B.',
 't08-mc-30-18240':'Động năng tịnh tiến trung bình W̄đ=3kT/2. Khi nhiệt độ giảm, động năng trung bình và tốc độ đặc trưng của phân tử đều giảm, chọn B.',
 't08-mc-11-10137':'Lực tương tác giữa các phân tử được gọi là lực liên kết phân tử. Trong chất khí, lực này yếu hơn đáng kể so với chất lỏng và chất rắn nhưng không được xem là hoàn toàn bằng không trong mọi khí thực; chọn C theo thuật ngữ của đề.',
 't08-mc-03-7266':'Nhiệt độ tuyệt đối càng cao thì động năng tịnh tiến trung bình W̄đ=3kT/2 càng lớn. Do đó chuyển động nhiệt của phân tử mạnh hơn và tốc độ đặc trưng tăng, chọn B.',
 't08-mc-33-19401':'Theo mô hình khí lí tưởng, giữa hai lần va chạm phân tử chuyển động thẳng đều; va chạm giữa các phân tử được coi là đàn hồi. Vì vậy chọn A.',
 't10-mc-11-15441':'Trên hệ V–T với T là nhiệt độ tuyệt đối, quá trình đẳng áp tuân theo V/T=hằng số. Đồ thị là đường thẳng đi qua gốc tọa độ O, chọn A.',
 't11-mc-39-43084':'Từ bảng nhiệt độ: lốp trước bên phải 30°C và lốp sau bên phải 28°C. Độ chênh là 2°C; độ chênh nhiệt độ theo kelvin cũng bằng 2 K, chọn D.',
 't13-mc-02-13889':'Chất khí có khối lượng riêng thường nhỏ hơn rất nhiều so với chất lỏng và chất rắn; khí dễ nén và không có hình dạng, thể tích riêng. Do đó chọn C.',
 't09-mc-02-9356':'Trong lúc nước đang sôi, hơi nước ngay sát mặt thoáng ở gần nhiệt độ sôi và có thể xem là ở nhiệt độ gần như không đổi. Các tình huống còn lại chịu biến thiên nhiệt độ môi trường rõ hơn; chọn D.',
 't11-mc-06-16334':'Hằng số khí lí tưởng R=8,31 J/(mol·K) trong hệ SI. Vì vậy chọn B; các giá trị còn lại sai thứ tự chữ số hoặc sai đơn vị.',
 't08-mc-32-18941':'Theo mô hình khí lí tưởng, giữa hai lần va chạm, phân tử không chịu lực tương tác đáng kể nên chuyển động thẳng đều theo quán tính. Chọn A.',
 't08-mc-22-14864':'Cao su có các khoảng trống vi mô giữa các mạch phân tử; các phân tử không khí có thể khuếch tán từ trong săm qua cao su ra ngoài theo thời gian, làm lốp xẹp dần. Chọn A.',
 't09-mc-01-8947':'Một lượng khí xác định là lượng khí có số mol không đổi. Bình Argon có van khóa kín giữ lượng khí bên trong không đổi; chọn C.',
 't08-mc-10-9737':'Nhiệt độ phản ánh động năng tịnh tiến trung bình của phân tử: W̄đ=3kT/2. T tăng làm năng lượng động học trung bình tăng nên phân tử chuyển động nhanh hơn, chọn B.',
 't08-mc-05-7917':'Lực tương tác giữa các phân tử khí yếu hơn lực liên kết trong chất lỏng và chất rắn, do khoảng cách trung bình giữa các phân tử khí lớn hơn nhiều. Chọn B; không phải hoàn toàn không có lực.',
 't09-mc-08-12310':'Trên hệ p–T, đẳng nhiệt có T không đổi nên đồ thị là đường thẳng song song trục p (trục đứng), chọn B.',
 't08-mc-18-13278':'Số Avogadro Nₐ≈6,02×10²³ mol⁻¹ là số hạt cấu tạo có trong một mol chất. Chọn B.',
 't08-mc-31-18575':'Khi phân tử va chạm với thành bình, động lượng của phân tử thay đổi; theo định luật III Newton, thành bình nhận xung lực ngược chiều và vô số va chạm tạo nên áp suất. Chọn B.',
 't09-mc-09-12664':'Nén đẳng nhiệt nghĩa là T không đổi. Theo Boyle p₁V₁=p₂V₂, thể tích giảm thì áp suất tăng; chọn D.',
 't08-mc-20-13827':'Khi mở van bình xịt, khí nén thoát ra và giãn nở vào không gian bên ngoài. Thể tích phần khí đã thoát tăng, áp suất giảm; chọn B.',
 't09-theory-hydrostatic-to-mc':'Áp suất tại độ sâu h trong chất lỏng đứng yên gồm áp suất mặt thoáng p₀ và áp suất do cột chất lỏng ρgh: p=p₀+ρgh. Chọn B.',
 't08-mc-27-16872':'V và lượng khí không đổi nên p/T=hằng số. Khi nhiệt độ tuyệt đối tăng, áp suất tăng tỉ lệ thuận, chọn B.',
 't08-mc-60-33505':'Số mol O₂: n=m/M=1/32=0,03125 mol. Số phân tử N=nNₐ=0,03125×6,02×10²³≈1,88×10²² phân tử. Chọn D.',
 't08-mc-35-20633':'Chất khí dễ bị nén vì khoảng cách trung bình giữa các phân tử lớn, có nhiều khoảng trống có thể giảm khi nén. Chọn C.',
 't10-essay-02-to-mc':'Cảm biến hoạt động ở áp suất không đổi. Khi nhiệt độ tăng, định luật Charles cho V/T=hằng số nên thể tích khí tăng; màng cảm biến dịch chuyển và tạo tín hiệu đo. Chọn B.',
 't09-essay-04-to-mc':'Ở nhiệt độ không đổi, p=μkT nên μ=p/(kT). T không đổi làm μ tỉ lệ thuận với p; khi áp suất tăng, mật độ phân tử tăng tương ứng. Chọn C.',
 't08-mc-57-32523':'Ở điều kiện tiêu chuẩn 0°C, 1 atm, thể tích mol là 22,4 lít/mol. Với 2 mol: V=2×22,4=44,8 lít. Chọn C.',
 't10-mc-07-13524':'Đẳng áp nên khi đun nóng, T tăng kéo theo V tăng theo định luật Charles. Số phân tử không đổi nhưng chúng chiếm thể tích lớn hơn, khoảng cách trung bình tăng. Chọn B.',
 't09-mc-10-13124':'Ba thông số trạng thái của một lượng khí xác định là áp suất p, thể tích V và nhiệt độ tuyệt đối T. Khối lượng không phải thông số trạng thái trong bộ ba này, chọn B.',
 't09-mc-02-64266':'Quá trình mà nhiệt độ của một lượng khí xác định được giữ không đổi gọi là quá trình đẳng nhiệt. Chọn C.',
 't08-mc-19-13606':'Khối lượng mol là khối lượng của một mol chất; đơn vị thường dùng trong đề là g/mol (hoặc kg/mol trong SI). Trong các lựa chọn, chọn C.',
 't13-mc-11-18906':'Mật độ phân tử μ=N/V. Từ p=μkT suy ra μ=p/(kT). Quá trình đẳng áp có p không đổi; khi T tăng thì μ giảm. Chọn B.',
 't10-mc-15-18807':null,
 't13-mc-06-16033':'Trạng thái của một lượng khí xác định được mô tả bằng ba thông số p, V và T. Chọn A.',
 't10-mc-08-14021':'Đẳng áp và khối lượng không đổi: khi làm lạnh, T giảm nên V giảm theo V/T=hằng số. Vì ρ=m/V nên thể tích giảm làm khối lượng riêng tăng. Chọn B.',
 't11-mc-08-17464':'Ở điều kiện tiêu chuẩn 0°C và 1 atm, thể tích của một mol khí lí tưởng bằng 22,4 dm³. Chọn C.',
 't09-theory-pascal-to-mc':'Theo tính chất áp suất của chất lỏng đứng yên, các điểm cùng độ cao trong cùng một chất lỏng liên thông có áp suất bằng nhau. Chọn A.',
 't10-mc-27-26351':null,
 't10-mc-09-14536':'Đẳng áp nghĩa là áp suất không đổi. Vì vậy phát biểu “khi áp suất tăng thì thể tích tăng” không thể mô tả một quá trình đẳng áp; đây là phát biểu sai, chọn B.',
 't08-mc-64-34922':'Ở điều kiện tiêu chuẩn, một mol khí lí tưởng chiếm 22,4 lít. Với n mol, V=22,4n lít. Chọn A.',
 't09-mc-05-10964':'Khi van bình xịt mở, khí nén thoát ra và giãn nở vào ngoài bình. Phần khí đã thoát chiếm thể tích lớn hơn và áp suất giảm; chọn A.',
 't09-mc-14-mixture-verified':'Mật độ phân tử tổng cộng bằng tổng mật độ phân tử từng khí: μ=μ_N₂+μ_O₂. Vì thế phát biểu B đúng. 20% số phân tử O₂ không đồng nghĩa 20% khối lượng vì hai khí có khối lượng mol khác nhau.',
 't10-mc-35-recovered':'Đẳng áp nên V₂/V₁=T₂/T₁. V₂=1,07V₁ và T₂=49+273=322 K. Suy ra T₁=322/1,07≈300,9 K, đổi Celsius: t₁≈27,9°C, chọn C (28°C).',
 'mock-mc-04-1099':'Ở đẳng nhiệt, p=μkT với T không đổi nên mật độ phân tử μ tỉ lệ thuận với áp suất. Áp suất tăng thì số phân tử trong một đơn vị thể tích tăng tương ứng, chọn B.',
 't10-mc-01-10369':'Quá trình có áp suất được giữ không đổi gọi là đẳng áp. Chọn B.',
 't12-essay-02-to-mc':'Công thức W̄đ=3kT/2 áp dụng cho khí ở trạng thái cân bằng nhiệt, khi có thể mô tả bằng một nhiệt độ tuyệt đối xác định và phân bố vận tốc cân bằng. Trong các lựa chọn, điều kiện A là phù hợp.',
 't08-mc-41-23692':'Lực tương tác phân tử khác nhau dẫn đến cách sắp xếp và liên kết các hạt khác nhau: chất rắn có cấu trúc chặt, chất lỏng linh động hơn, chất khí phân tử xa nhau. Do đó cấu trúc các trạng thái khác nhau, chọn B.',
 't10-mc-28-26862':null,
 't09-mc-19-17941':'Đẳng nhiệt nên p₁V₁=p₂V₂. V₁=12 lít, V₂=3 lít nên p₂/p₁=12/3=4. Áp suất tăng 4 lần, chọn A.',
 't11-essay-05-to-mc':'Bình kín có V và n không đổi nên p/T=hằng số. T₁=20+273=293 K; T₂=45+273=318 K. p₂=200×318/293≈217 atm, chọn C.',
 't08-mc-12-64543':'Ba điều kiện đều góp phần tạo hỗn hợp khí đồng đều: hai khí không phản ứng với nhau, giữa các phân tử có khoảng trống và các phân tử chuyển động nhiệt hỗn loạn liên tục. Chọn D.',
 't13-mc-41-39049':'Với lượng khí cố định, V∝T/p. Khi p tăng 9 lần và T tăng 3 lần, V₂/V₁=3/9=1/3. Thể tích giảm 3 lần, chọn C.',
 't11-mc-05-15892':'Phương trình Clapeyron cho n mol khí lí tưởng là pV=nRT. Chọn D.',
 't12-mc-12-17823':'Nhiệt truyền từ vật nóng B sang vật lạnh A. Vì ban đầu phân tử ở A có động năng nhiệt ít hơn, nhận năng lượng qua va chạm nên chuyển động nhiệt nhanh hơn. Bộ từ thích hợp là A – nhanh – ít, chọn A.',
 't09-mc-17-16722':'Khi bọt khí nổi lên, áp suất bên ngoài giảm theo độ sâu. Ở nhiệt độ gần như không đổi, định luật Boyle cho pV=hằng số nên áp suất giảm làm thể tích bọt tăng. Chọn A.',
 't13-mc-30-31854':'Số mol khí n=N/Nₐ=11,28×10²⁶/(6,02×10²³)≈1874 mol. Khối lượng m=30 kg=30000 g nên M=m/n≈16 g/mol. Công thức CₓHᵧ có khối lượng mol 16 g/mol là CH₄, chọn A. Dữ kiện Nₐ trong câu bị OCR thành 10⁴⁶; giá trị đúng là 6,02×10²³ mol⁻¹.',
 't11-mc-28-32870':'Hai trạng thái cùng lượng khí: p₁V₁/T₁=p₂V₂/T₂. Với bóng hình cầu, V∝r³ nên r₁=r₂[(p₂/p₁)(T₁/T₂)]^(1/3). Thay p₁=1,02×10⁵ Pa, T₁=300 K, p₂=0,3×10⁵ Pa, T₂=200 K, r₂=10 m: r₁≈10[(0,3/1,02)(300/200)]^(1/3)≈7,6 m, chọn A.',
 't12-mc-37-33416':'Công khí thực hiện trong quá trình đẳng áp: W=pΔV. ΔV=20−10=10 lít=0,010 m³. W=101325×0,010≈1013 J, chọn A.',
 't11-mc-32-37214':null,
 't12-mc-35-32102':null,
 't11-mc-31-36524':'Với cùng một khí, ρ∝p/T. ρ₂=ρ₁(p₂/p₁)(T₁/T₂). T₁=300 K, T₂=400 K, nên ρ₂=1,24×(2,0/1,2)×(300/400)=1,55 kg/m³. Chọn C.',
 't11-mc-34-helium-verified':'Ở điều kiện tiêu chuẩn, n=V/22,4=32,5/22,4≈1,451 mol. m=nM=1,451×4≈5,80 g. Chọn C.',
 't11-essay-01a-to-mc':'Bình kín có V và n không đổi nên p₁/T₁=p₂/T₂. T₁=100+273=373 K; T₂=20+273=293 K. p₂=1,0×10⁵×293/373≈0,785×10⁵ Pa, chọn C.',
 't11-essay-04b-flow-to-mc':'Số mol oxygen ở trạng thái bình: n=pV/(RT), với p=1,1×101325 Pa, V=5 m³, T=24+273=297 K. m=nM≈7,2 kg. Nạp trong 30 phút=1800 s nên lưu lượng khối lượng ≈7200/1800=4,0 g/s, chọn C.'
 };
 const TF={
  't11-tf-theory-state-equation':[
   'ĐÚNG: với một lượng khí xác định, n và R không đổi nên pV/T=nR là hằng số.',
   'ĐÚNG: phương trình Clapeyron của khí lí tưởng là pV=nRT.',
   'SAI: nhiệt độ trong phương trình khí lí tưởng phải là nhiệt độ tuyệt đối tính bằng kelvin, không phải Celsius.',
   'ĐÚNG: trong hệ SI, R≈8,31 J/(mol·K).'
  ],
  't13-tf-08-58135':[
   'SAI: áp suất không đổi và được nung nóng nên V tăng theo định luật Charles; đây là giãn nở đẳng áp, không phải nén.',
   'ĐÚNG: V₁=nVₘ=0,5×24,8=12,4 lít.',
   'ĐÚNG: nhiệt độ tăng từ 298 K lên 398 K nên động năng tịnh tiến trung bình và tốc độ đặc trưng của phân tử tăng.',
   'SAI: V₂=V₁T₂/T₁=12,4×398/298≈16,6 lít, không phải 33,1 lít.'
  ],
  't10-tf-02-37556':[
   'SAI: trên hệ p–T, đẳng áp có p không đổi nên là đường thẳng song song với trục OT, không phải một nhánh hyperbol.',
   'SAI: trên hệ p–V, p không đổi nên đường biểu diễn là đường ngang song song trục OV; không phải đường thẳng đứng vuông góc trục OV.',
   'ĐÚNG: trên hệ p–T, áp suất p không đổi nên đồ thị là đường thẳng song song trục OT.',
   'ĐÚNG: trên hệ V–T(K), đẳng áp thỏa V/T=hằng số nên đồ thị là đường thẳng đi qua gốc O.'
  ],
  't13-tf-11-63383':[
   'ĐÚNG: đề đã cho khí CO₂ được xem là khí lí tưởng và lượng khí trong bình kín cố định, nên có thể áp dụng pV=nRT.',
   'SAI: ở 0°C các phân tử CO₂ vẫn chuyển động nhiệt; 0°C không phải độ không tuyệt đối (0 K).',
   'SAI: khối lượng riêng ở điều kiện tiêu chuẩn là 1,98 kg/m³ nên V=m/ρ=3,96/1,98=2,0 m³, không phải 2 lít.',
   'ĐÚNG: khối lượng riêng trong bình là ρ=3,96/0,040=99 kg/m³. Ở 0°C, cùng khí có p₁/p₀=ρ/ρ₀=99/1,98=50, nên p₁=50 atm. Bình nổ ở 60 atm; thể tích không đổi nên T₂=273×60/50=327,6 K=54,6°C.'
  ],
  't11-tf-06-55088':[
   'ĐÚNG: quy đổi về điều kiện tiêu chuẩn theo pV/T không đổi: V₀=15,8×(105000/101300)×(273/300)≈14,9 m³.',
   'SAI: dùng khối lượng riêng ở điều kiện tiêu chuẩn: m=ρ₀V₀=0,09×14,9≈1,34 kg, không phải 1,42 kg.',
   'SAI: ở 7°C, T₂=280 K; V₂=15,8×(105000/67000)×(280/300)≈23,1 m³, không phải 24,5 m³.',
   'ĐÚNG: ở trạng thái nổ, T₂=T₁(p₂V₂)/(p₁V₁)=300×(27640×39,5)/(105000×15,8)≈197,5 K. Đổi sang Celsius: t₂≈−75,5°C.'
  ]
 };
 const TF_REVIEW={ 't09-tf-08-44609':[2,3], 't10-tf-05-41944':[1] };
 const MC_REVIEW=new Set(['t09-mc-25-recovered']);
 const SHORT={
  't10-short-02-81925':'Dữ kiện chung của Câu 2 và Câu 3: khối khí giãn nở đẳng áp từ 37°C lên 117°C, thể tích tăng 1,2 lít. Đổi nhiệt độ: T₁=310 K, T₂=390 K. Theo Charles: V₁/T₁=(V₁+1,2)/T₂. Suy ra 390V₁=310V₁+372, nên V₁=4,65 lít.',
  't10-short-03-82426':'Dữ kiện chung: khối khí có m=12 g, V₁=4,65 lít và tăng thể tích 1,2 lít khi giãn nở đẳng áp. Thể tích cuối V₂=4,65+1,2=5,85 lít. Khối lượng riêng ρ₂=m/V₂=12/5,85≈2,05 g/lít. Vì 1 g/lít=1 kg/m³, kết quả là 2,05 kg/m³.'
 };
 window.CH2_READY.then(function(){
  const exams=window.CH2_EXAMS||[];
  const audit=window.CH2_EXPLANATION_AUDIT||{answerCorrections:[]};
  const reviewMarker='⚠️ Cần đối chiếu lại câu hỏi hoặc dữ kiện gốc trong PDF. Lời giải cũ bị bỏ qua vì chưa đủ căn cứ để viết lời giải đáng tin cậy.';
  if(!Array.isArray(audit.answerCorrections))audit.answerCorrections=[];
  exams.forEach(function(ex){
   (ex.questions||[]).forEach(function(q){
    if(q.type==='mc'&&Object.prototype.hasOwnProperty.call(MC,q.qid)){
     q.explanation=MC[q.qid]||reviewMarker;
     q.explanationStatus=MC[q.qid]?'authored':'needs_review';
    }
    if(q.type==='mc'&&MC_REVIEW.has(q.qid))q.explanationStatus='needs_review';
    if(q.type==='short'&&Object.prototype.hasOwnProperty.call(SHORT,q.qid)){
     q.explanation=SHORT[q.qid];q.explanationStatus='authored';
    }
    if(q.type==='tf'&&Object.prototype.hasOwnProperty.call(TF,q.qid)){
     (q.statements||[]).forEach(function(st,i){st.explanation=TF[q.qid][i]||null;st.explanationStatus=st.explanation?'authored':'needs_review';});
    }
    if(q.type==='tf'&&TF_REVIEW[q.qid])TF_REVIEW[q.qid].forEach(function(i){const st=q.statements&&q.statements[i];if(st){st.explanation=(st.explanation?st.explanation+' ':'')+'⚠️ Cần đối chiếu hình hoặc dữ kiện gốc trước khi chốt.';st.explanationStatus='needs_review';}});
    if(q.qid==='t09-mc-19-17941'&&q.correct!==0){
     audit.answerCorrections.push({qid:q.qid,from:q.correct,to:0,reason:'12 L nén còn 3 L đẳng nhiệt nên áp suất tăng 4 lần.'});q.correct=0;
    }
    if(q.qid==='t12-mc-12-17823'&&q.correct!==0){
     audit.answerCorrections.push({qid:q.qid,from:q.correct,to:0,reason:'Vật A lạnh nhận nhiệt, các phân tử chuyển động nhanh hơn; ban đầu chúng có ít động năng hơn.'});q.correct=0;
    }
    if(q.qid==='t13-mc-30-31854')q.q=String(q.q).replace('6,02.1046','6,02×10²³');
   });
  });
  audit.mc=0;audit.short=0;audit.tfGroups=0;audit.tfStatements=0;
  audit.mcExplained=0;audit.shortExplained=0;audit.tfExplained=0;audit.needsReview=[];
  exams.forEach(function(ex){
   (ex.questions||[]).forEach(function(q){
    if(q.type==='mc'||q.type==='short'){
     audit[q.type]++;if(q.explanationStatus==='authored')audit[q.type==='mc'?'mcExplained':'shortExplained']++;
     else audit.needsReview.push({qid:q.qid,type:q.type});
    }else if(q.type==='tf'){
     audit.tfGroups++;
     (q.statements||[]).forEach(function(s,i){
      audit.tfStatements++;
      const flagged=/CẦN KIỂM TRA|CẦN ĐỐI CHIẾU|CHƯA ĐỦ DỮ KIỆN|⚠️|SAI nếu|ĐÚNG nếu|cần xem hình|ĐÚNG\/SAI phải/iu.test(String(s.explanation||''));
      if(s.explanation&&s.explanationStatus!=='needs_review'&&!flagged)audit.tfExplained++;
      else audit.needsReview.push({qid:q.qid,type:'tf',statement:i});
     });
    }
   });
  });
  audit.explanationScript='physics_ch2_explanations.js + physics_ch2_explanations_extra.js';
  window.CH2_EXPLANATION_AUDIT=audit;
  window.CH2_EXPLANATIONS_READY=true;
 });
})();
