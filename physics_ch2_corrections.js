/* Corrections and source-verified replacements for repeated Chapter 2 items.
   Runs after the compressed Chapter 2 bank has been decoded and before the app appends it to BANK. */
(function(){
 if(!window.CH2_READY)return;
 window.CH2_READY.then(function(){
  const exams=window.CH2_EXAMS||[];
  function replace(oldId,q){
   let found=null;
   for(const exam of exams){
    const i=exam.questions.findIndex(item=>item.qid===oldId);
    if(i>=0){q.difficultyScore=exam.questions[i].difficultyScore;exam.questions[i]=q;found=exam.id;break;}
   }
   if(!found)throw new Error('Missing source question ID: '+oldId);
  }
  const S=(qid,source,q,answer,tol,unit,why)=>({qid,source,type:'short',q,answer,tol,unit,why,origin:'source-derived'});
  replace('t08-short-04-76662',S(
   't11-essay-01-pressure-short','t11',
   'Một bình hình trụ dung tích 8 lít, đặt thẳng đứng, đậy kín bằng nắp khối lượng 2 kg, đường kính 20 cm. Ban đầu khí trong bình ở 100°C và áp suất 10⁵ Pa. Khi nhiệt độ giảm còn 20°C, áp suất khí trong bình bằng bao nhiêu kPa?',
   78.55,0.08,'kPa',
   'Vì bình kín và thể tích không đổi: p₂=p₁T₂/T₁=10⁵×293/373≈7,855×10⁴ Pa=78,55 kPa.'
  ));
  replace('t08-short-12-50982',S(
   't11-essay-04-density-short','t11',
   'Một nhà máy bơm oxygen vào bình dung tích 5000 lít. Sau 30 phút, khí trong bình ở 24°C và 1,1 atm. Theo hướng dẫn giải trong tài liệu, khối lượng riêng của oxygen trong bình sau khi bơm bằng bao nhiêu kg/m³?',
   1.4,0.05,'kg/m³',
   'Theo phương trình Clapeyron ở dạng khối lượng riêng: D=pM/(RT)≈1,445 kg/m³, làm tròn một chữ số thập phân được 1,4 kg/m³.'
  ));
  replace('t08-short-07-49296',S(
   't11-essay-06-breath-volume-short','t11',
   'Một vận động viên hít vào 1,00 g không khí trong mỗi nhịp thở. Ở điều kiện luyện tập, khối lượng riêng của không khí là 1,29 kg/m³. Thể tích trung bình của mỗi nhịp thở ở điều kiện luyện tập bằng bao nhiêu lít?',
   0.7752,0.002,'lít',
   'V=m/ρ=0,001/1,29≈7,752×10⁻⁴ m³=0,7752 lít.'
  ));
  replace('t13-short-03-68720',S(
   't11-essay-05-rescue-time-short','t11',
   'Một bình oxygen 6,0 lít chứa khí ở áp suất 200 atm và nhiệt độ 20°C. Một công nhân cần 6,0×10²² phân tử oxygen mỗi phút. Theo hướng dẫn giải trong tài liệu, bình khí có thể cung cấp oxygen tối đa trong bao nhiêu phút?',
   502,1,'phút',
   'Theo lời giải nguồn, bình chứa khoảng 50 mol oxygen; thời gian cung cấp t=nNₐ/(6,0×10²²)≈502 phút.'
  ));
  replace('t10-short-01-81288',S(
   't10-essay-05-initial-temp-short','t10',
   'Một khối khí có thể tích ban đầu V và nhiệt độ tuyệt đối T. Khi đun nóng đẳng áp đến 450 K, thể tích tăng 3 cm³; khi làm lạnh đến 300 K, thể tích giảm 2 cm³. Nhiệt độ ban đầu T bằng bao nhiêu K?',
   360,0.5,'K',
   'Từ V/T=(V+3)/450 và V/T=(V−2)/300, giải hệ được V=12 cm³ và T=360 K.'
  ));
  replace('t08-short-09-50070',S(
   't10-essay-06-mercury-mass-short','t10',
   'Một bình thủy tinh hình cầu bán kính 1,5 cm chứa không khí ở 40°C, nối với một ống nằm ngang chứa đầy thủy ngân. Khi nhiệt độ không khí tăng thêm 60°C, khối lượng thủy ngân chảy ra ngoài bằng bao nhiêu gam? Biết khối lượng riêng của thủy ngân là 13,6 g/cm³ và dung tích bình, ống không đổi.',
   37,0.5,'g',
   'V₁=4,5π cm³; V₂=V₁×(373+60)/313≈5,36π cm³. ΔV≈0,86π cm³; m=ρΔV≈13,6×0,86π≈37 g.'
  ));
  replace('t08-short-11-50659',S(
   't11-short-04-balloons-count','t11',
   'Một bình thép dung tích 30 lít chứa hydrogen ở áp suất 6 MPa và nhiệt độ 37°C. Có thể bơm được bao nhiêu quả bóng, mỗi quả 1,5 lít, khi áp suất và nhiệt độ trong mỗi bóng lần lượt là 1,03×10⁵ Pa và 15°C? Theo hướng dẫn giải, khí trong bình chỉ được sử dụng đến khi áp suất bình giảm bằng áp suất trong bóng.',
   1062,2,'quả',
   'Dùng phương trình trạng thái cho khí ở trạng thái đầu và cuối bình, với V₂=30+1,5n lít; giải theo hướng dẫn nguồn được n≈1062 quả.'
  ));
  replace('t08-short-03-76256',S(
   't11-short-11-he-h2-piston-temp','t11',
   'Trong một xi lanh kín hai đầu có piston cách nhiệt không ma sát, hai phần chứa He và H₂ có cùng khối lượng, cùng nhiệt độ 27°C và cùng áp suất 1 atm. Nung nóng riêng phần He đến khi piston dịch chuyển đến chính giữa xi lanh, coi nhiệt độ H₂ không đổi. Nhiệt độ cuối của He bằng bao nhiêu °C?',
   327,0.5,'°C',
   'Từ phương trình trạng thái cho hai khí và điều kiện cân bằng áp suất khi piston ở giữa, lời giải nguồn cho nhiệt độ cuối của He là 327°C.'
  ));
  function TF(qid,source,q,statements){return {qid,source,type:'tf',q,statements:statements.map(x=>({text:x[0],correct:x[1]})),origin:'source-derived-tf'};}
  replace('t10-tf-01-78340',TF(
   't13-essay-05-airbag-boyle-tf','t13',
   'Một túi khí nitrogen có thể tích 7,95 lít, nhiệt độ 27°C và áp suất 1,2×10⁵ Pa. Sau đó thể tích túi tăng lên 8,75 lít trong khi nhiệt độ không đổi. Xác định đúng/sai.',
   [
    ['Nitrogen trong túi khí được tạo ra từ phản ứng phân hủy sodium azide: 2NaN₃ → 2Na + 3N₂.',true],
    ['Khi thể tích túi khí tăng và nhiệt độ không đổi, áp suất khí giảm.',true],
    ['Áp suất sau khi thể tích tăng xấp xỉ 1,09×10⁵ Pa.',true],
    ['Trong quá trình này, áp suất tỉ lệ thuận với thể tích.',false]
   ]
  ));
  replace('t13-tf-07-56567',TF(
   't13-tf-02-three-gas-cylinders','t13',
   'Ba bình có cùng dung tích, ở cùng nhiệt độ, lần lượt chứa 4 g H₂ (M=2 g/mol), 22 g CO₂ (M=44 g/mol) và 7 g N₂ (M=28 g/mol). Xác định đúng/sai.',
   [
    ['Số mol khí trong bình (1) chứa hydrogen là 2 mol.',true],
    ['Số mol khí trong bình (2) chứa carbon dioxide là 0,05 mol.',false],
    ['Số mol khí trong bình (3) chứa nitrogen là 0,25 mol.',true],
    ['Bình (1) có áp suất nhỏ nhất, bình (2) có áp suất lớn nhất.',false]
   ]
  ));
  window.CH2_RANDOM_BANK={
   mc:exams.flatMap(e=>e.questions.filter(q=>q.type==='mc')),
   tf:exams.flatMap(e=>e.questions.filter(q=>q.type==='tf')),
   short:exams.flatMap(e=>e.questions.filter(q=>q.type==='short'))
  };
  window.CH2_CORRECTIONS_READY=true;
  window.CH2_CORRECTION_MISSES=window.CH2_CORRECTION_MISSES||[];
 }).catch(function(error){console.error('Chapter 2 correction failed:',error);});
})();