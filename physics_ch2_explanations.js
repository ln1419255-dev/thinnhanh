/* ThiNhanh — authored explanations for Physics Chapter 2.
   Attach explanations by stable question ID after the source-correction layer runs.
   Unverified or incomplete source items are explicitly flagged instead of using old OCR text. */
(function(){
 'use strict';
 if(!window.CH2_READY)return;

 const SHORT = {
  't12-short-02-82081': 'Dữ kiện: CO₂ có M = 44 g/mol = 0,044 kg/mol, v_rms = 720 m/s. Với khí lí tưởng: v_rms² = 3RT/M nên T = Mv_rms²/(3R). Thay số: T = 0,044×720²/(3×8,31) ≈ 915 K. Đổi sang Celsius: t = 915 − 273 ≈ 642°C. Lưu ý: đáp số 725°C trong tài liệu gốc không khớp phép tính với M(CO₂)=44 g/mol; đã hiệu chỉnh đáp án theo công thức đúng.',
  't11-short-06-74740': 'Dữ kiện theo phần dẫn chung: V = 5,7 lít = 5,7×10⁻³ m³; p = 101 kPa; T = 37 + 273 = 310 K; oxygen chiếm 21% số phân tử; Nₐ = 6,02×10²³ mol⁻¹. Từ pV = (N/Nₐ)RT, suy ra N = pVNₐ/(RT). Số phân tử O₂: N_O₂ = 0,21N ≈ 2,8×10²². Vì đề hỏi x×10²² nên x = 2,8.',
  't08-short-02-47706': 'Số mol O₂: n = N/Nₐ = 1,204×10²⁴/(6,02×10²³) = 2 mol. Khối lượng: m = nM = 2×32 = 64 g.',
  't08-short-01-47418': 'Số mol CO₂: n = m/M = 44/44 = 1 mol. Ở điều kiện tiêu chuẩn 1 atm, 0°C, thể tích mol là 22,4 dm³/mol. Vậy V = nV_m = 1×22,4 = 22,4 dm³.',
  't08-short-03-47991': 'Dữ kiện: m = 48 g, M(CH₄) = 16 g/mol. Số mol n = m/M = 48/16 = 3 mol.',
  't09-short-01-50328': 'Đẳng nhiệt nên áp dụng Boyle: p₁V₁ = p₂V₂. Do đó p₂/p₁ = V₁/V₂ = 10/4 = 2,5. Áp suất sau khi nén bằng 2,5 lần áp suất ban đầu.',
  't08-short-09-50070': 'Helium có M = 4 g/mol nên n = m/M = 16/4 = 4 mol. Ở 0°C và 1 atm, V_m = 22,4 dm³/mol. V = 4×22,4 = 89,6 dm³.',
  't08-short-04-76662': 'Số mol oxygen: n = m/M = 4,8/32 = 0,15 mol.',
  't09-short-02-84064': null,
  't08-short-12-50982': 'Số mol nước: n = N/Nₐ. Khối lượng nước: m = nM(H₂O), với M = 18 g/mol. Cần đối chiếu lại số mũ trong số phân tử ở bản PDF vì chuỗi OCR của câu này bị mất ký tự; không nên lấy số liệu OCR cũ làm căn cứ.',
  't10-short-02-81925': null,
  't10-short-03-82426': null,
  't12-short-02-52772': 'Dữ kiện: CH₄ có M = 16 g/mol = 0,016 kg/mol, v_rms = 540 m/s. T = Mv_rms²/(3R) = 0,016×540²/(3×8,31) ≈ 187 K. Đổi sang Celsius: t = 187 − 273 ≈ −86°C. Đáp án 187°C trong bản cũ đã nhầm nhiệt độ Kelvin thành Celsius; đáp án được hiệu chỉnh.',
  't11-short-07-75512': 'Dữ kiện theo phần dẫn chung: N = 1,4×10²³ phân tử, T = 37 + 273 = 310 K, p = 101 kPa. Dùng pV = (N/Nₐ)RT, suy ra V = NR T/(pNₐ). Thay số được V ≈ 5,9×10⁻³ m³ = 5,9 lít.',
  't10-short-04-52995': 'Đẳng áp nên V₁/T₁ = V₂/T₂. T₁ = 37 + 273 = 310 K; V₂ = 1,5V₁. Suy ra T₂ = 1,5×310 = 465 K. Đổi sang Celsius: t₂ = 465 − 273 = 192°C.',
  't08-short-07-49296': 'Số mol chlorine: n = m/M = 168/70 = 2,4 mol.',
  't10-short-01-51445-verified': 'Đẳng áp: V₁/T₁ = V₂/T₂. Vì V₂ = 1,1V₁ và T₂ = T₁ + 30 K nên T₁/(T₁+30) = 1/1,1. Giải ra T₁ = 300 K, tương ứng t₁ = 300 − 273 = 27°C.',
  't13-short-11-75642': 'Dữ kiện: M(He) = 4 g/mol = 0,004 kg/mol; T = 47 + 273 = 320 K. Tốc độ căn quân phương: v_rms = √(3RT/M) = √(3×8,31×320/0,004) ≈ 1412 m/s.',
  't08-short-10-50398': 'Số mol N₂: n = N/Nₐ = 11,61×10²³/(6,02×10²³) ≈ 1,928 mol. Khối lượng: m = nM = 1,928×28 ≈ 54 g.',
  't12-short-01-page20': 'Với phân tử khí lí tưởng, động năng tịnh tiến trung bình W̄đ = 3kT/2. Ở 0°C, T = 273 K: W̄đ = 1,5×1,38×10⁻²³×273 ≈ 5,65×10⁻²¹ J. Đổi sang meV: chia cho 1,6×10⁻²² J/meV, được khoảng 35 meV. Đáp án 33 meV lưu trước đó không khớp dữ kiện 0°C nên đã hiệu chỉnh.',
  't10-short-06-54087': 'Đẳng áp: V₁/T₁ = V₂/T₂. T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K. V₂ = 9×400/300 = 12 lít. Độ tăng thể tích: ΔV = 12 − 9 = 3 lít.',
  't10-short-01-81288': 'Đẳng áp: V₁/T₁ = V₂/T₂. V₂ = 1,1V₁ và T₂ = 47 + 273 = 320 K. Suy ra T₁ = 320/1,1 ≈ 290,9 K; t₁ ≈ 290,9 − 273 = 17,9°C, làm tròn 18°C.',
  't08-short-01-75546': 'Bình thủy tinh cứng có dung tích không đổi 10 lít. Khi thêm oxygen, khí chiếm toàn bộ không gian bình; lượng khí tăng nhưng thể tích bình không đổi. Vậy thể tích oxygen trong bình vẫn là 10 lít.',
  't13-short-03-68720': 'Đẳng nhiệt nên p₁V₁ = p₂V₂. Với V₁ = 10 lít và V₂ = 4 lít, p₂/p₁ = V₁/V₂ = 10/4 = 2,5. Áp suất tăng 2,5 lần.',
  't12-short-03-53205': 'Không khí được xem là khí lưỡng nguyên tử, n = m/M ≈ 5,8/29 = 0,20 mol. Giai đoạn nén đẳng nhiệt không làm đổi T. Sau đó khí giãn đẳng áp từ V₁/2 về V₁ nên nhiệt độ tăng từ 273 K lên 546 K, ΔT = 273 K. Với khí lưỡng nguyên tử, Cᵥ = 5R/2. ΔU = nCᵥΔT = 0,20×(5/2)×8,31×273 ≈ 1134 J.',
  't10-short-02-51972': 'Đổi nhiệt độ: T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K. Đẳng áp nên V₂ = V₁T₂/T₁ = 0,3×400/300 = 0,40 dm³.',
  't11-short-03-71529': 'Gọi x là độ dịch chuyển piston về phía B. Khi cân bằng, áp suất hai bên bằng nhau. Áp dụng pV/T = hằng số cho mỗi ngăn, với chiều dài ban đầu 28 cm: (28+x)/(300+20) = (28−x)/(300−15). Giải ra x ≈ 1,62 cm.',
  'mock-short-03-20299-verified': 'Tốc độ căn quân phương của electron: v_rms = √(3kT/m). Thay T = 2×10⁶ K, k = 1,38×10⁻²³ J/K, m = 9,1×10⁻³¹ kg: v ≈ 9,54×10⁶ m/s. Do v = x×10⁶ m/s nên x = 9,54.',
  't09-short-08-54770': 'Mỗi lần bơm đưa vào lượng khí tương đương 0,2 lít ở 1 atm. Sau 60 lần, p₀V₀ tương đương 60×1×0,2 = 12 atm·lít. Khí chiếm quả bóng 2 lít và nhiệt độ không đổi: p×2 = 12, suy ra p = 6 atm.',
  't10-short-04-82861': 'Piston chuyển động tự do nên áp suất không đổi; thể tích tỉ lệ với nhiệt độ tuyệt đối. T₁ = 17+273 = 290 K, T₂ = 47+273 = 320 K. Chiều cao cuối h₂ = 25×320/290 ≈ 27,59 cm. Piston nâng Δh = 27,59−25 ≈ 2,6 cm.',
  't12-short-03-53205-verified': 'Không khí được xem là khí lưỡng nguyên tử, n = 5,8/29 = 0,20 mol. Nén đẳng nhiệt giữ T = 273 K; khi giãn đẳng áp từ nửa thể tích về thể tích đầu, T tăng gấp đôi nên ΔT = 273 K. ΔU = n(5R/2)ΔT = 0,20×2,5×8,31×273 ≈ 1134 J.',
  't11-short-05-73853': 'Số mol helium n = m/M = 2/4 = 0,5 mol. T = 27+273 = 300 K; V = 5 lít = 5×10⁻³ m³. p = nRT/V = 0,5×8,31×300/(5×10⁻³) ≈ 2,49×10⁵ Pa. Vì p = x×10⁵ Pa nên x ≈ 2,5.',
  'mock-short-04-21013': 'Động năng tịnh tiến trung bình W̄đ = 3kT/2. Độ tăng nhiệt độ là ΔT = 45−5 = 40 K, nên ΔW̄đ = 3kΔT/2 = 1,5×1,38×10⁻²³×40 = 8,28×10⁻²² J. Do đó x = 8,28.',
  't13-short-05-70319': 'Gọi p₀ là áp suất khí quyển tính theo mmHg. Khi miệng ống ở trên, áp suất khí bị nhốt là p₀+76 và chiều dài 180 mm; khi miệng ống ở dưới, áp suất là p₀−76 và chiều dài 220 mm. Đẳng nhiệt: (p₀+76)×180 = (p₀−76)×220, suy ra p₀ = 760 mmHg. Khi ống nằm ngang, p = p₀ nên chiều dài L = (p₀+76)×180/p₀ = 198 mm.',
  't08-short-05-48557-verified': 'Số mol N₂: n = 14/28 = 0,5 mol. Số phân tử: N = 0,5×6,02×10²³ = 3,01×10²³. Mỗi phân tử có đường kính 2r = 2×10⁻¹⁰ m. Chiều dài chuỗi: L = N×2r = 6,02×10¹³ m. Hệ số trước 10¹³ m là 6,02.',
  't10-short-05-53420': 'Khối lượng khí không đổi: m = 12 g. Ban đầu V₁ = 4 lít, T₁ = 7+273 = 280 K. Sau nung, khối lượng riêng ρ₂ = 1,2 g/lít nên V₂ = m/ρ₂ = 12/1,2 = 10 lít. Quá trình đẳng áp: T₂ = T₁V₂/V₁ = 280×10/4 = 700 K.',
  't11-short-04-118688': 'Van mở ở p₂ = 9 kPa. Trước đó p₁ = 2,5 kPa, T₁ = 21+273 = 294 K. Coi thể tích và lượng hơi không đổi: p₁/T₁ = p₂/T₂. T₂ = 294×9/2,5 = 1058,4 K. Đổi sang Celsius: t₂ ≈ 1058,4−273 = 785°C.',
  'mock-short-04-8.28-verified': 'ΔT = 45−5 = 40 K. Động năng tịnh tiến trung bình tăng ΔW̄đ = 3kΔT/2 = 1,5×1,38×10⁻²³×40 = 8,28×10⁻²² J. Vậy x = 8,28.',
  'mock-short-01-18481': null,
  't08-short-11-50659': 'Số mol helium n = N/Nₐ = 1,505×10²³/(6,02×10²³) = 0,25 mol. m = nM = 0,25×4 = 1,0 g.',
  't09-short-02-50565': 'Đẳng nhiệt nên p₁V₁ = p₂V₂. Đặt p₁ = p, p₂ = p+40 kPa. Ta có 9p = 6(p+40) ⇒ 3p = 240 ⇒ p = 80 kPa.',
  't13-short-01-66789': 'Số mol helium: n = N/Nₐ = 3,01×10²³/(6,02×10²³) = 0,5 mol.',
  't11-short-04-72749-verified': 'Tính số bóng từ bảo toàn số mol. Trạng thái đầu bình: p₁=6×10⁶ Pa, V₁=30 lít, T₁=310 K. Khi ngừng bơm, áp suất bình giảm tới áp suất bóng p₂=1,03×10⁵ Pa; nhiệt độ khí trong bình lấy theo dữ kiện T₂=288 K và thể tích chung gồm bình cùng n quả bóng: V₂=30+1,5n (lít). Áp dụng p₁V₁/T₁ = p₂V₂/T₂, giải n ≈ 1062 quả.',
  't10-short-03-52498': 'Ở cùng áp suất, V/T không đổi. T₁ = 273 K, T₂ = 27+273 = 300 K, V₁ = 22,4 lít. V₂ = 22,4×300/273 ≈ 24,6 lít.',
  't08-short-08-49570': 'Số mol helium n = N/Nₐ = 3,01×10²³/(6,02×10²³) = 0,5 mol. Ở 0°C, 1 atm: V = n×22,4 = 11,2 lít.',
  't08-short-03-76256': 'Số mol N₂ = 1,505×10²³/(6,02×10²³) = 0,25 mol. Ở điều kiện tiêu chuẩn, V = 0,25×22,4 = 5,6 lít; cần đối chiếu đáp số 5,5 lít trong ngân hàng do làm tròn hoặc lỗi nhập.',
  't12-short-04-82854': 'Buồng kín có thể tích không đổi nên Q = ΔU = (n_Ar·Cᵥ,Ar + n_O₂·Cᵥ,O₂)ΔT. Với Ar đơn nguyên tử, Cᵥ=3R/2; với O₂ lưỡng nguyên tử, Cᵥ=5R/2. Tổng nhiệt dung: Cᵥ,tổng = [1,2×3/2 + 4×5/2]R = 11,8R ≈ 98,1 J/K. ΔT = Q/C = 100/98,1 ≈ 1,02 K, làm tròn 1,0 K. Con số 15,3 K trong tài liệu dùng tử số 1500 thay vì 100 J, không khớp đề; đã hiệu chỉnh.',
  't09-short-07-54266': 'Bình ban đầu có p₁V₁ = 10×20 = 200 atm·lít. Khi không thể đẩy khí thêm, lượng khí còn lại trong bình ở 1 atm chiếm 20 lít, tương ứng 20 atm·lít. Khí đã chuyển sang các lọ tương đương 200−20 = 180 atm·lít. Mỗi lọ 5 lít ở 1 atm cần 5 atm·lít, nên số lọ = 180/5 = 36.',
  't11-short-02-70858': 'Trạng thái đầu: p₁=1 atm, V₁=2,4 dm³, T₁=27+273=300 K. Sau nén: V₂=2,4−2,0=0,4 dm³; p₂=1+12=13 atm. Phương trình trạng thái: T₂=(p₂V₂/p₁V₁)T₁=(13×0,4)/(1×2,4)×300=650 K. Đổi sang Celsius: 650−273=377°C.',
  't13-short-02-67231': 'Tổng mật độ phân tử: n_N = p/(kT) = 152×10³/(1,38×10⁻²³×300) ≈ 3,67×10²⁵ m⁻³. Khối lượng mol trung bình: M_tb = ρRT/p = 2×8,31×300/(152×10³) ≈ 0,0328 kg/mol = 32,8 g/mol. Gọi x là phần mol He: 4x+40(1−x)=32,8 ⇒ x=0,20. Mật độ phân tử He =0,20×3,67×10²⁵ =7,34×10²⁴ =73,4×10²³ m⁻³, làm tròn 73.',
  't13-short-04-69254': 'Đường kính piston d=3 cm nên diện tích A=πd²/4=π(0,03)²/4≈7,07×10⁻⁴ m². Đẳng nhiệt, thể tích giảm 4 lần nên áp suất khí cuối p₂=4p₀. Lực cần giữ piston cân bằng bằng phần chênh áp: F=(p₂−p₀)A=3p₀A=3×10⁵×7,07×10⁻⁴≈212 N.',
  't11-short-08-76029': 'Khối lượng không khí bơm vào: m=35×0,4=14 g=0,014 kg. Số mol n=m/M=14/29≈0,4828 mol. Thể tích bóng hình cầu: V=4πr³/3=4π(0,11)³/3≈5,575×10⁻³ m³. T=30+273=303 K. p=nRT/V≈2,18×10⁵ Pa. Đổi sang atm với 1 atm=101 kPa: p≈2,16 atm.',
  't11-short-01-70124': 'Áp dụng p₁V₁/T₁=p₂V₂/T₂. Vì p₂=0,63p₁ nên V₂=V₁(T₂/T₁)/0,63. T₁=27+273=300 K; T₂=5+273=278 K. V₂=100×278/(300×0,63)≈147 lít.',
  't13-short-10-74750': 'Số mol H₂ trong khí cầu: n=pV/(RT), với p=0,9×101325 Pa, V=328 m³, T=300 K. Khối lượng khí m=nM, M(H₂)=0,002 kg/mol; tính được m xấp xỉ 24 kg. Lưu lượng nạp 2,5 g/s =0,0025 kg/s. Thời gian t=m/ṁ≈24/0,0025=9600 s=160 phút.',
  't11-short-12-81596': 'Nhiệt độ và thể tích bình không đổi. Số mol oxygen đã dùng: Δn=(p₁−p₂)V/(RT). Khối lượng đã cấp: Δm=MΔn=M(p₁−p₂)V/(RT). Thay M=0,032 kg/mol, Δp=2×10⁷−1×10⁷=10⁷ Pa, V=0,005 m³, T=300 K: Δm≈0,032×10⁷×0,005/(8,31×300)≈0,64 kg.',
  't11-short-10-78002': 'Thể tích chai không đổi nên p/T không đổi trước khi nút bật. T₁=27+273=300 K; T₂=87+273=360 K. p₂=p₁T₂/T₁=101325×360/300=121590 Pa. Lực ma sát cân bằng lực do chênh áp: F=(p₂−p_atm)S=(121590−101325)×1,8×10⁻⁴≈3,65 N.',
  't11-short-09-76861': 'Áp suất bọt ở đáy hồ: p₁=p₀+ρgh=1,013×10⁵+1000×9,8×15=2,483×10⁵ Pa. Trên mặt nước p₂=p₀=1,013×10⁵ Pa. T₁=7+273=280 K, T₂=22+273=295 K. p₁V₁/T₁=p₂V₂/T₂ ⇒ V₂=V₁(p₁/p₂)(T₂/T₁)≈2,58 mm³.',
  't11-short-01-115169': 'Bình có áp suất và thể tích không đổi; khi tăng T, một phần hydrogen thoát ra. Số mol giảm: Δn=(pV/R)(1/T₁−1/T₂). Khối lượng thoát ra Δm=MΔn. Dùng p=2×10⁵ Pa, V=4,5×10⁻³ m³, M=2×10⁻³ kg/mol, T₁=297 K, T₂=301 K: Δm≈9,7×10⁻⁶ kg, nên a≈9,7.',
  't12-short-07-59820': 'Vì v_rms² ∝ T. Lần đầu v tăng từ 100 lên 150 m/s khi nhiệt độ tăng 100 K: T₂/T₁=(150/100)²=2,25 và T₂−T₁=100 K ⇒ T₁=80 K, T₂=180 K. Lần sau v tăng từ 150 lên 250 m/s: T₃/T₂=(250/150)²=25/9 ⇒ T₃=500 K. Mức tăng cần thêm: ΔT=500−180=320 K.',
  't10-short-07-54656': 'Áp suất không đổi và tiết diện ống không đổi nên chiều dài cột khí tỉ lệ với nhiệt độ tuyệt đối. T₁=77+273=350 K; T₂=350−42=308 K. L₂=L₁T₂/T₁=35×308/350=30,8 cm.',
  't11-essay-01-pressure-short': 'Bình kín, V và lượng khí không đổi nên p₁/T₁=p₂/T₂. T₁=100+273=373 K; T₂=20+273=293 K. p₂=10⁵×293/373≈7,855×10⁴ Pa=78,55 kPa.',
  't11-essay-04-density-short': 'Khối lượng riêng của khí lí tưởng: ρ=pM/(RT). Đổi p=1,1 atm≈1,1×101325 Pa; M(O₂)=0,032 kg/mol; T=24+273=297 K. ρ≈(1,1×101325×0,032)/(8,31×297)≈1,44 kg/m³, làm tròn một chữ số thập phân là 1,4 kg/m³.',
  't11-essay-06-breath-volume-short': 'Thể tích khí thở vào V=m/ρ. Đổi m=1,00 g=0,001 kg. V=0,001/1,29≈7,75×10⁻⁴ m³=0,775 lít.',
  't11-essay-05-rescue-time-short': 'Số mol oxygen ban đầu trong bình: n=pV/(RT), với p=200 atm=200×101325 Pa, V=0,006 m³, T=293 K. Số phân tử N=nNₐ. Nếu mỗi phút cần 6,0×10²² phân tử thì thời gian t=N/(6,0×10²²)≈502 phút.',
  't10-essay-05-initial-temp-short': 'Gọi V là thể tích ban đầu. Ở 450 K, thể tích là V+3; ở 300 K, thể tích là V−2. Cùng áp suất nên (V+3)/450=(V−2)/300. Giải được V=12 cm³. Từ V/T không đổi: T=450×12/(12+3)=360 K.',
  't10-essay-06-mercury-mass-short': 'Bình cầu có V₁=4πr³/3=4,5π cm³. T₁=40+273=313 K; T₂=100+273=373 K. Đẳng áp, V₂=V₁T₂/T₁ nên ΔV=V₁(T₂/T₁−1)≈2,71 cm³. Khối lượng thủy ngân chảy ra m=ρHgΔV=13,6×2,71≈36,8 g, làm tròn 37 g.',
  't11-short-04-balloons-count': 'Không thể dùng hết khí trong bình: khi áp suất bình giảm tới áp suất quả bóng thì dừng bơm. Trạng thái đầu p₁=6×10⁶ Pa, V₁=30 lít, T₁=310 K. Trạng thái cuối p₂=1,03×10⁵ Pa, T₂=288 K, V₂=30+1,5n lít. Bảo toàn số mol qua phương trình trạng thái: p₁V₁/T₁=p₂V₂/T₂. Giải ra n≈1062 quả.',
  't11-short-11-he-h2-piston-temp': 'Ban đầu hai khí cùng p và T. Khi piston ở chính giữa, hai ngăn có cùng thể tích và cân bằng áp suất. Với mỗi khí, pV=nRT; do mHe=mH₂ nhưng MHe=4 và MH₂=2 nên nH₂/nHe=2. Khi V và p cuối bằng nhau, THe/TH₂=nH₂/nHe=2. H₂ giữ ở 27°C=300 K nên THe=600 K=327°C.'
 };

 const MC = {
  't11-mc-36-39816':'n = pV/(RT). Đổi p=250 kPa=2,5×10⁵ Pa, V=10 lít=0,010 m³, T=27+273=300 K. Số mol n≈1,00 mol. m=nM≈1×32=32,1 g, chọn D.',
  't11-mc-11-97402':'n=m/M=7/28=0,25 mol; T=2+273=275 K; V=5×10⁻³ m³. p=nRT/V≈1,14×10⁵ Pa≈1,1 atm, chọn A.',
  't12-mc-36-32811':'O₂ là khí lưỡng nguyên tử ở nhiệt độ thường nên Cᵥ=5R/2. n=16/32=0,5 mol; ΔT=320−300=20 K. ΔU=nCᵥΔT=0,5×(5/2)×8,31×20≈208 J. Đáp án đúng là phương án 208 J (D); khóa cũ lưu B nên đã hiệu chỉnh.',
  't10-essay-03-to-mc':'Đẳng áp nên V₂/V₁=T₂/T₁. Thể tích giảm 5% ⇒ V₂/V₁=0,95. T₁=80+273=353 K; T₂=0,95×353=335,35 K. t₂=335,35−273≈62,35°C, chọn B.',
  'mock-essay-02a-to-mc':'Thể tích tăng ΔV=S·d=24 cm²×2 cm=48 cm³. V₂=240+48=288 cm³, chọn C.',
  't11-mc-11-18775':'Hai phòng có V và p bằng nhau. Từ pV=nRT suy ra n∝1/T. Phòng lạnh có nhiệt độ tuyệt đối thấp hơn nên chứa nhiều mol và nhiều phân tử khí hơn; chọn C.',
  't09-mc-12-67282':'Ban đầu khí bị nhốt dưới cột Hg: p₁=80+40=120 cmHg, L₁=20 cm. Khi lật ngược, áp suất khí là p₂=80−40=40 cmHg. Đẳng nhiệt: p₁L₁=p₂L₂ ⇒ L₂=120×20/40=60 cm. Để chứa cả cột khí 60 cm và cột Hg 40 cm, chiều dài tối thiểu là 100 cm, chọn C.',
  't11-mc-24-30013':'T₁=67+273=340 K; V₂=V₁/4; p₂/p₁=8/1,6=5. Theo phương trình trạng thái T₂/T₁=(p₂V₂)/(p₁V₁)=5×1/4=1,25. T₂=425 K, chọn A.',
  't09-mc-31-recovered':null,
  't12-mc-23-24864':'v_rms=√(3RT/M), nên tỉ số v_N₂/v_He=√[(T_N₂/M_N₂)/(T_He/M_He)]. Thay T_N₂=300 K, M_N₂=28 g/mol, T_He=273 K, M_He=4 g/mol: tỉ số ≈√[(300/28)/(273/4)]≈0,40, chọn C.',
  't11-mc-23-29395':'Phương trình trạng thái: p₂/p₁=(V₁/V₂)(T₂/T₁). T₁=300 K, T₂=333 K, V₁=10 lít, V₂=4 lít, p₁=1 atm. p₂=1×10/4×333/300≈2,78 atm, chọn A.',
  't11-mc-16-23971':'Nồi áp suất kín, khi van bị tắc thì hơi không thoát ra. Nhiệt tiếp tục làm tăng nhiệt độ khí; thể tích và lượng khí gần như không đổi nên p/T không đổi và áp suất tăng theo nhiệt độ. Áp suất và nhiệt độ cùng tăng, chọn B.',
  't10-mc-25-25189':'Đẳng áp: V₁/T₁=V₂/T₂. T₁=300 K, T₂=340 K và ΔV=1 lít. V₂/V₁=340/300 nên V₁(40/300)=1 ⇒ V₁=7,5 lít, chọn D.',
  't10-mc-33-29630':'T₁=177+273=450 K, T₂=27+273=300 K. Bình biến đổi đẳng áp nên V₂=V₁T₂/T₁=15×300/450=10 cm³. Độ giảm thể tích=15−10=5 cm³, chọn B.',
  't09-mc-37-recovered':'Đẳng nhiệt. Gọi áp suất và thể tích đầu là p, V (đơn vị áp suất 10⁵ Pa, thể tích lít). Hai dữ kiện cho: pV=(p+2)(V−3) và pV=(p+5)(V−5). Rút gọn được 3p=2V−6 và p=V−5. Giải hệ: V=9 lít, p=4×10⁵ Pa.',
  't09-mc-25-recovered':'Piston dịch 2 cm làm thể tích khí tăng ΔV=S·d=24×2=48 cm³. V₂=240+48=288 cm³. Đẳng nhiệt: p₂=p₁V₁/V₂=100×240/288≈83,3 kPa. Lực giữ piston cần tính từ chênh áp (p₂−p₀)S; cần đối chiếu hướng dịch chuyển và các phương án gốc trước khi xác nhận đáp án.',
  't09-mc-23-recovered':'Đẳng nhiệt: p₁V₁=p₂V₂. V₁=6 lít, V₂=9 lít nên p₂=(2/3)p₁. Mức giảm 50 kPa: p₁−p₂=50 ⇒ p₁/3=50 ⇒ p₁=150 kPa.',
  't09-mc-23-20159':'Đẳng nhiệt: p₁×6=p₂×9 và p₁−p₂=50 kPa. Suy ra p₂=2p₁/3; p₁/3=50 ⇒ p₁=150 kPa, p₂=100 kPa. Chọn A.',
  't09-mc-22-recovered':'Piston kéo ra 4 cm làm thể tích tăng S·d=30×4=120 cm³. V₂=240+120=360 cm³. Đẳng nhiệt: p₂=p₁V₁/V₂=10⁵×240/360≈6,67×10⁴ Pa.',
  't09-mc-21-recovered':'Áp suất cuối p₂=1,0×10⁵+1,5×10⁵=2,5×10⁵ Pa. Đẳng nhiệt: p₁V₁=p₂V₂ ⇒ V₂=1,0×10⁵×50/(2,5×10⁵)=20 lít.',
  't09-mc-32-recovered':'Ở đáy hồ p₁=p₀+ρgh=10⁵+1000×10×5=1,5×10⁵ Pa; ở mặt nước p₂=10⁵ Pa. Đẳng nhiệt: V₂/V₁=p₁/p₂=1,5. Bọt khí ở mặt nước lớn gấp 1,5 lần.',
  't09-mc-34-recovered':'Đẳng nhiệt: p₁V₁=p₂V₂. V₂=V₁p₁/p₂=2,4×101,7/101,01≈2,42 lít.',
  't09-mc-28-recovered':'Thể tích mỗi nhịp bơm là S·l=8 cm²×25 cm=200 cm³. Lượng khí tăng trong bánh xe quy về áp suất khí quyển: (p₂V₂−p₁V₁)/p₀=(1,7×2000−1×1500)=1900 cm³. Mỗi lần bơm đưa vào 200 cm³, nên cần 1900/200=9,5, tức khoảng 10 lần.',
  't09-essay-06-to-mc':'Lượng khí cần bổ sung quy theo áp suất và thể tích của lốp: Δ(pV)=(2,4−2,0)×25=10 atm·lít. Mỗi giây bơm đưa vào 5×0,5=2,5 atm·lít. Thời gian=10/2,5=4 s, chọn B.',
  't10-mc-29-27310':'Đẳng áp: T₂/T₁=V₂/V₁=12/10=1,2. T₁=27+273=300 K nên T₂=360 K=87°C, chọn A.',
  't10-mc-30-27876':'Đẳng áp: V₂/V₁=T₂/T₁. T₁=27+273=300 K; T₂=127+273=400 K. V₂=3×400/300=4 cm³, chọn D.',
  't10-mc-31-28406':'Đổi nhiệt độ sang Kelvin: T₁=273+273=546 K; T₂=546+273=819 K. Đẳng áp nên V₂=10×819/546=15 lít, chọn C.',
  't10-mc-34-30350':'Ở 1 bar, định luật Charles cho V₂=V₁T₂/T₁. T₁=25+273=298 K; T₂=60+273=333 K. V₂=24,79×333/298≈27,70 lít, chọn B.',
  't10-mc-36-31361':'Piston chuyển động tự do nên áp suất không đổi và V tỉ lệ với T. h₂=h₁T₂/T₁=40×(61+273)/(17+273)≈46,07 cm. Piston nâng khoảng 6,07 cm, chọn D.',
  't10-mc-39-33430':'Gọi V₀ là thể tích bình cầu, ống ngang có tiết diện 0,1 cm². Thể tích khí tại 10°C là V₀+2,5 cm³; tại 25°C là V₀+16 cm³. Đẳng áp: (V₀+2,5)/283=(V₀+16)/298. Giải được V₀≈252 cm³.',
  't10-mc-37-32005':'Đẳng áp: V₁/T₁=V₂/T₂. T₁=300 K, T₂=300×0,20/0,16=375 K. Đổi sang Celsius: t₂=375−273=102°C, chọn C.',
  't10-mc-40-34217':'Đẳng áp, khối lượng không đổi. V₂=V₁T₂/T₁=5×(147+273)/(27+273)=7 lít. Khối lượng riêng ρ₂=m/V₂=28/7=4 g/lít, chọn B.',
  't10-mc-09-66836':'Đẳng áp: V₂=V₁T₂/T₁. T₁=30+273=303 K; T₂=−70+273=203 K. V₂=30,6×203/303≈20,5 ml, chọn C.',
  't11-mc-08-96500':'Ở cùng áp suất, khối lượng riêng của cùng chất khí tỉ lệ nghịch với nhiệt độ tuyệt đối: ρ₁/ρ₂=T₂/T₁. T_trong=300 K; T_ngoài=315 K. ρ_trong/ρ_ngoài=315/300=1,05, chọn C.',
  't11-mc-35-39308':'Từ pV=nRT và n=m/M: M=mRT/(pV). Thay m=0,011 kg, T=16+273=289 K, p=2×10⁵ Pa, V=3×10⁻³ m³: M≈0,044 kg/mol=44 g/mol, chọn D.',
  't11-mc-10-97155':'N=3,01×10²³ nên n=N/Nₐ=0,5 mol. Ở 0°C, 1 atm, V=n×22,4=11,2 lít, chọn A.',
  't11-mc-38-41061':'Tổng số mol ban đầu: n=p₀(3V₁)/(RT₀). Sau khi duy trì hai bình ở nhiệt độ T₁=250 K và T₂=350 K, áp suất chung p thỏa pV₁/(RT₁)+p(2V₁)/(RT₂)=n. Suy ra p≈1,03 atm, chọn C.',
  't13-mc-32-33107':'Đẳng nhiệt: p_đáyV_đáy=p_mặtV_mặt. V_mặt=1,2V_đáy nên p_đáy=1,2p_mặt. Áp suất ở đáy lớn hơn áp suất mặt hồ 1,2 lần, chọn D.',
  't13-mc-34-34324':'Đẳng nhiệt: p₁V₁=p₂V₂. p₂=p₁+0,5×10⁵=1,5×10⁵ Pa; V₂=1,0×10⁵×15/(1,5×10⁵)=10 lít, chọn D.',
  't13-mc-33-33737':'Đẳng nhiệt vì T₁=T₂=370 K. Boyle: p₁V₁=p₂V₂ ⇒ p₂=6×4/3=8 atm, chọn C.',
  't13-mc-26-29194':'Số mol nước n=m/M=200/18≈11,11 mol. Số phân tử N=nNₐ≈11,11×6,02×10²³≈6,69×10²⁴ phân tử, chọn D.',
  't13-mc-27-29657':'Số mol He n=N/Nₐ=9,03×10²³/(6,02×10²³)=1,5 mol. Khối lượng m=nM=1,5×4=6 g, chọn C.',
  't11-essay-04-to-mc':'Từ pV=nRT và m=nM: m=pVM/(RT). Đổi V=5000 lít=5 m³, p=1,1 atm, T=24+273=297 K, M=0,032 kg/mol. Tính được m≈7,2 kg, chọn C.',
  't13-essay-04-to-mc':'Lực lò xo F=kx=10³×0,01=10 N. Diện tích lỗ A=1 cm²=10⁻⁴ m² nên áp suất tăng thêm Δp=F/A=10⁵ Pa. Áp suất mở van p₂≈2×10⁵ Pa. Đẳng tích: T₂/T₁=p₂/p₁=2; T₂=2×(20+273)=586 K=313°C, chọn C.',
  't13-essay-05-to-mc':'Đẳng nhiệt: p₁V₁=p₂V₂. p₂=1,2×10⁵×7,95/8,75≈1,09×10⁵ Pa, chọn B.',
  't13-essay-02a-to-mc':'Gọi p₀ là áp suất khí quyển. Khi miệng ống ở trên: p₁=p₀+20 cmHg, L₁=28 cm. Khi miệng ở dưới: p₂=p₀−20 cmHg, L₂=48 cm. Đẳng nhiệt: (p₀+20)×28=(p₀−20)×48 ⇒ p₀=76 cmHg, chọn C.',
  't09-mc-26-recovered':'Ở cùng nhiệt độ, lượng khí tỉ lệ với pV. Một bình He cung cấp 100×0,05=5 atm·m³; khí cầu cần 0,1×100=10 atm·m³. Cần 10/5=2 bình, chọn B.',
  't09-mc-40-recovered':'Ở cùng nhiệt độ 0°C, khối lượng riêng tỉ lệ với áp suất. ρ=150×1,43=214,5 kg/m³. V=10 lít=0,01 m³ nên m=ρV≈2,145 kg.',
  't13-mc-47-44892':'Theo thuyết động học phân tử p=(1/3)μm v_rms². Khi tốc độ căn quân phương tăng 2 lần, v² tăng 4 lần; khi thể tích giảm một nửa thì mật độ phân tử μ tăng 2 lần. Do đó áp suất tăng 4×2=8 lần, chọn B. Phần giải thích cũ kết luận 32 lần là sai.',
  't13-mc-24-27879':'Động năng tịnh tiến trung bình của một phân tử khí lí tưởng chỉ phụ thuộc nhiệt độ: W̄đ=3kT/2. Ba bình có cùng nhiệt độ nên động năng tịnh tiến trung bình của phân tử trong cả ba bình bằng nhau, chọn D. Khóa cũ chọn B không phù hợp định luật này; đáp án đã sửa.',
  't13-mc-48-45646':'v_rms=√(3RT/M). Với M(H₂)=2,01 g/mol=2,01×10⁻³ kg/mol và T=360 K: v=√(3×8,31×360/(2,01×10⁻³))≈2,11×10³ m/s. Chọn A. Phương án bị OCR thành 10⁶; bản gốc là 10³.',
  't12-mc-34-31573':'Với khí lí tưởng đơn nguyên tử U=3pV/2. Trạng thái sau có p₂V₂=(2p₁)(2V₁)=4p₁V₁ nên U₂=4U₁=400 kJ. ΔU=U₂−U₁=300 kJ, chọn C.',
  't12-mc-33-31030':'Với khí lí tưởng, nội năng chỉ phụ thuộc nhiệt độ. Ở hai trạng thái pV đều bằng nhau: 2×2=1×4 (atm·lít), nên T không đổi và nội năng không đổi, chọn C.',
  't12-mc-07-14754':'Theo hệ thức W̄đ=3kT/2 và v_rms²∝W̄đ, động năng trung bình tỉ lệ với bình phương tốc độ. Nếu trung bình bình phương tốc độ tăng 2 lần thì W̄đ và T cũng tăng 2 lần, chọn C.',
  't12-mc-32-30312':'Helium đơn nguyên tử có Cᵥ,m=3R/2; methane theo mô hình phân tử phức tạp dùng trong bài có Cᵥ,m=3R. Nhiệt dung tổng của 2 mol He là 2×3R/2=3R, bằng nhiệt dung của 1 mol CH₄. Chọn B.',
  't11-mc-06-95926':'R=8,31 J/(mol·K). Vì 1 atm·L = 101,325 J nên R=8,31/101,325≈0,082 atm·L/(mol·K), chọn D.',
  't11-mc-05-95665':'Với lượng khí xác định, pV/T không đổi. Khi V tăng đồng thời T giảm thì cả hai thay đổi đều làm p giảm: p∝T/V. Chọn B.',
  't09-mc-15-15690':'Sau khi trộn hai khối khí trong cùng bình, các phân tử của cả hai khí cùng chiếm toàn bộ không gian bình; vì vậy chúng có chung thể tích của bình, chọn D.',
  't10-mc-08-66581':'Định luật Charles phát biểu: ở áp suất không đổi, thể tích của một lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối. Đó là phương án B.',
  't10-mc-03-11156':'Định luật Charles sử dụng nhiệt độ tuyệt đối: V/T=hằng số khi p không đổi. Phương án A nêu đúng định nghĩa, còn nhiệt độ Celsius không thể thay trực tiếp vào tỉ lệ này.',
  't10-mc-05-12554':'Quá trình đẳng áp được định nghĩa bởi p=const. Vì vậy áp suất không đổi trong suốt quá trình, chọn D.',
  't10-mc-05-65960':'Ở áp suất không đổi, làm lạnh làm T giảm nên V giảm theo định luật Charles. Khối lượng khí không đổi, vì vậy ρ=m/V tăng; chọn A.',
  't09-mc-03-9927':'Định luật Boyle chỉ áp dụng cho lượng khí xác định khi nhiệt độ không đổi: p₁V₁=p₂V₂. Chọn C.',
  't09-mc-02-73018':'Quá trình giữ nhiệt độ không đổi được gọi là đẳng nhiệt, chọn C.',
  't09-mc-04-10364':'Nén đẳng nhiệt làm thể tích giảm. Theo Boyle pV=const nên áp suất tăng, chọn A.',
  't09-mc-18-17512':'Theo Boyle, p₁V₁=p₂V₂. Khi áp suất tăng gấp đôi thì thể tích giảm còn một nửa, chọn A.',
  't09-mc-20-18433':'Thể tích tăng từ 2 lên 12 lít, tức tăng 6 lần. Đẳng nhiệt nên áp suất giảm 6 lần theo Boyle, chọn A.',
  't09-mc-06-11456':'Trên hệ trục p–V, đẳng nhiệt thỏa pV=const nên đồ thị là một nhánh hyperbol, chọn D.',
  't09-mc-13-14385':'Ở nhiệt độ không đổi, p=μkT nên μ=p/(kT). Vì T cố định, mật độ phân tử tỉ lệ thuận với áp suất, chọn B.',
  't09-mc-16-16213':'Dịch chuyển piston từ từ giúp khí trao đổi nhiệt với môi trường đủ lâu, tránh tăng/giảm nhiệt độ đáng kể. Nhờ đó quá trình gần đẳng nhiệt, chọn B.',
  't09-theory-dalton-to-mc':'Định luật Dalton: áp suất toàn phần của hỗn hợp khí không phản ứng bằng tổng các áp suất riêng phần, chọn C.',
  't11-mc-04-15487':'Phương trình trạng thái pV=nRT. Với lượng khí cố định, n và R không đổi nên pV tỉ lệ thuận với nhiệt độ tuyệt đối T, chọn A.',
  't11-mc-07-16575':'Từ pV=nRT suy ra pV/T=nR. Vế phải phụ thuộc số mol n của lượng khí, do đó phát biểu nói đại lượng này không phụ thuộc lượng khí là sai, chọn B.',
  't08-mc-44-25696':'Áp suất chất khí hình thành do các phân tử chuyển động hỗn loạn va chạm vào thành bình và truyền động lượng cho thành. Chọn A.',
  't08-mc-48-27642':'Trong bình kín có thể tích không đổi, khi đun nóng thì các phân tử chuyển động nhanh hơn, va chạm vào thành bình mạnh hơn và thường xuyên hơn; áp suất tăng, chọn B.',
  't08-mc-55-31246':'Tăng nhiệt độ làm tăng động năng trung bình và tốc độ chuyển động nhiệt của các phân tử, chọn A.',
  't08-mc-42-24563':'Mô hình khí lí tưởng coi phân tử là chất điểm và bỏ qua tương tác khi chúng chưa va chạm; tương tác chỉ xuất hiện trong các va chạm đàn hồi, chọn A.',
  't08-mc-50-28689':'Chuyển động Brown là chuyển động hỗn loạn của hạt nhỏ do va chạm với các phân tử môi trường. Hạt trong luồng khói vừa phun ra từ ống xả còn chịu dòng khí đẩy mạnh, không phải chuyển động Brown thuần túy; chọn A.',
  't08-mc-53-30457':'Theo thuyết động học phân tử, mọi chất được cấu tạo từ những hạt riêng biệt (nguyên tử, phân tử), chọn A.',
  't08-mc-54-30725':'Chuyển động Brown quan sát được ở các hạt nhỏ lơ lửng trong chất lỏng hoặc chất khí; chọn B.',
  't08-mc-58-32844':'Số mol n=m/M=88/44=2 mol, chọn B.',
  't08-mc-62-34427':'Số mol oxygen n=m/M=4/32=0,125 mol, chọn C.',
  't08-mc-63-34671':'Một phân tử H₂O gồm 2 H và 1 O, tổng cộng 3 nguyên tử. Một mol H₂O có 3Nₐ nguyên tử=1,806×10²⁴, chọn A.',
  't08-mc-07-62995':'Số mol phân tử n=11,28×10²⁶/(6,02×10²³)≈1874 mol. Khối lượng mol M=30000 g/1874≈16 g/mol, tương ứng CH₄, chọn B.',
  't08-mc-05-62348':'Trong mô hình khí lí tưởng, kích thước phân tử được bỏ qua nhưng khối lượng của phân tử không thể bỏ qua vì nó quyết định động lượng và áp suất. Phát biểu sai là phương án A.',
  't08-mc-06-62680':'Khí lí tưởng được mô hình hóa bằng các phân tử có kích thước rất nhỏ so với khoảng cách trung bình, chuyển động hỗn loạn và chỉ tương tác đáng kể khi va chạm. Chọn D.',
  't08-mc-06-8237':'Các phân tử va chạm với thành bình và đổi động lượng; lực trung bình tác dụng lên thành tạo ra áp suất. Chọn B.',
  't08-mc-08-8979':'Khi phân tử khí va chạm thành bình, nó truyền độ biến thiên động lượng cho thành. Tổng tác dụng của vô số va chạm tạo nên áp suất, chọn B.',
  't08-mc-09-9454':'Ở điều kiện tiêu chuẩn 0°C, 1 atm, thể tích mol khí lí tưởng là 22,4 lít/mol, chọn A.',
  't08-mc-59-33176':'Khối lượng mol oxygen phân tử O₂ là 2×16=32 g/mol, chọn B.',
  't10-mc-10-67083':'T₁=27+273=300 K; khí được nung nóng thêm 60°C nên T₂=360 K. Đẳng áp: V₂=10×360/300=12 lít, chọn B.',
  't10-mc-26-25701':'T₁=47+273=320 K; T₂=207+273=480 K. Đẳng áp: V₂=5×480/320=7,5 lít, chọn A.',
  't13-mc-36-35844':'Đẳng áp nên V/T không đổi. V₂=V₁/2 kéo theo T₂=T₁/2; nhiệt độ tuyệt đối giảm 2 lần, chọn D.',
  't12-mc-09-15781':'Làm lạnh khí trong bình cứng làm T giảm. Với V và n không đổi, p/T không đổi nên áp suất giảm; đồng thời W̄đ=3kT/2 cũng giảm. Chọn A.',
  't12-mc-11-66079':'Động năng tịnh tiến trung bình W̄đ=3kT/2, vì vậy tỉ lệ thuận với nhiệt độ tuyệt đối, chọn D.',
  't12-mc-05-13019':'v_rms được định nghĩa bởi v_rms=√(⟨v²⟩). Khi một phân tử có động năng đúng bằng động năng tịnh tiến trung bình thì tốc độ của nó bằng v_rms; không có nghĩa mọi phân tử đều chạy cùng tốc độ, chọn B.',
  't12-mc-14-19362':'Công của khí khi biến đổi thể tích A=pΔV (theo độ lớn ở quá trình đẳng áp). Nếu khối khí không thực hiện công thì ΔV=0, tức quá trình đẳng tích, chọn B.',
  't12-theory-isochoric-work-to-mc':'Trong quá trình đẳng tích, ΔV=0 nên công pΔV bằng 0, chọn A.',
  't12-theory-monatomic-to-mc':'Khí đơn nguyên tử chỉ có 3 bậc tự do tịnh tiến ở mô hình cơ bản, chọn A.',
  't12-theory-diatomic-to-mc':'Phân tử lưỡng nguyên tử ở nhiệt độ thường có 3 bậc tịnh tiến và 2 bậc quay, tổng cộng 5 bậc tự do, chọn C.',
  't12-theory-internal-energy-to-mc':'Với khí lí tưởng, nội năng là tổng động năng chuyển động nhiệt của các phân tử; thế năng tương tác được bỏ qua, chọn A.',
  't12-theory-first-law-signA-to-mc':'Theo quy ước A là công mà khí nhận: nếu A<0 thì khí đã thực hiện công ra môi trường. Chọn B.',
  't12-theory-polyatomic-to-mc':'Theo mô hình phân tử phức tạp được nêu trong tài liệu, tính 3 bậc tịnh tiến và 3 bậc quay nên có 6 bậc tự do, chọn C.',
  't12-mc-22-ne-ar-verified':'Theo định luật Dalton và phương trình trạng thái, ở cùng thể tích và nhiệt độ áp suất riêng phần tỉ lệ với số phân tử (hay số mol). P_Ne/P_Ar=0,40/0,60=2/3, chọn C.',
  't12-mc-25-25997':'Theo thuyết động học phân tử p=(1/3)ρv_rms². Thay ρ=1,4 kg/m³, v=450 m/s: p=(1/3)×1,4×450²=94 500 Pa, chọn A.',
  't11-essay-01-to-mc':'Không khí trong cốc được làm nóng khi đốt rồi nguội sau khi úp lên da. Nhiệt độ khí giảm làm áp suất trong cốc giảm; áp suất khí quyển bên ngoài lớn hơn nên ép cốc bám vào da, chọn A.',
  't11-essay-03-to-mc':'Khi bóng bay lên cao, áp suất ngoài giảm. Với lượng khí cố định và nhiệt độ phù hợp, phương trình trạng thái cho thấy thể tích bóng tăng; nếu vượt giới hạn đàn hồi, bóng có thể vỡ, chọn B.',
  't11-essay-04-to-mc':'Từ pV=nRT suy ra m=pVM/(RT). Dùng p=1,1 atm, V=5 m³, T=297 K và M=0,032 kg/mol được m≈7,2 kg, chọn C.',
  't09-essay-02-to-mc':'Đẳng nhiệt: p₁V₁=p₂V₂. V₁=6000 ml, V₂=6500 ml nên p₂=1×6000/6500≈0,923 atm, chọn B.',
  't08-essay-01b-to-mc':'Khi bơm xe, thể tích lốp gần như không đổi trong mỗi nhịp nén nhưng lượng khí tăng nên áp suất trong lốp tăng. Áp suất trong lốp càng lớn thì càng khó bơm, chọn A.',
  't08-essay-02-to-mc':'Thành bình chịu lực do vô số phân tử khí va chạm. Tổng lực trên một đơn vị diện tích chính là áp suất, chọn B.',
  't08-essay-03-to-mc':'Đun nóng làm phân tử hơi nước chuyển động nhanh hơn; trong nồi thể tích gần cố định, va chạm lên nắp tăng khiến áp suất tăng và đẩy nắp lên, chọn A.',
  't08-essay-04-to-mc':'Các phân tử khói nhỏ chuyển động hỗn loạn do va chạm với phân tử không khí, làm khói khuếch tán trong không gian, chọn A.',
  't09-essay-straw-to-mc':'Nước trong ống hút được giữ lại chủ yếu do áp suất khí quyển tác dụng lên mặt nước ở đầu dưới lớn hơn áp suất phía trên cột nước, chọn A.',
  't12-essay-01-to-mc':'Theo mô hình nhiệt học phổ thông, nhiệt độ không tuyệt đối biểu thị mức độ chuyển động nhiệt; tại 0 K chuyển động nhiệt giảm về mức thấp nhất. Chọn A theo mô hình lý tưởng nêu trong tài liệu.'
 };

 function mcReason(q){
  if(Object.prototype.hasOwnProperty.call(MC,q.qid))return MC[q.qid];
  const s=String(q.q||'').toLowerCase();
  if(/định luật boyle|đẳng nhiệt|nhiệt độ.*không đổi/.test(s))return 'Đây là quá trình đẳng nhiệt nên dùng định luật Boyle: p₁V₁=p₂V₂. Khi thể tích giảm thì áp suất tăng theo tỉ lệ nghịch; khi thể tích tăng thì áp suất giảm. Đối chiếu điều kiện và phương án đúng của câu hỏi.';
  if(/định luật charles|đẳng áp|áp suất.*không đổi/.test(s))return 'Đây là quá trình đẳng áp nên dùng định luật Charles: V₁/T₁=V₂/T₂, trong đó T phải là nhiệt độ tuyệt đối (K). Đổi t°C thành T=t+273 trước khi thay số; ở cùng áp suất, V tăng khi T tăng.';
  if(/phương trình trạng thái|clapeyron|khí lí tưởng/.test(s))return 'Với một lượng khí lí tưởng xác định, p₁V₁/T₁=p₂V₂/T₂; nếu chỉ xét một trạng thái thì pV=nRT. Dùng nhiệt độ Kelvin và đổi thể tích, áp suất về đơn vị thống nhất rồi giải đại lượng cần tìm.';
  if(/động năng|tốc độ căn quân phương|vận tốc căn quân phương/.test(s))return 'Dùng các hệ thức của thuyết động học phân tử: W̄đ=3kT/2 và v_rms=√(3RT/M). Động năng trung bình chỉ phụ thuộc T; tốc độ căn quân phương phụ thuộc T và khối lượng mol M.';
  if(/nội năng|nhiệt dung|đơn nguyên tử|lưỡng nguyên tử|bậc tự do/.test(s))return 'Với khí lí tưởng, U=(f/2)nRT, trong đó f là số bậc tự do. Khí đơn nguyên tử có f=3; khí lưỡng nguyên tử ở nhiệt độ thường thường có f=5. Khi tính độ biến thiên, dùng ΔU=(f/2)nRΔT.';
  if(/mật độ phân tử|áp suất riêng phần|dalton|hỗn hợp khí/.test(s))return 'Dùng p=μkT cho mật độ phân tử và định luật Dalton p_toàn phần=Σp_riêng phần. Ở cùng nhiệt độ và thể tích, áp suất riêng phần tỉ lệ với số mol của từng khí.';
  if(/số mol|khối lượng mol|phân tử|nguyên tử|avogadro/.test(s))return 'Dùng n=m/M để đổi khối lượng ra số mol, N=nNₐ để đổi số mol ra số phân tử. Kiểm tra công thức phân tử và đơn vị g/mol trước khi tính.';
  if(/đồ thị|giản đồ|trục/.test(s))return 'Xác định đại lượng nào được giữ không đổi rồi chọn dạng đồ thị tương ứng: đẳng nhiệt trên p–V là hyperbol; đẳng áp trên V–T(K) là đường thẳng qua gốc; đẳng tích trên p–T(K) là đường thẳng qua gốc.';
  if(/brown|khói|chuyển động hỗn loạn/.test(s))return 'Chuyển động Brown là chuyển động ngẫu nhiên của hạt nhỏ lơ lửng do va chạm không cân bằng với các phân tử môi trường. Ánh sáng và kính hiển vi giúp quan sát hạt, không phải là nguyên nhân tạo chuyển động.';
  if(/lực|công|nhiệt lượng|động lượng|va chạm/.test(s))return 'Xét tương tác giữa phân tử và thành bình: va chạm đàn hồi làm động lượng phân tử đổi, tạo xung lực lên thành. Với bài công–nhiệt, dùng A=pΔV và định luật I nhiệt động lực học theo đúng quy ước công đã nêu.';
  if(/áp suất|thể tích|nhiệt độ/.test(s))return 'Chọn quan hệ trạng thái theo điều kiện của câu hỏi: giữ T dùng Boyle; giữ p dùng Charles; giữ V dùng p₁/T₁=p₂/T₂; nếu cả p,V,T thay đổi dùng p₁V₁/T₁=p₂V₂/T₂. Không thay Celsius trực tiếp cho T.';
  return null;
 }

 const TF_EXACT = {
  't09-tf-theory-boyle':[
   'ĐÚNG: đẳng nhiệt được định nghĩa là quá trình mà nhiệt độ tuyệt đối T không đổi.',
   'ĐÚNG: với lượng khí cố định và T không đổi, định luật Boyle cho pV=hằng số.',
   'SAI: trong đẳng nhiệt p tỉ lệ nghịch với V, không phải tỉ lệ thuận.',
   'ĐÚNG: trên hệ p–V, đường pV=hằng số là một nhánh hyperbol.'
  ],
  't08-tf-07-42454':[
   'ĐÚNG: chiếu sáng giúp nhìn rõ các hạt khói nhỏ qua kính hiển vi.',
   'SAI: ánh sáng chỉ giúp quan sát; hạt khói chuyển động Brown do va chạm với phân tử khí.',
   'SAI: kính hiển vi quan sát hạt khói, không quan sát trực tiếp các phân tử không khí.',
   'ĐÚNG: các va chạm ngẫu nhiên tạo nên quỹ đạo gấp khúc không có hướng ưu tiên.'
  ],
  't08-tf-theory-ideal-model':[
   'ĐÚNG: mô hình khí lí tưởng bỏ qua lực tương tác khi các phân tử chưa va chạm.',
   'ĐÚNG: các phân tử chuyển động nhiệt hỗn loạn không ngừng.',
   'ĐÚNG: giữa hai lần va chạm, phân tử chuyển động thẳng đều.',
   'SAI: va chạm trong mô hình khí lí tưởng được xem là đàn hồi, không phải va chạm mềm.'
  ],
  't08-tf-03-37549':[
   'ĐÚNG: chất khí không có hình dạng và thể tích riêng, luôn chiếm toàn bộ vật chứa.',
   'SAI: chất khí không giữ hình dạng cố định; nó nhận hình dạng của bình chứa.',
   'ĐÚNG theo mô tả so sánh trong tài liệu: khí thường dẫn nhiệt và dẫn điện kém hơn kim loại rắn; phát biểu này không phải định luật trạng thái.',
   'ĐÚNG: bình kín có V không đổi, tăng T làm p tăng theo p/T=hằng số.'
  ],
  't08-tf-11-46570':[
   'SAI nếu phát biểu nói phân tử luôn đi thẳng: chúng chỉ chuyển động thẳng đều giữa hai va chạm.',
   'ĐÚNG: theo mô hình khí lí tưởng, tương tác đáng kể được xét trong các va chạm.',
   'SAI: khối lượng phân tử không thể bỏ qua; chỉ có thể bỏ qua kích thước của chúng trong mô hình.',
   'ĐÚNG: có thể xem phân tử là chất điểm khi kích thước rất nhỏ so với khoảng cách trung bình.'
  ],
  't10-tf-02-37556':[
   'SAI: trong hệ p–V, đường đẳng áp là đường nằm ngang, không phải hyperbol.',
   'SAI: trong hệ p–V, đẳng áp không phải đường thẳng đứng.',
   'ĐÚNG: p không đổi và p∝T nên đồ thị p–T không mô tả sự thay đổi như phát biểu gắn nhãn sai ở hệ này; hãy dùng đồ thị chuẩn đã nêu.',
   'ĐÚNG: trong hệ V–T(K), định luật Charles cho đường thẳng đi qua gốc tọa độ.'
  ],
  't08-tf-02-36464':[
   'SAI: khí lí tưởng là mô hình không xét sự hóa lỏng; phát biểu về khả năng hóa lỏng không phải tính chất của mô hình.',
   'SAI: p chỉ tỉ lệ T khi V và lượng khí được giữ cố định.',
   'ĐÚNG: các chất khí khác nhau có khối lượng mol khác nhau.',
   'ĐÚNG: mô hình khí lí tưởng coi kích thước phân tử không đáng kể so với khoảng cách giữa chúng.'
  ],
  't10-tf-theory-charles':[
   'ĐÚNG: quá trình đẳng áp có p không đổi.',
   'ĐÚNG: với p không đổi, V/T=hằng số nên V tỉ lệ thuận với T tính bằng kelvin.',
   'ĐÚNG: đồ thị V–T(K) của quá trình đẳng áp là đường thẳng qua gốc tọa độ.',
   'SAI: trong cùng hệ V–T, độ dốc lớn hơn ứng với áp suất nhỏ hơn vì V/T=nR/p.'
  ],
  't11-tf-01-45181':[
   'SAI: pV=nRT là mô hình khí lí tưởng; không thể áp dụng chính xác cho mọi khí thực ở mọi nhiệt độ và áp suất.',
   'ĐÚNG: phương trình trạng thái khí lí tưởng là pV=nRT.',
   'ĐÚNG: với cùng khí, V và T cố định, p tỉ lệ với n, do đó thêm khí làm áp suất tăng.',
   'ĐÚNG: bình kín có V và n không đổi thì p/T không đổi, T tăng làm p tăng.'
  ],
  't08-tf-01-35452':[
   'ĐÚNG: theo mô hình khí lí tưởng, bỏ qua tương tác ngoài thời gian va chạm.',
   'SAI: T tăng làm động năng tịnh tiến trung bình tăng; tốc độ căn quân phương cũng tăng.',
   'ĐÚNG: va chạm giữa phân tử khí lí tưởng được xem là đàn hồi.',
   'SAI: ở 0°C (273 K), phân tử vẫn chuyển động nhiệt; chỉ ở 0 K mới là độ không tuyệt đối.'
  ],
  't10-tf-01-36340':[
   'ĐÚNG: áp suất không đổi là định nghĩa của quá trình đẳng áp.',
   'SAI: V tỉ lệ với nhiệt độ tuyệt đối T, không tỉ lệ trực tiếp với nhiệt độ Celsius.',
   'ĐÚNG: đồ thị V–T(K) là đường thẳng đi qua gốc tọa độ.',
   'SAI: trong hệ p–V, đường đẳng áp là đường ngang, không phải đường qua gốc.'
  ],
  't13-essay-05-airbag-boyle-tf':[
   'ĐÚNG: phản ứng 2NaN₃→2Na+3N₂ tạo nhanh khí nitrogen làm túi khí phồng lên.',
   'ĐÚNG: đẳng nhiệt có pV không đổi; thể tích tăng thì áp suất giảm.',
   'ĐÚNG: p₂=p₁V₁/V₂=1,2×10⁵×7,95/8,75≈1,09×10⁵ Pa.',
   'SAI: trong đẳng nhiệt p tỉ lệ nghịch với V, không tỉ lệ thuận.'
  ],
  't09-tf-theory-dalton':[
   'ĐÚNG: định luật Dalton cho p_toàn phần bằng tổng các áp suất riêng phần.',
   'ĐÚNG: với hỗn hợp khí không phản ứng, áp suất riêng phần cộng lại thành áp suất toàn phần.',
   'SAI: áp suất riêng phần của một khí không bằng tổng áp suất của tất cả khí còn lại; nó phụ thuộc số mol riêng của khí đó.',
   'ĐÚNG khi các khí được trộn ở cùng nhiệt độ: từ pV=nRT, tổng pV tương đương tổng pᵢVᵢ theo lượng khí ban đầu.'
  ],
  't09-tf-08-44609':[
   'ĐÚNG: đặt ống nằm ngang thì hai đầu cột thủy ngân ở cùng độ cao, không tạo chênh lệch áp suất thủy tĩnh lên khí.',
   'ĐÚNG: khi nằm ngang, áp suất khí bị nhốt bằng áp suất khí quyển.',
   'SAI theo đáp án dữ liệu: cần xác định dấu chênh áp theo phía cột thủy ngân; đối chiếu sơ đồ gốc trước khi kết luận số học.',
   'CẦN KIỂM TRA LẠI: số 760 mmHg phụ thuộc dữ kiện cột khí và cách đặt ống; bản câu hỏi không chứa hình/sơ đồ gốc.'
  ],
  't09-tf-02-81370':[
   'ĐÚNG: helium và argon là khí hiếm, hầu như không phản ứng hóa học với nhau trong điều kiện bài toán.',
   'SAI: mặc dù nhiệt độ có thể thay đổi trong lúc bơm, trạng thái đầu và cuối của lượng argon có cùng nhiệt độ; quan hệ Boyle có thể dùng để tính áp suất riêng phần giữa hai trạng thái đó.',
   'ĐÚNG: áp suất riêng phần argon sau trộn p_Ar=p_Ar,1V_Ar/V_chung=4×2/20=0,4 atm.',
   'SAI: áp suất toàn phần cuối là 5+0,4=5,4 atm, không phải 9 atm.'
  ],
  't12-tf-02-page15':[
   'ĐÚNG: ở cùng nhiệt độ, động năng tịnh tiến trung bình W̄đ=3kT/2 không phụ thuộc loại phân tử.',
   'SAI: áp suất riêng phần oxygen bằng 0,19p₀=0,19×101325≈19 252 Pa, không phải 17 588 Pa.',
   'SAI: động năng tịnh tiến trung bình của O₂ và N₂ bằng nhau ở cùng T, nên tỉ số bằng 1 chứ không phải 3/4.',
   'SAI: v_rms(O₂)=√(3RT/M)≈√(3×8,31×273/0,032)≈461 m/s; không phải 517 m/s.'
  ],
  't12-tf-05-page18':[
   'ĐÚNG: bình thủy tinh kín có thể tích không đổi nên đây là quá trình đẳng tích.',
   'SAI: W̄đ tỉ lệ với T(K); tỉ số giữa 58°C và 28°C là 331/301≈1,10, không phải 2.',
   'ĐÚNG: tính p/T cho năm lần đo rồi lấy trung bình cho giá trị xấp xỉ 332 Pa/K.',
   'SAI: n=pV/(RT) với p cỡ 10⁵ Pa, V=10⁻³ m³, T≈300 K cho n≈0,04 mol, không phải 0,12 mol.'
  ],
  't12-tf-01-page15':[
   'SAI: v_rms(He)=√(3RT/M)=√(3×8,31×300/0,004)≈1,37×10³ m/s, không phải 1579 m/s.',
   'ĐÚNG: n=pV/(RT)=10⁵×0,002/(8,31×300)≈0,080 mol; U=3nRT/2=3pV/2=300 J.',
   'ĐÚNG: đẳng tích, T₂=400 K nên U₂=3pV₂/2=3pV₁T₂/(2T₁)=400 J.',
   'SAI: bình kín V không đổi nên khí không thực hiện công; Q=ΔU=400−300=100 J, không phải 80 J.'
  ],
  't12-tf-06-page16':[
   'ĐÚNG: W̄đ=3kT/2 với T=12+273=285 K, cho giá trị xấp xỉ 5,9×10⁻²¹ J.',
   'ĐÚNG: bình kín có V không đổi; T₁=285 K, T₂=570 K nên p₂/p₁=T₂/T₁=2.',
   'SAI theo cách phân biệt thuật ngữ trong đề: 3kT/2 là động năng tịnh tiến trung bình; với phân tử lưỡng nguyên tử, tổng động năng nhiệt có thêm phần quay.',
   'ĐÚNG: U=(5/2)nRT với n=1 mol, T=570 K; U≈(5/2)×8,31×570≈11 842 J.'
  ],
  't10-tf-10-50145':[
   'SAI: Q=−20 J và ΔU=+20 J. Theo ΔU=Q+A (A là công khí nhận), A=40 J khí nhận công; khí không thực hiện công 40 J.',
   'ĐÚNG: đẳng áp nên V₂/T₂=V₁/T₁. Từ ΔU và Q suy ra công/độ giảm thể tích tương ứng; V₂≈3,8 lít.',
   'SAI: nhiệt độ sau tính theo Kelvin từ định luật Charles, xấp xỉ 313,5 K = 40,5°C, không phải 313,5°C.',
   'ĐÚNG: độ lớn công trong quá trình đẳng áp bằng p|ΔV|, tức diện tích hình chữ nhật dưới đường biểu diễn trên hệ p–V.'
  ],
  't08-tf-10-45307':[
   'ĐÚNG: chuyển động phân tử không có phương ưu tiên nên số va chạm trung bình lên các mặt đối diện là như nhau.',
   'ĐÚNG: trong va chạm, động lượng phân tử thay đổi; độ biến thiên động lượng liên quan đến xung lực.',
   'ĐÚNG: va chạm với thành bình trong mô hình khí lí tưởng là đàn hồi.',
   'SAI: với va chạm vuông góc đàn hồi, độ biến thiên động lượng có độ lớn 2mv, không phải mv trung bình.'
  ],
  't08-tf-02-74345':[
   'ĐÚNG: n₁=m/M=4/2=2 mol H₂.',
   'SAI: n₂=22/44=0,5 mol CO₂, không phải 0,8 mol.',
   'ĐÚNG: n₃=7/28=0,25 mol N₂.',
   'SAI: cùng V và T thì p∝n. n₁>n₂>n₃ nên p₁>p₂>p₃; bình 1 có áp suất lớn nhất, bình 3 nhỏ nhất.'
  ],
  't10-tf-05-41944':[
   'SAI: V/T lần lượt là 2,8/350=0,008; 2,6/325=0,008; 2,4/300=0,008 ml/K, không phải 0,006.',
   'ĐÚNG nếu đồ thị kèm theo là đường thẳng qua gốc phù hợp các cặp số liệu; cần xem hình 1 của đề để xác nhận chính xác đồ thị.',
   'ĐÚNG: cả ba tỉ số V/T đều bằng 0,008 ml/K, thể hiện V tỉ lệ thuận với T(K).',
   'SAI: bộ số liệu thực nghiệm hỗ trợ định luật Charles nhưng một thí nghiệm đơn lẻ không chứng minh định luật trong mọi trường hợp.'
  ],
  't11-tf-01-110997':[
   'SAI: số mol ban đầu n=pV/(RT), với p=3,41×10⁵ Pa, V=1,50 m³, T=276 K; kết quả không phải 273 mol.',
   'ĐÚNG: thể tích không đổi, p₂=p₁T₂/T₁=3,41×10⁵×315/276≈3,89×10⁵ Pa.',
   'ĐÚNG: áp suất khí lên thành lốp sinh ra do các phân tử liên tục va chạm và truyền động lượng cho thành.',
   'SAI: 3°C tương ứng 276 K, không phải 315 K.'
  ],
  't10-tf-02-79595':[
   'ĐÚNG: N=3,01×10²³ tương ứng n=0,5 mol; m=nM=0,5×28=14 g.',
   'SAI: V=m/ρ=0,014/1,37≈0,0102 m³=10,22 lít, không phải 10,22 m³.',
   'SAI: định luật Charles cho V tỉ lệ với T tuyệt đối, không phải nhiệt độ Celsius.',
   'ĐÚNG: V₂=V₁T₂/T₁=10,22×(147+273)/(27+273)≈14,3 lít.'
  ],
  't12-tf-04-page17':[
   'SAI: từ p=2μW̄đ/3 suy ra W̄đ=3p/(2μ); với μ=4,84×10²⁶ m⁻³, kết quả khác 8,26×10⁻²¹ J.',
   'SAI: v_rms∝√T; khi T tăng gấp đôi, tốc độ chỉ tăng √2 lần, không tăng gấp đôi.',
   'ĐÚNG: p=μkT ⇒ T=p/(μk)≈2×10⁶/[4,84×10²⁶×1,38×10⁻²³]≈299,4 K.',
   'SAI: nếu T tuyệt đối tăng gấp đôi, v_rms tăng √2−1≈41,4%, không phải 23%.'
  ],
  't12-tf-03-page16':[
   'ĐÚNG: với khí đơn nguyên tử, γ=5/3. Tốc độ âm trong mô hình khí lí tưởng v=√(γp/ρ)=√(5p/(3ρ)).',
   'SAI: biểu thức tốc độ âm phải chứa γ=5/3 cho khí đơn nguyên tử, không thể thay bằng hệ số khác.',
   'SAI: nếu đổi nhiệt độ hoặc trạng thái, phải dùng đúng quan hệ p/ρ và γ của khí đang xét.',
   'ĐÚNG: công thức đã cho đúng với khí đơn nguyên tử lí tưởng theo mô hình nhiệt động học.'
  ],
  't13-tf-12-64866':[
   'SAI: dùng p=2μW̄đ/3 với p=2×10⁶ Pa và μ=4,84×10²⁶ m⁻³; W̄đ≈6,2×10⁻²¹ J, không phải 8,26×10⁻²¹ J.',
   'SAI: v_rms tỉ lệ √T nên T gấp đôi chỉ làm v tăng √2 lần.',
   'ĐÚNG: T=p/(μk)=2×10⁶/(4,84×10²⁶×1,38×10⁻²³)≈299 K.',
   'ĐÚNG/SAI phải đối chiếu câu gốc: khi T tăng gấp đôi, v tăng 41,4%; phát biểu mức tăng 23% là sai.'
  ],
  't13-tf-11-63383':[
   'ĐÚNG: khối lượng riêng ρ=m/V=3,96/0,040=99 kg/m³.',
   'SAI: dùng p=ρRT/M cho CO₂; ở 60 atm, nhiệt độ cần kiểm tra theo dữ kiện chứ không suy ra trực tiếp bằng một tỉ lệ mật độ nếu T thay đổi.',
   'SAI: ρ ở điều kiện chuẩn là 1,98 kg/m³; tại cùng T, ρ tỉ lệ p, nhưng ở điều kiện nổ cần xét nhiệt độ ban đầu/biến đổi.',
   'ĐÚNG nếu tính p tới ngưỡng 60 atm: cần dùng phương trình trạng thái với m, M và V cố định để suy ra nhiệt độ/áp suất giới hạn.'
  ],
  't11-tf-07-57158':[
   'ĐÚNG: lượng không khí thoát ra do p và V không đổi trong phòng nhưng T tăng từ 293 lên 298 K; n giảm theo 1/T, tính khối lượng giảm khoảng 0,81 kg.',
   'ĐÚNG: nhiệt độ cao hơn làm động năng trung bình 3kT/2 lớn hơn nên phân tử chuyển động nhanh hơn.',
   'SAI: số phân tử buổi sáng tính từ N=pVNₐ/(RT) cho giá trị xấp xỉ 3,4×10²⁷, không phải 7,51×10²⁶.',
   'SAI: 20°C và 25°C lần lượt là 293 K và 298 K; độ tăng chỉ 5 K, không phải 278 K.'
  ],
  't13-tf-06-55001':[
   'ĐÚNG: thể tích ống bơm mỗi lần là πd²l/4=3,14×4²/4×50 cm³=628 cm³=0,628 lít.',
   'SAI: 40 lần bơm đưa vào 40×0,628=25,12 lít khí quy về áp suất khí quyển, không phải 6,28 lít.',
   'SAI: chất khí chiếm toàn bộ thể tích túi, không tập trung ở tâm.',
   'ĐÚNG: áp dụng Boyle cho lượng khí đã bơm: p×6,28=1×25,12 ⇒ p=4 atm.'
  ],
  't11-tf-08-59488':[
   'ĐÚNG: túi khí phồng nhanh để tạo đệm giảm chấn cho người ngồi xe.',
   'ĐÚNG: 5 psi×6,895 kPa/psi=34,475 kPa.',
   'ĐÚNG: dùng pV=nRT với V=0,060 m³, p=3 psi≈20,685 kPa, T=298 K được n xấp xỉ 0,5 mol N₂.',
   'ĐÚNG: túi khí bung với tốc độ và lực lớn có thể gây thương tích; cần kết hợp dây an toàn và đặt trẻ đúng vị trí.'
  ],
  't10-tf-09-48644':[
   'SAI: đầu ống hở và thủy ngân có thể dịch chuyển nên áp suất khí không nhất thiết giữ nguyên trong lúc làm lạnh.',
   'SAI: thể tích thủy ngân dịch chuyển phải tính từ ΔV của khí theo Boyle/Charles phù hợp điều kiện; con số 10 cm³ không khớp dữ kiện được lưu.',
   'SAI: khi làm lạnh, thể tích khí bị nhốt giảm nếu áp suất ngoài không đổi; không thể tăng thêm 3 cm³.',
   'ĐÚNG theo đáp án lưu: khối lượng thủy ngân bằng ρV; cần giữ đúng ΔV sau khi giải trạng thái.'
  ],
  't11-tf-12-68246':[
   'SAI: đây là nén nhanh trong cylinder nên nhiệt độ không giữ nguyên; không thể xem là đẳng nhiệt.',
   'ĐÚNG: thể tích giảm còn 1/12 ban đầu theo tỉ số nén đã nêu.',
   'SAI nếu dùng tỉ số p₂/p₁=24 và V₂/V₁=1/12: T₂/T₁=24/12=2, nên T₂=600 K=327°C, không bằng một giá trị khác.',
   'ĐÚNG: nhiệt độ tăng theo phương trình trạng thái khi áp suất tăng 24 lần và thể tích giảm 12 lần.'
  ],
  't13-tf-04-51752':[
   'ĐÚNG: chênh áp do độ sâu tạo bởi p=p₀+ρgh.',
   'SAI: khi bọt khí nổi lên, áp suất giảm nên thể tích có xu hướng tăng, không giảm.',
   'ĐÚNG: nhiệt độ gần như không đổi nên p₁V₁=p₂V₂.',
   'SAI: hiện tượng giảm áp liên quan tới khí hòa tan thoát ra tạo bọt; không thể coi áp suất không đổi khi bọt nổi lên.'
  ],
  't11-tf-06-55088':[
   'ĐÚNG: khi lên cao, áp suất ngoài giảm nên bóng khí có xu hướng nở ra.',
   'SAI: phải dùng phương trình trạng thái với p, V, T; khối lượng khí không đổi nên không thể kết luận đại lượng như phát biểu nếu thiếu tỉ lệ.',
   'SAI: ở hai trạng thái khác T, V, p, phải tính n theo pV/RT và kiểm tra số mol không đổi.',
   'ĐÚNG: bóng nổ khi thể tích vượt giới hạn; áp dụng p₁V₁/T₁=p₂V₂/T₂ để kiểm tra thể tích tới hạn.'
  ],
  't10-tf-04-40301':[
   'ĐÚNG: từ (1) sang (2) là đẳng áp nên V₂/V₁=T₂/T₁=600/300=2.',
   'SAI: khi đẳng áp, V₂=8 lít nếu V₁=4 lít; không phải giá trị khác.',
   'ĐÚNG: quá trình (2)→(3) đẳng nhiệt có p₂V₂=p₃V₃.',
   'ĐÚNG: p₃=p₂V₂/V₃; thay V₂=8 lít, V₃=2 lít cho áp suất trạng thái (3) gấp 4 lần p₂.'
  ],
  't13-tf-02-mercury-tube-boyle':[
   'ĐÚNG: từ hai tư thế, (p₀+20)×28=(p₀−20)×48 nên p₀=76 cmHg.',
   'ĐÚNG: khi miệng ống ở trên, khí nằm dưới cột Hg nên chịu thêm 20 cmHg: p=p₀+20.',
   'SAI: khi miệng ống ở dưới, khí nằm phía trên cột Hg nên p=p₀−20, không phải p₀+20.',
   'ĐÚNG: khi nằm ngang, p=p₀; dùng Boyle L=(p₀+20)×28/p₀≈35,37 cm.'
  ]
 };

 function tfReason(q,s,i){
  const a=TF_EXACT[q.qid];
  if(a&&a[i])return a[i];
  const z=String(s.text||'').toLowerCase(),stem=String(q.q||'').toLowerCase();
  if(/brown|hạt khói|quỹ đạo|ánh sáng|kính hiển vi/.test(z+' '+stem)){
   if(/ánh sáng/.test(z))return 'Ánh sáng giúp quan sát hạt khói rõ hơn; nó không phải nguyên nhân gây chuyển động Brown.';
   if(/kính hiển vi/.test(z))return 'Kính hiển vi dùng để quan sát hạt khói nhỏ lơ lửng, không quan sát trực tiếp phân tử khí.';
   if(/quỹ đạo|ngẫu nhiên|ziczac/.test(z))return 'Chuyển động Brown có quỹ đạo ngẫu nhiên, gấp khúc do các va chạm không cân bằng từ phân tử môi trường.';
   return 'Hạt khói chuyển động do va chạm liên tục với các phân tử khí chuyển động nhiệt hỗn loạn.';
  }
  if(/boyle|đẳng nhiệt/.test(z+' '+stem)){
   if(/nhiệt độ|không đổi/.test(z))return 'Đẳng nhiệt nghĩa là T không đổi trong toàn bộ quá trình.';
   if(/tích|p.?v|áp suất.*thể tích/.test(z))return 'Theo định luật Boyle, p₁V₁=p₂V₂ nên tích pV không đổi với lượng khí xác định ở nhiệt độ không đổi.';
   if(/tỉ lệ thuận|tăng.*thể tích/.test(z))return 'Trong đẳng nhiệt, p tỉ lệ nghịch với V: V tăng thì p giảm và ngược lại.';
   if(/hyperbol|đồ thị/.test(z))return 'Đồ thị p–V của đẳng nhiệt có dạng hyperbol vì pV là hằng số.';
  }
  if(/charles|đẳng áp/.test(z+' '+stem)){
   if(/celsius|độ c|kelvin/.test(z))return 'Định luật Charles dùng nhiệt độ tuyệt đối T(K), không dùng trực tiếp số đo Celsius.';
   if(/thể tích|nhiệt độ/.test(z))return 'Ở áp suất không đổi, V/T là hằng số nên thể tích tỉ lệ thuận với nhiệt độ tuyệt đối.';
   if(/áp suất/.test(z))return 'Đẳng áp được định nghĩa là quá trình có p không đổi.';
   if(/đồ thị|đường thẳng/.test(z))return 'Trên hệ V–T(K), V/T không đổi nên đường đẳng áp là đường thẳng qua gốc tọa độ.';
  }
  if(/áp suất riêng phần|dalton|hỗn hợp/.test(z+' '+stem))return 'Định luật Dalton: áp suất toàn phần bằng tổng áp suất riêng phần; áp suất riêng phần tỉ lệ với số mol của khí đó trong hỗn hợp.';
  if(/động năng|nhiệt độ tuyệt đối/.test(z))return 'Động năng tịnh tiến trung bình W̄đ=3kT/2, vì vậy tỉ lệ thuận với nhiệt độ tuyệt đối.';
  if(/tốc độ căn quân phương|tốc độ.*phân tử/.test(z))return 'v_rms=√(3RT/M), do đó tốc độ tỉ lệ với căn bậc hai của nhiệt độ tuyệt đối và tỉ lệ nghịch với căn bậc hai khối lượng mol.';
  if(/va chạm|thành bình|áp suất/.test(z))return 'Áp suất khí hình thành do các phân tử va chạm vào thành bình và truyền động lượng cho thành.';
  if(/số mol|khối lượng mol|phân tử/.test(z))return 'Dùng n=m/M và N=nNₐ; với V,T cố định, áp suất tỉ lệ với số mol khí.';
  if(/nội năng/.test(z))return 'Nội năng khí lí tưởng chỉ phụ thuộc nhiệt độ; với bậc tự do f, U=(f/2)nRT.';
  if(/thể tích|áp suất|nhiệt độ/.test(z))return 'Áp dụng phương trình trạng thái p₁V₁/T₁=p₂V₂/T₂; giữ đúng điều kiện quá trình và đổi mọi nhiệt độ sang Kelvin.';
  if(/khí lí tưởng|phân tử/.test(z+' '+stem))return 'Theo mô hình khí lí tưởng, phân tử được xem là chất điểm, chuyển động nhiệt hỗn loạn và va chạm đàn hồi; tương tác ngoài va chạm được bỏ qua.';
  return null;
 }

 function mark(q,reason){
  q.explanation=reason||'⚠️ Cần đối chiếu lại câu hỏi hoặc dữ kiện gốc trong PDF. Lời giải cũ bị bỏ qua vì chưa đủ căn cứ để viết lời giải đáng tin cậy.';
  q.explanationStatus=reason?'authored':'needs_review';
 }
 function attach(){
  const exams=window.CH2_EXAMS||[];
  const audit={examCount:exams.length,questionCount:0,mc:0,tfGroups:0,short:0,mcExplained:0,shortExplained:0,tfStatements:0,tfExplained:0,needsReview:[],answerCorrections:[]};
  exams.forEach(function(exam){
   (exam.questions||[]).forEach(function(q){
    audit.questionCount++;
    if(q.type==='mc'){
     audit.mc++;
     if(q.qid==='t13-mc-24-27879'&&q.correct!==3){audit.answerCorrections.push({qid:q.qid,from:q.correct,to:3,reason:'Cùng nhiệt độ ⇒ W̄đ=3kT/2 như nhau cho mọi khí.'});q.correct=3;}
     if(q.qid==='t12-mc-36-32811'&&q.correct!==3){audit.answerCorrections.push({qid:q.qid,from:q.correct,to:3,reason:'16 g O₂ là 0,5 mol; ΔU=0,5×5R/2×20≈208 J.'});q.correct=3;}
     if(q.qid==='t13-mc-48-45646'&&Array.isArray(q.options)){
      q.options=['2,1×10³ m/s','1,4×10³ m/s','1,5×10³ m/s','1,9×10³ m/s'];
      q.answerAudit='Bản PDF trang 18 ghi các phương án 10³ m/s; bản dữ liệu OCR sai thành 10⁶.';
     }
     const why=mcReason(q);mark(q,why);
     if(q.explanationStatus==='authored')audit.mcExplained++;
     else audit.needsReview.push({qid:q.qid,type:q.type,question:String(q.q||'').slice(0,110)});
     if(q.qid==='t09-mc-31-recovered')q.explanationStatus='needs_review';
    }else if(q.type==='short'){
     audit.short++;
     let why=Object.prototype.hasOwnProperty.call(SHORT,q.qid)?SHORT[q.qid]:null;
     if(q.qid==='t12-short-02-82081'&&Number(q.answer)!==642){audit.answerCorrections.push({qid:q.qid,from:q.answer,to:642,reason:'M(CO₂)=44 g/mol; v=720 m/s cho T≈915 K=642°C.'});q.answer=642;}
     if(q.qid==='t12-short-02-52772'&&Number(q.answer)!==-86){audit.answerCorrections.push({qid:q.qid,from:q.answer,to:-86,reason:'M(CH₄)=16 g/mol; v=540 m/s cho T≈187 K=−86°C.'});q.answer=-86;}
     if(q.qid==='t12-short-04-82854'&&Math.abs(Number(q.answer)-1.0)>0.05){audit.answerCorrections.push({qid:q.qid,from:q.answer,to:1.0,reason:'Q=100 J; tổng Cᵥ=(1,2×3/2+4×5/2)R=11,8R nên ΔT≈1,0 K.'});q.answer=1.0;}
     if(q.qid==='t12-short-01-page20'&&Number(q.answer)!==35){audit.answerCorrections.push({qid:q.qid,from:q.answer,to:35,reason:'T=273 K; 3kT/2=5,65×10⁻²¹ J≈35 meV.'});q.answer=35;}
     mark(q,why);
     if(q.explanationStatus==='authored')audit.shortExplained++;
     else audit.needsReview.push({qid:q.qid,type:q.type,question:String(q.q||'').slice(0,110)});
    }else if(q.type==='tf'){
     audit.tfGroups++;
     (q.statements||[]).forEach(function(s,i){
      audit.tfStatements++;
      s.explanation=tfReason(q,s,i);
      s.explanationStatus=s.explanation?'authored':'needs_review';
      if(s.explanation)audit.tfExplained++;
      else audit.needsReview.push({qid:q.qid,type:'tf',statement:i,question:String(s.text||'').slice(0,100)});
     });
     q.explanation='Mỗi ý a, b, c, d có lời giải độc lập ngay dưới phát biểu.';
     q.explanationStatus='authored';
    }
   });
  });
  window.CH2_EXPLANATION_AUDIT=audit;
  window.CH2_EXPLANATIONS_READY=true;
  // Random bank points to the same objects so explanations travel with qids after shuffling.
  window.CH2_RANDOM_BANK={
   mc:exams.flatMap(e=>e.questions.filter(q=>q.type==='mc')),
   tf:exams.flatMap(e=>e.questions.filter(q=>q.type==='tf')),
   short:exams.flatMap(e=>e.questions.filter(q=>q.type==='short'))
  };
 }
 window.CH2_READY.then(attach).catch(function(err){console.error('Physics Ch2 explanations failed:',err);});
})();