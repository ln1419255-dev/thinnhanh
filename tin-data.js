/* Ngân hàng câu hỏi Tin học giữa kì 1 — ThiNhanh.
   Mỗi câu trắc nghiệm: [nội dung, [A,B,C,D], chỉ_số_đáp_án_đúng].
   Mỗi đề lấy 5 câu theo thứ tự từ mỗi bài, tổng 30 câu/đề. */
window.TIN_EXAMS_DATA = {
  topics: [
    { name: "Bài 1 · Làm quen với trí tuệ nhân tạo", questions: [
      ["AI là khả năng của máy tính thực hiện loại công việc nào?", ["Chỉ lưu trữ tệp", "Mang tính trí tuệ của con người", "Chỉ bật tắt thiết bị", "Chỉ tính toán số học"], 1],
      ["Alan Turing đề xuất phép thử Turing vào năm nào?", ["1945", "1956", "1950", "1972"], 2],
      ["Hội thảo nào được coi là dấu mốc ra đời thuật ngữ AI?", ["Hội thảo Dartmouth năm 1956", "Hội nghị Internet năm 2000", "Hội thảo Stanford năm 1972", "Hội nghị Google năm 2006"], 0],
      ["Khả năng nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi là gì?", ["Nhận thức", "Dịch thuật", "Giải quyết vấn đề", "Học"], 3],
      ["Khả năng vận dụng logic và tri thức để đưa ra kết luận là gì?", ["Nhận dạng", "Suy luận", "Lưu trữ", "Truyền dữ liệu"], 1],
      ["Xe tự lái dùng radar và camera để phát hiện người đi bộ thể hiện khả năng nào?", ["Soạn thảo văn bản", "Dịch thuật", "Nhận thức môi trường", "Lưu trữ"], 2],
      ["Máy tìm kiếm hiểu yêu cầu tra cứu bằng văn bản hoặc tiếng nói thể hiện khả năng nào?", ["Hiểu ngôn ngữ", "Điều khiển cơ khí", "Lắp ráp", "In tài liệu"], 0],
      ["Hệ thống dùng dữ liệu thời tiết cũ để dự báo thời tiết thể hiện rõ khả năng nào?", ["Chỉ lưu trữ", "Chỉ nhận dạng chữ", "Chỉ điều khiển", "Giải quyết vấn đề"], 3],
      ["AI yếu thường được thiết kế để làm gì?", ["Thực hiện mọi việc như con người", "Thực hiện một nhiệm vụ cụ thể", "Không xử lí dữ liệu", "Không cần máy tính"], 1],
      ["Theo bài học, AI tổng quát hiện ở trạng thái nào?", ["Đã hoàn thiện hoàn toàn", "Không còn được nghiên cứu", "Vẫn là mục tiêu dài hạn và chưa đạt được trong thực tế", "Chỉ dùng trong máy in"], 2],
      ["MYCIN là hệ chuyên gia nổi tiếng thuộc lĩnh vực nào?", ["Y học", "Giáo dục thể chất", "Giao thông đường thủy", "Thiết kế thời trang"], 0],
      ["MYCIN bắt đầu được phát triển tại Stanford từ năm nào?", ["1950", "1956", "1986", "1972"], 3],
      ["Theo tài liệu, MYCIN có khoảng bao nhiêu luật suy diễn?", ["60", "600", "6 000", "60 000"], 1],
      ["Robot ASIMO được phát triển bởi hãng nào?", ["Apple", "Google", "Honda", "Microsoft"], 2],
      ["Khả năng nào được nêu ở robot ASIMO?", ["Nhận dạng hình ảnh và tiếng nói", "Chỉ in tài liệu", "Chỉ chuyển nước", "Chỉ tính giai thừa"], 0],
      ["Google Dịch được tài liệu nêu là ra mắt vào tháng 4 năm nào?", ["1999", "2002", "2012", "2006"], 3],
      ["Nhận dạng khuôn mặt có thể được dùng để làm gì?", ["Định tuyến gói tin", "Mở khóa điện thoại hoặc hỗ trợ xác định người trong ảnh", "Chia sẻ máy in", "Điều chế tín hiệu"], 1],
      ["Nhận dạng chữ viết tay có thể làm gì?", ["Tạo cáp mạng", "Chọn đường định tuyến", "Chuyển ảnh chữ viết thành dữ liệu văn bản có thể xử lí", "Phát Wi-Fi"], 2],
      ["Siri, Google Assistant và Bixby thuộc nhóm ứng dụng nào?", ["Trợ lí ảo", "Hệ điều hành mạng", "Thiết bị định tuyến", "Cáp quang"], 0],
      ["Hệ thống đề xuất video dựa trên lịch sử xem của người dùng chủ yếu thể hiện khả năng nào?", ["Điều khiển nhiệt độ", "Truyền tín hiệu quang", "Đánh địa chỉ IP", "Học từ dữ liệu"], 3],
      ["Điểm khác biệt quan trọng giữa AI và tự động hóa thông thường là gì?", ["AI không bao giờ dùng dữ liệu", "AI kết hợp các năng lực trí tuệ; tự động hóa có thể chỉ lặp thao tác cố định", "Tự động hóa luôn thông minh hơn AI", "Mọi máy tự động đều là AI"], 1],
      ["Ấm tự ngắt điện khi nước sôi được nêu như ví dụ nào?", ["AI tổng quát", "Trợ lí ảo", "Tự động hóa không nhất thiết là AI", "Hệ chuyên gia y tế"], 2],
      ["Khả năng nhận thức trong AI thường dựa vào điều gì?", ["Cảm biến và dữ liệu đầu vào", "Chỉ tên người dùng", "Chỉ màu giao diện", "Chỉ dung lượng ổ cứng"], 0],
      ["Hệ thống chẩn đoán y tế dựa trên tri thức về triệu chứng thể hiện sự kết hợp nào rõ nhất?", ["Chỉ in ấn", "Chỉ kết nối Wi-Fi", "Chỉ lưu tệp", "Suy luận và tri thức chuyên môn"], 3],
      ["Định nghĩa phù hợp nhất về mục tiêu phát triển ứng dụng AI là gì?", ["Thay mọi thiết bị mạng", "Xây dựng phần mềm giúp máy tính có năng lực trí tuệ như con người", "Chỉ tăng tốc độ gõ phím", "Loại bỏ toàn bộ dữ liệu"], 1],
      ["Một ứng dụng nhận diện vật cản bằng camera và dữ liệu cảm biến thể hiện năng lực nào?", ["Dịch máy", "Chỉ học thuộc", "Nhận thức", "Quản lí hộp thư"], 2],
      ["Chương trình máy tính chơi cờ chuyên biệt là ví dụ phù hợp với loại AI nào?", ["AI yếu", "AI tổng quát đã hoàn thiện", "Không thể là AI", "Mạng LAN"], 0],
      ["Vì sao đánh giá máy tính có thông minh hay không là vấn đề không đơn giản?", ["Vì máy tính không thể xử lí dữ liệu", "Vì mọi máy tính đều có cùng khả năng", "Vì AI chỉ có một định nghĩa duy nhất", "Vì khái niệm hành vi thông minh khó đánh giá bằng một tiêu chí đơn giản"], 3],
      ["Hệ thống học từ dữ liệu mới và điều chỉnh gợi ý theo sở thích người dùng là ví dụ của gì?", ["Chỉ lưu trữ cố định", "Khả năng học", "Chỉ điều chế", "Chỉ kết nối cáp"], 1],
      ["Phần mềm dịch máy thường được xem là ứng dụng AI vì có thể thực hiện công việc nào?", ["Chỉ in giấy", "Chỉ lắp ráp máy tính", "Xử lí và chuyển đổi ngôn ngữ tự nhiên", "Chỉ chia sẻ thư mục"], 2],
      ["Đặc trưng nào phù hợp nhất khi AI dùng logic và tri thức để rút ra kết luận từ dữ kiện?", ["Suy luận", "Phát sóng", "Chia sẻ máy in", "Mã hóa cáp"], 0],
      ["Tại sao không nên xem mọi hệ thống tự động là AI?", ["Vì mọi hệ thống tự động đều hỏng", "Vì AI không dùng máy tính", "Vì tự động hóa chỉ có trên Internet", "Vì nhiều hệ thống chỉ thực hiện thao tác cố định, không có năng lực trí tuệ được đề cập"], 3],
      ["Một trợ lí ảo nhận yêu cầu bằng giọng nói rồi tìm thông tin thể hiện rõ hai khả năng nào?", ["Chỉ lưu trữ và in", "Hiểu ngôn ngữ và xử lí yêu cầu", "Chỉ điều khiển cổng mạng", "Chỉ chuyển tín hiệu"], 1],
      ["Khả năng giải quyết vấn đề được mô tả là gì?", ["Thay đổi màu màn hình", "Lặp thao tác cố định", "Tìm cách xử lí tình huống phức tạp dựa trên thông tin và tri thức", "Tạo địa chỉ MAC"], 2],
      ["Nhận định nào đúng về các đặc trưng AI?", ["Một ứng dụng có thể kết hợp nhiều đặc trưng ở các mức độ khác nhau", "Mỗi ứng dụng chỉ được có một đặc trưng", "AI không cần dữ liệu", "Chỉ robot mới có thể là AI"], 0],
      ["Trong các lựa chọn sau, trường hợp nào rõ nhất là không phải ứng dụng AI theo cách phân biệt trong bài?", ["Trợ lí ảo", "Nhận dạng chữ viết tay", "Hệ chuyên gia chẩn đoán", "Guồng nước quay nhờ dòng chảy tự nhiên"], 3],
      ["Chương trình đề xuất nội dung bằng cách phân tích lịch sử sử dụng vừa có khả năng học vừa dùng dữ liệu để làm gì?", ["Ngắt điện", "Cá nhân hóa gợi ý", "Tạo cổng WAN", "Gửi thư báo lỗi"], 1],
      ["Một hệ thống hiểu lời nói và phản hồi bằng ngôn ngữ tự nhiên thể hiện đặc trưng nào?", ["Chỉ điều khiển vật lí", "Chỉ định tuyến", "Hiểu ngôn ngữ", "Chỉ lưu trữ"], 2],
      ["Theo bài, những đặc trưng cơ bản thường được nhắc đến gồm học, suy luận, nhận thức, hiểu ngôn ngữ và gì?", ["Giải quyết vấn đề", "Tạo cáp mạng", "Chia sẻ máy in", "Cấp địa chỉ MAC"], 0],
      ["Một hệ thống chỉ lặp thao tác cơ khí cố định, không học và không suy luận, nên được mô tả thế nào?", ["Chắc chắn là AI tổng quát", "Là trợ lí ảo", "Là hệ chuyên gia y tế", "Là tự động hóa nhưng không nhất thiết là AI"], 3]
    ]},
    { name: "Bài 2 · AI trong khoa học và đời sống", questions: [
      ["Ban đầu, hệ chuyên gia thường dựa trên cơ sở nào?", ["Các luật suy diễn và tri thức chuyên gia", "Mật khẩu Wi-Fi", "Địa chỉ MAC", "Cáp quang"], 0],
      ["Trong y học, AI có thể hỗ trợ việc nào?", ["Chỉ điều khiển máy in", "Chỉ đặt tên tệp", "Cải thiện ảnh y tế và hỗ trợ chẩn đoán, điều trị", "Chỉ kết nối LAN"], 2],
      ["IBM Watson for Oncology được nêu là ví dụ trong lĩnh vực nào?", ["Nông nghiệp", "Giáo dục thể chất", "Giao thông", "Điều trị ung thư"], 3],
      ["Ứng dụng AI trong giao thông vận tải gồm nội dung nào?", ["Chỉ soạn thư", "Phương tiện tự lái, quản lí giao thông và định tuyến", "Chỉ tạo tranh", "Chỉ phân tích văn học"], 1],
      ["Trong tài chính, ngân hàng, AI có thể giúp phát hiện điều gì?", ["Gian lận", "Màu sắc màn hình", "Lỗi gõ bàn phím", "Địa chỉ nhà riêng trên giấy"], 0],
      ["AI trong sản xuất có thể hỗ trợ công đoạn nào?", ["Chỉ quảng cáo trên mạng", "Chỉ gửi thư", "Chế tạo, lắp ráp và kiểm tra chất lượng", "Chỉ trò chuyện video"], 2],
      ["Trong trang trại thông minh, AI có thể theo dõi yếu tố nào?", ["Số lượt thích mạng xã hội", "Mật khẩu tài khoản", "Kích thước màn hình", "Thời tiết, đất đai và tình trạng cây trồng, vật nuôi"], 3],
      ["AI hỗ trợ học tập cá nhân hóa bằng cách nào?", ["Bắt tất cả học sinh học cùng một tốc độ", "Theo dõi tiến độ và đề xuất nội dung phù hợp", "Chỉ đổi màu trang web", "Chỉ phát nhạc"], 1],
      ["Sự kết hợp IoT và AI được gọi là gì trong bài?", ["AIoT", "SMTP", "RJ45", "POP3"], 0],
      ["AI tạo sinh tập trung vào việc gì?", ["Chỉ định tuyến dữ liệu", "Chỉ bảo vệ tường lửa", "Tự động tạo nội dung như văn bản, hình ảnh và âm thanh", "Chỉ lưu trữ tệp"], 2],
      ["ChatGPT được tài liệu nêu là phát triển bởi tổ chức nào?", ["Honda", "Apple", "Microsoft", "OpenAI"], 3],
      ["ChatGPT được huấn luyện trên cơ sở nào theo bài học?", ["Chỉ dữ liệu thời tiết", "Lượng lớn dữ liệu văn bản từ nhiều nguồn", "Chỉ một phép toán", "Chỉ dữ liệu âm thanh của một người"], 1],
      ["Khả năng hiểu câu hỏi và tạo câu trả lời hợp lí thể hiện điều gì ở ChatGPT?", ["Khả năng suy luận và tri thức ngôn ngữ", "Khả năng phát sóng Wi-Fi", "Khả năng định tuyến", "Khả năng ngắt điện"], 0],
      ["Vì sao ChatGPT có thể đưa ra câu trả lời đa dạng theo ngữ cảnh?", ["Vì mọi câu trả lời được viết sẵn y hệt nhau", "Vì không xử lí câu hỏi", "Vì câu trả lời được tạo theo yêu cầu và ngữ cảnh cụ thể", "Vì không cần dữ liệu"], 2],
      ["Theo tài liệu, các thành tựu AI hiện tại nói chung thuộc phạm vi nào?", ["AI tổng quát đã hoàn thiện", "AI không thể xử lí dữ liệu", "AI không dùng máy tính", "AI hẹp hay AI yếu"], 3],
      ["Một nguy cơ xã hội khi AI tự động hóa nhiều công việc là gì?", ["Tất cả việc làm đều được đảm bảo", "Áp lực thất nghiệp ở một số công việc", "Không có thay đổi nào", "Máy tính không còn cần điện"], 1],
      ["Vì sao AI có thể làm tăng lo ngại về quyền riêng tư?", ["Vì nhiều ứng dụng thu thập nhiều dữ liệu cá nhân", "Vì không thể lưu dữ liệu", "Vì không dùng Internet", "Vì chỉ xử lí dữ liệu công khai"], 0],
      ["Một số hệ thống AI được ví như hộp đen vì điều gì?", ["Chúng luôn có màu đen", "Chúng không dùng phần mềm", "Khó hiểu rõ cách chúng đưa ra quyết định", "Chúng chỉ chạy ban đêm"], 2],
      ["Rủi ro an ninh của AI trực tuyến có thể là gì?", ["Tăng kích thước màn hình", "Tạo thêm cổng USB", "Tự động tắt bàn phím", "Bị lợi dụng để xâm nhập hoặc thay đổi dữ liệu, mô hình"], 3],
      ["Vì sao cần thận trọng khi giao AI quyền điều khiển vũ khí sát thương?", ["Vì AI không thể nhận dữ liệu", "Quyết định sai có thể gây hại trực tiếp cho con người và mục tiêu dân sự", "Vì vũ khí không có phần mềm", "Vì mọi AI đều ngoại tuyến"], 1],
      ["Trong công nghiệp, hệ thống AI có thể góp phần làm gì?", ["Cải thiện hiệu suất và quản lí chuỗi cung ứng", "Chỉ tăng số bài đăng", "Chỉ lưu nhật kí", "Chỉ nhận diện giọng hát"], 0],
      ["Trong khoa học xã hội, AI có thể được sử dụng để làm gì?", ["Chỉ kiểm tra máy in", "Chỉ tạo mật khẩu", "Phân tích quan điểm xã hội và mô hình hóa hiện tượng", "Chỉ đo nhiệt độ CPU"], 2],
      ["AI trong giáo dục có thể cung cấp phản hồi như thế nào?", ["Chỉ vào cuối năm học", "Không bao giờ phản hồi", "Chỉ qua thư bưu điện", "Phản hồi tức thì phù hợp với từng người học"], 3],
      ["Nhận định nào phù hợp nhất với vai trò của AI hiện nay?", ["Chỉ có ích trong y học", "Được ứng dụng rộng trong nhiều lĩnh vực khoa học, công nghệ và đời sống", "Chỉ tạo hình ảnh", "Không có ứng dụng thực tế"], 1],
      ["Khả năng dùng tri thức từ lĩnh vực này sang lĩnh vực khác là mục tiêu đặc trưng của loại AI nào?", ["AI tổng quát", "Ethernet", "Modem", "AI chỉ làm một thao tác cố định"], 0],
      ["Một bài toán rủi ro đạo đức được đề cập liên quan đến kết hợp não người và robot là gì?", ["Chỉ tốn pin", "Không thể truyền dữ liệu", "Nguy cơ kiểm soát hoặc thay đổi ý thức, hành vi con người", "Chỉ làm hỏng máy in"], 2],
      ["Giải pháp nào phù hợp trước nguy cơ của AI?", ["Không cần giám sát", "Giao tất cả quyết định cho AI", "Bỏ qua mọi rủi ro", "Giám sát chặt chẽ và xây dựng cơ chế an toàn, trách nhiệm"], 3],
      ["AI trong ngân hàng có thể hỗ trợ tự động hóa cập nhật loại dữ liệu nào?", ["Hình nền máy tính", "Chứng từ và hóa đơn vào cơ sở dữ liệu", "Cảm biến của xe đạp", "Nhật kí cá nhân người dùng mạng xã hội"], 1],
      ["Tại sao cần các quy định pháp lí cho một số ứng dụng AI?", ["Để đảm bảo an toàn, trách nhiệm và hạn chế hậu quả đối với con người", "Để cấm mọi ứng dụng AI", "Để AI tự quyết định không kiểm soát", "Để loại bỏ mọi nghiên cứu"], 0],
      ["AI hỗ trợ nông dân xác định thời điểm thu hoạch dựa trên yếu tố nào?", ["Tên người dùng", "Mật khẩu Wi-Fi", "Dữ liệu về thời tiết, đất đai, chăm sóc và cây giống", "Kích thước màn hình"], 2],
      ["Khả năng nào của ChatGPT thể hiện việc tổng hợp tri thức?", ["Chỉ thay đổi màu nền", "Chỉ truyền tín hiệu", "Chỉ cắm cáp", "Xử lí thông tin từ nhiều nguồn để đưa ra giải pháp"], 3],
      ["Trong mô tả của bài, AI tạo sinh được ứng dụng ở lĩnh vực nào?", ["Chỉ định tuyến", "Nghệ thuật, giải trí, quảng cáo và trò chơi", "Chỉ sửa máy in", "Chỉ quản lí cáp mạng"], 1],
      ["Một hậu quả của chẩn đoán bệnh sai bởi AI có thể là gì?", ["Gây hại cho người bệnh", "Tự động tăng độ chính xác", "Không ảnh hưởng đến ai", "Chỉ làm thay đổi giao diện"], 0],
      ["Vì sao AI tổng quát được xem là mục tiêu nghiên cứu phức tạp?", ["Vì không có bất kì ứng dụng AI nào", "Vì nó chỉ cần đổi tên", "Vì cần năng lực rộng, tự thích nghi và áp dụng tri thức qua lĩnh vực", "Vì chỉ dùng ở trang trại"], 2],
      ["Đâu là ví dụ về AI hỗ trợ khách hàng bằng ngôn ngữ tự nhiên?", ["Cáp UTP", "Hub", "Modem quang", "Hệ thống tự động trả lời câu hỏi của khách hàng"], 3],
      ["Nếu AI tạo ra quyết định thiếu minh bạch, vấn đề nào dễ phát sinh?", ["Tốc độ gõ phím", "Khó xác định cơ sở quyết định và trách nhiệm giải trình", "Tăng độ phân giải", "Tăng dung lượng pin"], 1],
      ["Thông điệp tổng kết của bài về phát triển AI là gì?", ["Phát triển AI đi cùng giải quyết nguy cơ xã hội, đạo đức và an toàn", "Không cần quan tâm hậu quả", "AI chỉ dùng để giải trí", "Ngừng mọi nghiên cứu"], 0],
      ["Ứng dụng AI giám sát biến đổi khí hậu được hỗ trợ bởi sự kết hợp nào?", ["POP3 và IMAP", "TCP và SMTP", "IoT và AI", "Hub và switch"], 2],
      ["Trong giáo dục, trợ lí học tập ảo có thể làm gì?", ["Chỉ phát hiện gian lận ngân hàng", "Chỉ điều khiển xe", "Chỉ theo dõi khí hậu", "Trả lời câu hỏi, hướng dẫn và cung cấp tài liệu học tập"], 3]
,
      ["Một ứng dụng AI trong chăm sóc sức khỏe cần được triển khai ra sao?", ["Không cần kiểm tra kết quả", "Có giám sát phù hợp vì kết quả sai có thể gây hại", "Cho phép tự quyết định mọi trường hợp", "Công khai dữ liệu bệnh nhân"], 1]
    ]},
    { name: "Bài 3 · Một số thiết bị mạng thông dụng", questions: [
      ["Khi nhận dữ liệu qua một cổng của hub, tín hiệu thường được gửi đi đâu?", ["Đến tất cả cổng còn lại", "Chỉ đến một cổng đích", "Chỉ đến router xa nhất", "Chỉ đến modem"], 0],
      ["Switch khác hub chủ yếu ở điểm nào?", ["Không có cổng", "Chỉ phát Wi-Fi", "Chuyển dữ liệu đến cổng thích hợp giữa thiết bị gửi và nhận", "Chỉ kết nối Internet"], 2],
      ["Collision trong mạng là hiện tượng gì?", ["Thiết bị hết pin", "Nhiều tín hiệu truyền đồng thời trên đường truyền chung gây hỏng tín hiệu", "Mất tên miền", "Lỗi màn hình"], 1],
      ["Thiết bị nào thường giảm nguy cơ xung đột tốt hơn khi kết nối nhiều máy trong LAN?", ["Cáp nguồn", "Modem quay số", "Hub", "Switch"], 3],
      ["Wi-Fi thực chất là gì theo bài học?", ["Bộ tiêu chuẩn truyền dữ liệu bằng sóng vô tuyến điện", "Tên một loại cáp quang", "Giao thức gửi thư", "Một hệ điều hành"], 0],
      ["WAP là viết tắt của cụm từ nào?", ["Wide Area Program", "Wired Address Port", "Wireless Access Point", "Wireless Analog Processing"], 2],
      ["Chức năng chính của WAP là gì?", ["Chuyển đổi IP thành MAC", "Cho thiết bị đầu cuối kết nối LAN không dây qua Wi-Fi", "Chia dữ liệu thành gói TCP", "In tài liệu"], 1],
      ["Router được dùng chủ yếu để làm gì?", ["Chuyển tín hiệu analog thành digital", "Chỉ phát tán tín hiệu như hub", "Cắm máy in trực tiếp", "Chọn đường chuyển tiếp dữ liệu giữa các mạng"], 3],
      ["Cổng LAN trên router thường dùng để kết nối với gì?", ["Mạng hoặc thiết bị nội bộ", "Chỉ một router xa quốc gia khác", "Nguồn điện", "Màn hình"], 0],
      ["Cổng WAN trên router thường hướng tới kết nối nào?", ["Bàn phím", "Máy in USB", "Mạng bên ngoài hoặc router khác", "Loa"], 2],
      ["Modem có chức năng chính nào?", ["Chọn đường đi qua các router", "Chuyển đổi tín hiệu số và tín hiệu phù hợp đường truyền theo cả hai chiều", "Phát tán gói đến mọi cổng", "Chỉ cung cấp địa chỉ MAC"], 1],
      ["Modem quang làm nhiệm vụ gì?", ["Chia sẻ thư mục", "Gửi thư điện tử", "Nhận dạng khuôn mặt", "Chuyển đổi tín hiệu số và tín hiệu quang"], 3],
      ["Modem GSM 3G/4G/5G thường dùng gì để truy cập mạng di động?", ["Thẻ SIM", "Giắc RJ45 duy nhất", "Đĩa quang", "Cáp HDMI"], 0],
      ["Cáp UTP dùng phổ biến trong LAN thường có cấu tạo nào?", ["Một lõi quang", "Hai cổng WAN", "Bốn đôi dây xoắn", "Sóng vô tuyến"], 2],
      ["Giắc cắm thường dùng với cáp UTP trong LAN là loại nào?", ["USB-C", "RJ45", "HDMI", "VGA"], 1],
      ["Kết nối vật lí bằng cáp mạng đã đủ để bảo đảm máy tính truy cập Internet chưa?", ["Có, trong mọi trường hợp", "Chỉ cần khởi động lại", "Có nếu có hub", "Chưa chắc; còn có thể cần thiết lập địa chỉ và kết nối logic"], 3],
      ["Trong mạng gia đình, router Wi-Fi thường có đặc điểm gì?", ["Tích hợp router và bộ thu phát Wi-Fi", "Chỉ là cáp UTP", "Không thể kết nối Internet", "Chỉ là máy in"], 0],
      ["Nếu nhiều máy cùng truyền qua hub, nguy cơ nào tăng lên?", ["Tốc độ xử lí CPU", "Dung lượng ổ đĩa", "Xung đột tín hiệu", "Độ sáng màn hình"], 2],
      ["Khi mạng LAN có hàng chục đến hàng trăm máy tính, thiết bị nào thường phù hợp hơn hub?", ["Modem quay số", "Switch", "Bộ nguồn", "Máy quét"], 1],
      ["Tại sao cần router để truyền dữ liệu giữa các LAN khác nhau qua Internet?", ["Router tạo nội dung văn bản", "Router đổi tên tài khoản", "Router tự sửa mọi tệp", "Router chuyển tiếp dữ liệu theo đường đi thích hợp"], 3],
      ["Một thiết bị chỉ kết nối trực tiếp các máy tính trong cùng LAN qua cáp là gì?", ["Switch", "DNS", "Chatbot", "Modem GSM"], 0],
      ["Wi-Fi có thể mở rộng mạng LAN bằng cách nào?", ["Thay đổi địa chỉ MAC toàn cầu", "Bỏ hết thiết bị mạng", "Bổ sung WAP để thiết bị di động kết nối không dây", "Dùng máy in thay router"], 2],
      ["Vì sao router có thể có nhiều cổng WAN?", ["Để cắm thêm bàn phím", "Để kết nối với các router hoặc mạng ngoài và lựa chọn đường đi", "Để cấp quyền thư mục", "Để giải nén dữ liệu"], 1],
      ["Modem thay đổi dạng tín hiệu nhưng không làm thay đổi điều gì?", ["Địa chỉ IP luôn luôn", "Tên người dùng", "Cỡ màn hình", "Dữ liệu được tín hiệu mang theo"], 3],
      ["Thiết bị nào biến tín hiệu số thành tín hiệu tương tự và ngược lại khi cần?", ["Modem", "Hub", "Switch", "WAP thuần túy"], 0],
      ["Mạng không dây trong LAN thường mang dữ liệu bằng loại tín hiệu nào?", ["Tín hiệu giấy", "Tín hiệu cơ học", "Sóng vô tuyến điện", "Mực in"], 2],
      ["Tín hiệu trong cáp quang thường được truyền dưới dạng nào?", ["Dao động cơ khí", "Tín hiệu ánh sáng", "Âm thanh nghe được", "Từ trường bàn phím"], 1],
      ["Tại sao hub dễ gây xung đột hơn switch trong mạng đông máy?", ["Hub có thể định tuyến động", "Hub có modem tích hợp", "Hub mã hóa gói TCP", "Hub phát tín hiệu ra mọi cổng thay vì chỉ cổng nhận"], 3],
      ["Một router gia đình theo tài liệu thường có bao nhiêu cổng WAN kết nối nhà cung cấp Internet?", ["Một cổng WAN", "Không có cổng LAN", "Mười cổng WAN bắt buộc", "Chỉ một cổng USB"], 0],
      ["Máy tính để bàn không có Wi-Fi sẵn có thể bổ sung cách nào?", ["Đổi tên máy", "Chỉ lắp modem quay số", "Lắp bảng mạch mở rộng hoặc bộ điều hợp Wi-Fi", "Xóa hệ điều hành"], 2],
      ["Để tham gia mạng Wi-Fi được bảo vệ, người dùng thường cần làm gì?", ["Tắt card mạng", "Chọn mạng và nhập đúng mật khẩu", "Xóa router", "Cắm cáp HDMI"], 1],
      ["Biểu tượng ổ khóa cạnh tên mạng Wi-Fi thường thể hiện điều gì?", ["Mạng không hoạt động bao giờ", "Máy tính không có CPU", "Đây là cáp quang", "Mạng được bảo mật và có thể cần mật khẩu"], 3],
      ["Trên Windows, tùy chọn tự động kết nối Wi-Fi giúp ích gì?", ["Tự kết nối lại với mạng đã chọn khi có thể", "Thay đổi mật khẩu router", "Tắt tường lửa", "Tạo cổng LAN"], 0],
      ["Kết nối Wi-Fi tiện hơn kết nối có dây ở điểm nào?", ["Luôn bảo mật tuyệt đối", "Không cần bộ thu phát", "Giảm nhu cầu kéo cáp đến từng thiết bị", "Luôn nhanh hơn mọi cáp"], 2],
      ["Lý do phòng thực hành có thể dùng cáp mạng là gì?", ["Cáp thay thế được mọi router", "Đường truyền có dây thường ổn định và ít chịu nhiễu sóng không dây", "Máy tính không cần card mạng", "Wi-Fi không thể truyền dữ liệu"], 1],
      ["Vai trò của hub và switch trong mô hình bài học là gì?", ["Chuyển đổi tín hiệu quang", "Tự cấp SIM 5G", "Định tuyến giữa các quốc gia", "Kết nối các thiết bị trong cùng LAN"], 3],
      ["Nếu dữ liệu đi từ LAN gửi đến LAN đích qua nhiều router, thiết bị cuối cùng chuyển vào LAN đích nhờ địa chỉ nào?", ["Địa chỉ MAC của thiết bị nhận trong LAN", "Tên tài khoản email", "Tên hiển thị trên web", "Địa chỉ Bluetooth"], 0],
      ["WAP có thể được kết nối với LAN hiện có để làm gì?", ["Thay thế vĩnh viễn hệ điều hành", "Chuyển đổi văn bản thành âm thanh", "Mở rộng khả năng kết nối không dây trong khu vực", "Tạo mạng điện thoại công cộng"], 2],
      ["Theo bài học, modem quay số truyền dữ liệu qua hệ thống nào?", ["Wi-Fi 6", "Hệ thống chuyển mạch mạng điện thoại công cộng", "Ethernet quang", "Bluetooth"], 1],
      ["Nhận định nào đúng về cáp mạng và các thiết bị kết nối?", ["Cáp mạng tự định tuyến toàn Internet", "Modem thay thế hoàn toàn mọi thiết bị", "Hub luôn truyền đúng một cổng duy nhất", "Cáp nối vật lí cần kết hợp thiết bị mạng phù hợp để truyền dữ liệu"], 3]
    ]},
    { name: "Bài 4 · Giao thức mạng", questions: [
      ["Giao thức mạng là gì?", ["Tập hợp quy định về cách giao tiếp và truyền nhận dữ liệu", "Một loại màn hình", "Một phần mềm vẽ", "Một cổng USB"], 0],
      ["Vì sao cần giao thức mạng?", ["Để tăng dung lượng pin", "Để mọi máy có cùng mật khẩu", "Để truyền nhận dữ liệu chính xác, tin cậy và hiệu quả", "Để bỏ địa chỉ thiết bị"], 2],
      ["Giao thức nào quy định cách gửi thư điện tử?", ["HTTP", "SMTP", "DNS", "ICMP"], 1],
      ["POP3 và IMAP liên quan đến hoạt động nào?", ["Định tuyến động", "Chia sẻ máy in", "Đánh địa chỉ MAC", "Truy cập và lấy thư điện tử"], 3],
      ["Ethernet chủ yếu quy định truyền dữ liệu ở đâu?", ["Mạng cục bộ", "Chỉ mạng xã hội", "Chỉ thư điện tử", "Chỉ mạng di động"], 0],
      ["Địa chỉ MAC theo bài có độ dài nào?", ["4 byte", "8 byte", "6 byte", "16 byte"], 2],
      ["Địa chỉ IPv4 có độ dài nào?", ["6 byte", "4 byte", "8 byte", "2 byte"], 1],
      ["Giao thức IP có hai nội dung chính nào?", ["Soạn thư và nhận thư", "Điều khiển máy in và màn hình", "Tạo trang web và nhắn tin", "Đánh địa chỉ và định tuyến"], 3],
      ["Địa chỉ IP 10.25.0.255 tương ứng với dãy nhị phân nào?", ["00001010 00011001 00000000 11111111", "00001010 00010101 00000000 11111111", "00001010 00011001 00000001 11111111", "00001010 00011001 00000000 11111110"], 0],
      ["Địa chỉ nhị phân 11000000 10101000 00000001 00000011 là gì?", ["192.168.3.1", "192.168.1.30", "192.168.1.3", "192.168.0.3"], 2],
      ["Địa chỉ IP khác địa chỉ MAC ở điểm nào?", ["IP luôn gắn cứng với phần cứng", "IP được gán và có thể thay đổi; MAC gắn với phần cứng theo mô hình bài học", "MAC luôn có 4 byte", "IP chỉ dùng trong thư điện tử"], 1],
      ["Khi truyền dữ liệu trực tiếp giữa hai máy cùng LAN, địa chỉ nào được dùng ở lớp liên kết theo bài?", ["Tên miền", "Tài khoản email", "Cổng ứng dụng", "Địa chỉ MAC"], 3],
      ["Khi dữ liệu đi giữa các LAN khác nhau, router dẫn đường chủ yếu dựa trên gì?", ["Địa chỉ IP", "Màu sắc thiết bị", "Tên người dùng", "Độ sáng màn hình"], 0],
      ["Mục đích của mã kiểm tra trong Ethernet là gì?", ["Tăng kích thước gói", "Thay thế địa chỉ IP", "Phát hiện lỗi truyền để xử lí hoặc yêu cầu gửi lại", "Chỉ để đặt tên máy"], 2],
      ["Vì sao dữ liệu được chia thành các khung hoặc gói có độ dài xác định?", ["Để không cần địa chỉ", "Hạn chế chiếm dụng đường truyền quá lâu và giảm nguy cơ quá tải", "Để xóa dữ liệu", "Để chỉ một ứng dụng được dùng Internet"], 1],
      ["TCP là viết tắt của cụm từ nào?", ["Transfer Computer Program", "Technical Connection Process", "Transmission Communication Port", "Transmission Control Protocol"], 3],
      ["IP không tự đảm bảo điều gì?", ["Chuyển dữ liệu đến đúng ứng dụng cụ thể trên máy nhận", "Đánh địa chỉ thiết bị", "Định tuyến giữa các mạng", "Chuyển gói theo địa chỉ IP"], 0],
      ["TCP dùng cổng ứng dụng nhằm mục đích gì?", ["Chọn màu giao diện", "Chuyển tín hiệu quang", "Phân biệt dữ liệu của các ứng dụng khác nhau", "Tạo tên miền"], 2],
      ["TCP đánh số các gói nhằm mục đích gì?", ["Đổi địa chỉ MAC", "Giúp nơi nhận sắp xếp dữ liệu đúng thứ tự", "Tăng số cổng vật lí", "Chỉ để nén hình ảnh"], 1],
      ["Cơ chế xác nhận của TCP giúp bên gửi làm gì?", ["Biết màu màn hình", "Tạo địa chỉ IP mới", "Tắt router", "Biết gói đã đến hay có thất lạc/sai sót để yêu cầu gửi lại khi cần"], 3],
      ["DNS có chức năng chính nào?", ["Cho dùng tên miền bằng chữ thay cho địa chỉ IP khó nhớ", "Tạo cáp mạng", "Chia sẻ máy in", "Chuyển đổi tín hiệu điện sang quang"], 0],
      ["HTTP liên quan đến nội dung nào trong tài liệu?", ["Chia sẻ thư mục Public", "Phân biệt ứng dụng bằng cổng TCP", "Cách biểu diễn hoặc mã hóa trang web", "Định tuyến router"], 2],
      ["ICMP được nhắc tới như giao thức hỗ trợ cho công cụ nào?", ["Excel", "Lệnh ping", "Google Dịch", "File Explorer"], 1],
      ["Định tuyến tĩnh thường dựa trên gì?", ["Danh bạ người dùng", "Bộ nhớ video", "Nội dung email", "Bảng định tuyến được thiết lập"], 3],
      ["Cổng mặc định trong bảng định tuyến được sử dụng khi nào?", ["Khi không có mục định tuyến phù hợp hơn theo bảng", "Khi máy không có địa chỉ IP", "Chỉ khi tắt router", "Chỉ khi gửi email"], 0],
      ["Định tuyến động có đặc điểm nào?", ["Không dùng router", "Không cần địa chỉ đích", "Có thể đổi đường đi theo điều kiện mạng", "Chỉ dùng cho mạng LAN đơn"], 2],
      ["Vì sao gói gửi sau có thể đến trước gói gửi trước khi dùng TCP/IP?", ["Vì TCP luôn đảo thứ tự", "Các gói có thể đi qua tuyến và thời gian lưu tại router khác nhau", "Vì địa chỉ IP không có số", "Vì mọi gói đều gửi bằng email"], 1],
      ["Hai máy tính dùng chat và sao chép tệp đồng thời: TCP giúp gì?", ["Đổi tên các máy tính", "Tạo thêm router", "Tự động cài ứng dụng", "Phân biệt luồng dữ liệu theo cổng ứng dụng"], 3],
      ["Trong mô tả bài học, Internet là gì về phương diện công nghệ?", ["Mạng thông tin toàn cầu hoạt động theo giao thức TCP/IP", "Một trang web", "Một mạng xã hội duy nhất", "Một dịch vụ email"], 0],
      ["Router như bưu cục chuyển tiếp minh họa cho thành phần nào?", ["Mã kiểm tra Ethernet", "Cổng ứng dụng TCP", "Bảng định tuyến và lựa chọn đường đi", "Địa chỉ thư điện tử"], 2],
      ["Khi đến LAN đích, dữ liệu được chuyển tới thiết bị cuối trong LAN dựa vào gì?", ["Tên miền", "Địa chỉ MAC của máy nhận", "Mật khẩu Wi-Fi", "Tên ứng dụng"], 1],
      ["Lệnh ping dùng phổ biến để kiểm tra điều gì?", ["Tốc độ gõ phím", "Dung lượng pin", "Quyền chia sẻ thư mục", "Khả năng kết nối đến máy hoặc thiết bị mạng"], 3],
      ["Giao thức mạng quy định các yếu tố nào?", ["Định dạng, ý nghĩa và cách xử lí dữ liệu", "Chỉ màu sắc cáp", "Chỉ vị trí màn hình", "Chỉ tên tài khoản"], 0],
      ["Địa chỉ IP 131.214.23.16 có byte đầu tiên ở nhị phân là gì?", ["10000010", "11010110", "10000011", "00010000"], 2],
      ["Trong giao thức IP, router có nhiều cổng WAN cần làm gì khi nhận gói?", ["In ra nội dung", "Chọn cổng thích hợp để chuyển tiếp", "Đổi dữ liệu thành thư", "Xóa địa chỉ đích"], 1],
      ["So sánh đúng nhất giữa IP và TCP là gì?", ["IP chỉ quản lí mật khẩu, TCP chỉ quản lí tên miền", "Cả hai đều chỉ gửi thư", "TCP thay thế hoàn toàn thiết bị router", "IP đánh địa chỉ và dẫn đường; TCP hỗ trợ truyền theo ứng dụng tin cậy"], 3],
      ["Vì sao nhiều cuộc gọi Internet có thể chia sẻ cùng đường truyền vật lí?", ["Dữ liệu được chia thành gói và các cuộc truyền có thể xen kẽ", "Mỗi cuộc gọi có đường cáp riêng toàn cầu", "TCP xóa mọi âm thanh", "Không có giao thức nào"], 0],
      ["Tên miền thuận tiện hơn dãy IP vì thường là gì?", ["Một địa chỉ MAC", "Một cổng WAN", "Tên bằng chữ dễ nhớ", "Một mã kiểm tra"], 2],
      ["Quy định về việc người dùng phải trả phí Internet có thuộc chức năng truyền dữ liệu của giao thức không?", ["Có, là chức năng cốt lõi của IP", "Không; đó là vấn đề sử dụng dịch vụ, không phải quy tắc truyền dữ liệu cốt lõi", "Có, là chức năng TCP bắt buộc", "Có, là chức năng Ethernet"], 1]
,
      ["Trong mô hình bài học, dữ liệu đi qua các router giữa hai LAN chủ yếu dùng địa chỉ nào để dẫn đường?", ["Địa chỉ email", "Tên tệp", "Địa chỉ IP", "Tên ứng dụng"], 2]
    ]},
    { name: "Bài 5 · Thực hành chia sẻ tài nguyên trên mạng", questions: [
      ["Tài nguyên máy tính có thể gồm những gì?", ["Dữ liệu, phần mềm hoặc thiết bị", "Chỉ màn hình", "Chỉ chuột", "Chỉ tài khoản mạng xã hội"], 0],
      ["Chia sẻ tài nguyên trên LAN có nghĩa là gì?", ["Tự động công khai mọi tệp trên Internet", "Xóa dữ liệu khỏi máy chủ", "Cho phép người dùng dùng tài nguyên máy khác theo quyền được cấp", "Chỉ gửi email"], 2],
      ["Vì sao phải cấp quyền khi chia sẻ?", ["Để tăng kích thước màn hình", "Để hạn chế truy cập sai mục đích và nguy cơ làm hỏng dữ liệu", "Để xóa mật khẩu", "Để tắt mạng"], 1],
      ["Trong Windows, Private network phù hợp hơn khi nào?", ["Ở sân bay với thiết bị lạ", "Ở mạng công cộng không tin cậy", "Khi không có thiết bị khác", "Khi các thiết bị/người dùng trong mạng được tin cậy hơn"], 3],
      ["Network discovery dùng để làm gì?", ["Cho phép máy tính khác phát hiện máy tính trên mạng theo cấu hình", "Xóa các thư mục", "Chỉ chia sẻ máy in USB", "Đổi mật khẩu email"], 0],
      ["File and printer sharing là thiết lập liên quan đến gì?", ["Độ sáng màn hình", "Chế độ ngủ máy", "Chia sẻ tệp và máy in qua mạng", "Kích thước chuột"], 2],
      ["Thư mục Public nằm trong đường dẫn nào theo bài?", ["Desktop/Recycle Bin", "Ổ hệ thống C:/Users/Public", "Control Panel/Network", "Program Files/Printer"], 1],
      ["Mặc định, dữ liệu trong Public được mô tả như thế nào?", ["Luôn chia sẻ cho Internet", "Luôn có quyền sửa cho mọi người", "Chỉ mở từ USB", "Không được chia sẻ cho tới khi thiết lập chia sẻ phù hợp"], 3],
      ["Tường lửa có chức năng gì?", ["Kiểm soát truy cập mạng và hỗ trợ ngăn xâm nhập", "Tạo tài khoản email", "In hàng đợi", "Tăng dung lượng ổ cứng"], 0],
      ["Thao tác đầu tiên để mở tùy chọn chia sẻ thư mục là gì?", ["Nhấn Delete", "Tắt router", "Nháy phải thư mục rồi chọn Properties", "Đổi mật khẩu Wi-Fi"], 2],
      ["Trong Properties của thư mục, thẻ nào liên quan đến chia sẻ?", ["General", "Sharing", "Customize", "Previous Versions"], 1],
      ["Quyền Read cho phép điều gì?", ["Xem, sửa và xóa mọi tệp", "Cài ứng dụng từ xa", "Đổi quyền quản trị", "Xem nội dung mà không được sửa bằng chính quyền Read"], 3],
      ["Quyền Read/Write cho phép người dùng làm gì?", ["Đọc và sửa trong phạm vi quyền được cấp", "Chỉ xem, tuyệt đối không sửa", "Quản trị toàn bộ máy", "Thay đổi mọi thiết lập mạng"], 0],
      ["Everyone trong danh sách chia sẻ thể hiện điều gì?", ["Một máy in", "Một tên miền", "Nhóm người dùng được áp dụng quyền chia sẻ theo cấu hình", "Một giao thức TCP"], 2],
      ["Muốn thu hồi chia sẻ đối với một người dùng trong danh sách, có thể chọn gì?", ["Refresh", "Remove", "Connect automatically", "Set as default"], 1],
      ["Muốn máy khác tìm thư mục được chia sẻ trong File Explorer, thường chọn mục nào?", ["Downloads", "Recycle Bin", "Control Panel", "Network"], 3],
      ["Sau khi chia sẻ thư mục thành công, quyền Read sẽ cho máy khác làm gì?", ["Xem nội dung tệp được chia sẻ", "Xóa thư mục gốc", "Đổi quyền của máy chủ", "Tắt máy chủ"], 0],
      ["Muốn hủy chia sẻ thư mục trong Advanced Sharing, cần làm gì?", ["Bật Everyone", "Chọn Read/Write", "Bỏ dấu tích Share this folder rồi xác nhận", "Bật Bluetooth"], 2],
      ["Vì sao không nên tắt tường lửa vĩnh viễn chỉ để chia sẻ tệp?", ["Vì tường lửa làm hỏng bàn phím", "Vì giảm một lớp bảo vệ trước truy cập không mong muốn", "Vì thư mục không còn tên", "Vì không thể mở trình duyệt"], 1],
      ["Máy tính có máy in được chia sẻ có thể đóng vai trò gì?", ["Router WAN", "DNS Server", "Modem quang", "Print Server"], 3],
      ["Máy chủ in xử lí các yêu cầu in theo cách nào?", ["Nhận yêu cầu, xếp hàng đợi và gửi lệnh in khi máy in sẵn sàng", "Tự xóa mọi tài liệu", "Gửi bản in lên Internet", "Chỉ in khi máy khác tắt"], 0],
      ["Để chia sẻ máy in, máy tính cung cấp dịch vụ in cần làm gì?", ["Xóa trình điều khiển", "Tắt mạng", "Cấu hình máy in và bật chia sẻ", "Gỡ máy in khỏi máy"], 2],
      ["Trong Windows, phần thiết lập máy in ở Control Panel có mục nào?", ["Advanced sharing settings", "Printers & scanners", "Network discovery", "Public folder"], 1],
      ["Tùy chọn Sharing trong thuộc tính máy in dùng để làm gì?", ["Đổi độ sáng", "Tạo tài khoản", "Xem bộ nhớ", "Bật chia sẻ máy in qua mạng"], 3],
      ["Vì sao nên đặt tên gợi nhớ cho máy in mạng?", ["Để người dùng dễ nhận diện đúng máy in", "Để tăng tốc độ mạng", "Để đổi địa chỉ IP", "Để tắt máy chủ"], 0],
      ["Máy tính khác muốn sử dụng máy in mạng cần làm gì?", ["Tắt thiết bị in", "Xóa phần mềm văn bản", "Tìm, thêm hoặc kết nối tới máy in mạng", "Ngắt LAN"], 2],
      ["Nếu máy in không xuất hiện trong danh sách, người dùng có thể làm gì?", ["Xóa tất cả máy in", "Dùng tùy chọn máy in không có trong danh sách để tiếp tục tìm/thêm", "Tắt hệ điều hành", "Xóa router"], 1],
      ["Sau khi thêm máy in mạng, cách kiểm tra phù hợp là gì?", ["Đổi hình nền", "Tắt máy in", "Gỡ trình điều khiển", "Thử in một trang tài liệu"], 3],
      ["Nếu máy tính cung cấp dịch vụ in ngủ hoặc tắt, điều gì có thể xảy ra?", ["Máy in chia sẻ có thể không sẵn sàng với máy khác", "Máy in luôn chạy độc lập trong mọi trường hợp", "Mọi máy tính tự làm Print Server", "Internet ngừng trên toàn cầu"], 0],
      ["Khi chia sẻ tài nguyên, quyền nào phù hợp nếu chỉ muốn người khác đọc tài liệu?", ["Read/Write", "Quản trị viên", "Read", "Everyone full control"], 2],
      ["Chế độ Public network nhằm mục tiêu nào?", ["Mở mọi tài nguyên không hạn chế", "Hạn chế nguy cơ lộ thông tin ở địa điểm công cộng", "Chỉ dùng để chơi game", "Tắt mọi cơ chế an ninh"], 1],
      ["Tùy chọn Advanced Sharing mở ra mục đích gì?", ["Đổi tên Windows", "Tạo bản sao ổ đĩa", "Đổi cổng WAN", "Thiết lập chi tiết việc chia sẻ thư mục"], 3],
      ["Vì sao chia sẻ toàn ổ đĩa cần thận trọng?", ["Vì có thể làm lộ nhiều tệp hơn mức cần thiết; cần giới hạn quyền", "Vì ổ đĩa không có dữ liệu", "Vì không thể có mật khẩu", "Vì ổ đĩa là thiết bị mạng"], 0],
      ["Nếu một thư mục chỉ chia sẻ với một nhóm người được chọn, điều này giúp ích gì?", ["Làm mọi người có quyền quản trị", "Xóa nhu cầu bảo mật", "Giới hạn truy cập theo nhu cầu và thẩm quyền", "Tăng tốc độ CPU"], 2],
      ["Chia sẻ máy in giúp tránh việc nào?", ["Cài đặt Windows", "Mỗi người phải chuyển tệp bằng USB sang máy có máy in chỉ để in", "Dùng cáp mạng", "Cập nhật tài liệu"], 1],
      ["Thông tin tài liệu nêu về máy in mạng là gì?", ["Không cần máy tính chủ", "Chỉ có thể in qua Internet công cộng", "Không có hàng đợi", "Máy chủ in nhận yêu cầu từ các máy khác trong mạng"], 3],
      ["Bật Network discovery và chia sẻ tệp có đồng nghĩa mọi máy tính trên Internet đều truy cập được không?", ["Không; việc truy cập còn phụ thuộc phạm vi mạng, quyền và bảo mật", "Có, bất kì ai đều có toàn quyền", "Có nếu dùng Windows 11", "Có nếu thư mục có tên Public"], 0],
      ["Mục đích của bước kiểm tra quyền sau khi chia sẻ là gì?", ["Thay cáp UTP", "Tắt máy chủ", "Xác nhận người dùng chỉ có quyền phù hợp", "Tạo modem"], 2],
      ["Tính năng chia sẻ máy in biến máy tính có máy in thành gì theo bài học?", ["Bộ chuyển mạch", "Máy chủ cung cấp dịch vụ in", "Điểm truy cập Wi-Fi", "Máy chủ DNS"], 1],
      ["Nhận định nào đúng về chia sẻ tệp và máy in?", ["Không cần quyền truy cập", "Phải kết bạn trên mạng xã hội", "Mọi người tự động có toàn quyền", "Cần thiết lập phù hợp và kiểm soát quyền để bảo vệ tài nguyên"], 3]
    ]},
    { name: "Bài 6 · Giao tiếp và ứng xử trong không gian mạng", questions: [
      ["Không gian mạng là gì?", ["Môi trường được tạo ra nhờ sử dụng mạng máy tính", "Một phòng máy cụ thể", "Một phần mềm soạn thảo", "Một thiết bị in"], 0],
      ["Mạng nào có thể được coi là không gian mạng lớn nhất?", ["Mạng gia đình", "Mạng trường học", "Internet", "Mạng máy in"], 2],
      ["Trường hợp nào là giao tiếp trong không gian mạng?", ["Hẹn gặp trực tiếp tại quán cà phê", "Tham gia lớp học trực tuyến", "Gửi thư tay qua bưu điện", "Nói chuyện trực tiếp ngoài sân"], 1],
      ["Ưu điểm thuận tiện của giao tiếp trực tuyến là gì?", ["Không cần thiết bị", "Không bao giờ gián đoạn", "Không cần mạng", "Có thể giao tiếp nhiều nơi, nhiều lúc khi có kết nối"], 3],
      ["Hội nghị truyền hình có thể giúp tiết kiệm gì?", ["Thời gian và chi phí đi lại", "Tất cả tiền sinh hoạt", "Mọi chi phí công nghệ", "Không gian lưu trữ"], 0],
      ["Giao tiếp trực tuyến mở rộng kết nối xã hội bằng cách nào?", ["Chỉ liên hệ người cùng nhà", "Chỉ giao tiếp với người cùng lớp", "Kết nối những người có cùng sở thích hoặc nhu cầu dù ở xa", "Ngăn hình thành cộng đồng"], 2],
      ["Nhược điểm của tin nhắn và thư điện tử là gì?", ["Không thể chứa văn bản", "Thiếu tín hiệu phi ngôn ngữ như nét mặt, ngôn ngữ cơ thể", "Không thể gửi cho người ở xa", "Không dùng thiết bị"], 1],
      ["Một nguy cơ bảo mật khi giao tiếp trực tuyến là gì?", ["Tăng cỡ chữ", "Giảm âm lượng loa", "Màn hình tắt", "Lộ mật khẩu hoặc dữ liệu riêng tư"], 3],
      ["Vì sao khó xây dựng lòng tin trong một số quan hệ trực tuyến?", ["Có thể có tài khoản giả mạo hoặc thông tin không chân thật", "Mọi người đều dùng tên thật", "Không thể gửi văn bản", "Chỉ dùng video trực tiếp"], 0],
      ["Sự cố nào có thể làm gián đoạn cuộc gọi trực tuyến?", ["Lời cảm ơn", "Ngôn từ lịch sự", "Mất kết nối mạng hoặc phần mềm không tương thích", "Đọc kỹ thông tin"], 2],
      ["Bốn yếu tố quan trọng của ứng xử nhân văn trong bài là gì?", ["Tốc độ, danh tiếng, lượt thích, số theo dõi", "Tôn trọng, lịch sự, thấu hiểu, hỗ trợ", "Ẩn danh, tranh cãi, phê phán, áp đặt", "Nổi tiếng, cạnh tranh, công kích, chế giễu"], 1],
      ["Tôn trọng quyền riêng tư nghĩa là gì?", ["Đăng nhật kí của bạn", "Công khai số điện thoại bạn", "Chuyển tin nhắn riêng cho nhóm", "Không phát tán thông tin riêng khi chưa được phép"], 3],
      ["Khi không đồng ý với người khác trên mạng, nên làm gì?", ["Nêu lí do và phản bác lịch sự", "Xúc phạm để áp đảo", "Đăng thông tin cá nhân của họ", "Kêu gọi chế giễu"], 0],
      ["Trước khi chia sẻ thông tin lên mạng, nên làm gì?", ["Chỉ đọc tiêu đề", "Chia sẻ ngay khi gây sốc", "Kiểm tra tính chính xác và độ tin cậy", "Sửa tin cho kịch tính"], 2],
      ["Thấu hiểu trong giao tiếp có nghĩa là gì?", ["Luôn áp đặt ý kiến", "Đặt mình vào hoàn cảnh người khác để hiểu cảm xúc và khó khăn", "Bỏ qua người khác", "Chỉ quan tâm lợi ích cá nhân"], 1],
      ["Một hành động hỗ trợ nhân văn là gì?", ["Đăng ảnh làm bạn xấu hổ", "Chia sẻ mật khẩu", "Đe dọa trên mạng", "Gửi lời động viên chân thành tới người đang khó khăn"], 3],
      ["Vì sao cần tự kiểm tra hành vi trực tuyến?", ["Để nhận ra và sửa đổi những hành vi chưa đúng mực", "Để tăng số lượt thích", "Để tìm người chế giễu", "Để xóa mọi ý kiến khác biệt"], 0],
      ["Khi không chắc cách xử lí tình huống khó xử trên mạng, nên làm gì?", ["Đăng ngay mọi dữ liệu", "Trả đũa", "Tìm giúp đỡ từ người có kinh nghiệm hoặc tài liệu phù hợp", "Phát tán tin đồn"], 2],
      ["Khi trò chuyện qua video, ứng xử phù hợp là gì?", ["Cố ý làm lộ đồ riêng tư", "Ăn mặc lịch sự và giữ thái độ đúng đắn", "Chế giễu người tham gia", "Gây mất trật tự"], 1],
      ["Vì sao cần cân nhắc ngôn từ khi viết trực tuyến?", ["Để người đọc khó hiểu", "Để tăng tính xúc phạm", "Để mọi cuộc trao đổi thành tranh cãi", "Để tránh gây hiểu lầm hoặc mang tính khiêu khích"], 3],
      ["Ưu điểm nào giúp giao tiếp trực tuyến hữu ích với người ở xa?", ["Thuận tiện", "Bảo mật tuyệt đối", "Không cần mạng", "Không có nhược điểm"], 0],
      ["Công cụ nào là hình thức giao tiếp trong không gian mạng?", ["Bảng viết lớp học thông thường", "Thư tay", "Ứng dụng nhắn tin trực tuyến", "Gặp mặt trực tiếp"], 2],
      ["Việc dễ giấu mặt hoặc giả mạo thông tin có thể ảnh hưởng đến điều gì?", ["Độ sáng màn hình", "Khả năng xây dựng quan hệ và lòng tin", "Kích thước cáp", "Số byte địa chỉ IP"], 1],
      ["Nội dung thư rác hoặc quảng cáo không liên quan nên được xử lí thế nào?", ["Gửi càng nhiều càng tốt", "Đưa vào mọi cuộc trao đổi", "Dùng để gây phiền", "Tránh gửi để không làm phiền người khác"], 3],
      ["Một bạn bị đăng ảnh xấu để chế giễu. Hành vi đăng ảnh đó thể hiện gì?", ["Thiếu tôn trọng và có thể gây tổn thương", "Sự hỗ trợ", "Sự thấu hiểu", "Tôn trọng quyền riêng tư"], 0],
      ["Khi thấy video quay cảnh bạn học đánh nhau, hành vi nhân văn là gì?", ["Chia sẻ cho thật nhiều người", "Thêm lời chế giễu", "Ngăn phát tán và báo người lớn/giáo viên phù hợp", "Đăng kèm địa chỉ nhà"], 2],
      ["Nếu đọc được nhật kí riêng của bạn, em nên làm gì?", ["Chụp và gửi nhóm lớp", "Tôn trọng riêng tư, không tự ý phát tán", "Đăng để bình luận", "Dùng để đe dọa"], 1],
      ["Trong thảo luận, nên đọc bài của người khác thế nào trước khi trả lời?", ["Chỉ xem ảnh đại diện", "Bỏ qua nội dung", "Chỉ đọc tiêu đề", "Đọc kĩ nội dung rồi mới đưa ý kiến"], 3],
      ["Nguyên tắc đối xử với người khác theo cách mình muốn được đối xử khuyến khích gì?", ["Sự tôn trọng và tử tế", "Áp đặt ý kiến", "Công khai mọi dữ liệu", "Chế giễu người sai"], 0],
      ["Nhược điểm nào liên quan đến thiếu kết nối cá nhân chặt chẽ?", ["Không thể gửi email", "Internet không có video", "Khó đánh giá tính chân thật của người đối diện qua thông tin giả mạo", "Không thể viết văn bản"], 2],
      ["Điều gì làm nên sự đa dạng của giao tiếp trực tuyến?", ["Chỉ có điện thoại video", "Có hội nghị truyền hình, nhắn tin, email, mạng xã hội và công cụ khác", "Chỉ có thư điện tử", "Chỉ có diễn đàn"], 1],
      ["Khi phê bình bạn trên mạng, cách nào nhân văn hơn?", ["Dùng từ ngữ khiếm nhã", "Công kích ngoại hình", "Chụp nhật kí gửi người khác", "Góp ý lịch sự, nói rõ vấn đề và tôn trọng người nghe"], 3],
      ["Vì sao không nên chia sẻ thông tin chưa được xác minh về người khác?", ["Có thể làm tổn hại danh tiếng và quyền riêng tư", "Vì thông tin nào cũng đúng", "Vì mạng không hỗ trợ chia sẻ", "Vì không thể sửa bài đăng"], 0],
      ["Giao tiếp trực tuyến có thể có hiệu quả kém hơn trực tiếp khi nào?", ["Luôn luôn, trong mọi tình huống", "Khi không có văn bản", "Khi thiếu tín hiệu phi ngôn ngữ khiến cảm xúc bị hiểu sai", "Khi có lời cảm ơn"], 2],
      ["Nếu bất đồng về một chủ đề, hành vi nào không phù hợp?", ["Đưa ra lí do", "Công kích cá nhân hoặc dùng ngôn ngữ phân biệt", "Lắng nghe", "Giữ bình tĩnh"], 1],
      ["Mục tiêu của ứng xử nhân văn trên mạng là gì?", ["Mọi người phải có ý kiến giống nhau", "Một người nổi tiếng bằng mọi giá", "Ai cũng công khai thông tin riêng", "Xây dựng môi trường an toàn, lành mạnh, tôn trọng và tin cậy"], 3],
      ["Đâu là ví dụ của tiết kiệm chi phí nhờ giao tiếp trực tuyến?", ["Họp từ xa thay vì đi lại và thuê chỗ ở", "Gửi thêm tin nhắn rác", "Đăng dữ liệu riêng tư", "Sử dụng từ xúc phạm"], 0],
      ["Nếu một cuộc họp trực tuyến bị ngắt mạng, nên làm gì?", ["Đổ lỗi và lăng mạ người tổ chức", "Đăng thông tin riêng tư của người tham gia", "Bình tĩnh thông báo sự cố, kiểm tra kết nối rồi tiếp tục phù hợp", "Chia sẻ tin đồn"], 2],
      ["Thông tin cá nhân của một tài khoản mạng xã hội có thể không đáng tin vì sao?", ["Mọi tài khoản đều là tổ chức", "Một người có thể bịa đặt hoặc giả mạo thông tin", "Tất cả tài khoản đều có xác minh", "Vì mạng chỉ có người thật tên thật"], 1],
      ["Khi nhắn tin riêng với bạn, đâu là cách làm phù hợp?", ["Chuyển tiếp cho cả lớp mà không xin phép", "Đăng lên công khai", "Sửa nội dung để gây hiểu lầm", "Giữ kín nội dung trao đổi khi chưa được phép chia sẻ"], 3]
    ]}
  ],
  trueFalse: [
    [
      { topic: "Bài 1", title: "Đặc trưng của AI", items: [
        ["AI có thể thực hiện những công việc mang tính trí tuệ của con người.", true],
        ["Alan Turing đưa ra phép thử Turing vào năm 1956.", false],
        ["Khả năng học bao gồm việc nắm thông tin từ dữ liệu và điều chỉnh hành vi.", true],
        ["Mọi hệ thống tự động hóa đều được coi là AI.", false]
      ]},
      { topic: "Bài 2", title: "Ứng dụng AI", items: [
        ["AI có thể hỗ trợ cải thiện hình ảnh y tế và quá trình chẩn đoán.", true],
        ["AI trong ngân hàng không thể hỗ trợ phát hiện gian lận.", false],
        ["AI tạo sinh có thể tự động tạo văn bản, hình ảnh hoặc âm thanh.", true],
        ["AI tổng quát đã hoàn thiện và làm được mọi việc của con người.", false]
      ]},
      { topic: "Bài 3", title: "Thiết bị mạng", items: [
        ["Hub gửi tín hiệu đến tất cả cổng còn lại khi nhận dữ liệu tại một cổng.", true],
        ["Switch luôn phát dữ liệu đến tất cả các cổng như hub.", false],
        ["Router có vai trò dẫn đường dữ liệu giữa các mạng.", true],
        ["Modem chỉ có chức năng chia sẻ thư mục.", false]
      ]},
      { topic: "Bài 4", title: "Giao thức", items: [
        ["IP quy định cách đánh địa chỉ và định tuyến gói dữ liệu.", true],
        ["IPv4 có độ dài 6 byte theo bài học.", false],
        ["TCP dùng cổng ứng dụng để phân biệt dữ liệu của ứng dụng.", true],
        ["DNS cho phép dùng tên miền bằng chữ thay địa chỉ IP khó nhớ.", true]
      ]}
    ],
    [
      { topic: "Bài 5", title: "Chia sẻ tài nguyên", items: [
        ["Quyền Read cho phép xem nội dung được chia sẻ nhưng không sửa bằng chính quyền Read.", true],
        ["Chia sẻ tài nguyên không cần quan tâm đến bảo mật.", false],
        ["Có thể hủy chia sẻ thư mục thông qua Advanced Sharing.", true],
        ["Máy tính có máy in chia sẻ có thể đóng vai trò Print Server.", true]
      ]},
      { topic: "Bài 6", title: "Ứng xử trực tuyến", items: [
        ["Không gian mạng được tạo ra nhờ sử dụng mạng máy tính.", true],
        ["Giao tiếp trực tuyến không thể bị gián đoạn bởi sự cố kỹ thuật.", false],
        ["Tôn trọng quyền riêng tư là không phát tán thông tin riêng khi chưa được phép.", true],
        ["Khi bất đồng, nên công kích cá nhân để thuyết phục người khác.", false]
      ]},
      { topic: "Bài 1", title: "AI và tự động hóa", items: [
        ["Guồng nước quay nhờ dòng chảy tự nhiên là ví dụ điển hình của AI.", false],
        ["Hệ thống gợi ý video dựa trên lịch sử xem có thể thể hiện khả năng học.", true],
        ["AI suy luận có thể dùng logic và tri thức để đưa ra kết luận.", true],
        ["AI yếu được thiết kế để thực hiện một nhiệm vụ cụ thể.", true]
      ]},
      { topic: "Bài 3", title: "Kết nối mạng", items: [
        ["WAP giúp thiết bị đầu cuối kết nối không dây vào LAN.", true],
        ["Cổng WAN của router thường dùng để kết nối với mạng bên ngoài.", true],
        ["Cáp UTP thường sử dụng giắc RJ45 trong LAN.", true],
        ["Máy tính để bàn nào cũng chắc chắn có Wi-Fi sẵn mà không cần bộ điều hợp.", false]
      ]}
    ],
    [
      { topic: "Bài 2", title: "ChatGPT và AI tạo sinh", items: [
        ["ChatGPT được tài liệu nêu là hệ thống do OpenAI phát triển.", true],
        ["AI tạo sinh chỉ dùng để định tuyến gói dữ liệu.", false],
        ["Khả năng xử lí ngôn ngữ của ChatGPT có thể khác nhau tùy ngôn ngữ.", true],
        ["Bài học coi AI tổng quát là mục tiêu nghiên cứu dài hạn.", true]
      ]},
      { topic: "Bài 4", title: "TCP và IP", items: [
        ["IP tự nó đảm bảo dữ liệu được giao đến đúng ứng dụng cụ thể trên máy.", false],
        ["TCP có thể đánh số các gói để sắp xếp lại đúng thứ tự ở nơi nhận.", true],
        ["Gói gửi sau có thể đến trước vì các gói có thể qua những tuyến và thời gian khác nhau.", true],
        ["TCP có cơ chế xác nhận để phát hiện trường hợp cần gửi lại.", true]
      ]},
      { topic: "Bài 5", title: "Quyền chia sẻ", items: [
        ["Read/Write cho phép đọc và sửa dữ liệu trong phạm vi quyền được cấp.", true],
        ["Everyone luôn đồng nghĩa mọi người trên Internet có toàn quyền quản trị.", false],
        ["Network discovery giúp các máy khác phát hiện máy tính trong mạng theo thiết lập.", true],
        ["Tắt tường lửa vĩnh viễn là lựa chọn an toàn nhất khi chia sẻ.", false]
      ]},
      { topic: "Bài 6", title: "Tôn trọng và lịch sự", items: [
        ["Cần kiểm tra độ tin cậy trước khi chia sẻ thông tin.", true],
        ["Có thể công khai nhật kí riêng của bạn nếu thấy nội dung thú vị.", false],
        ["Thấu hiểu là cố gắng đặt mình vào hoàn cảnh của người khác.", true],
        ["Ngôn từ lịch sự giúp hạn chế hiểu lầm và tổn thương.", true]
      ]}
    ],
    [
      { topic: "Bài 1", title: "Ứng dụng AI", items: [
        ["ASIMO được nêu là robot do Honda phát triển.", true],
        ["MYCIN là hệ thống chuyên gia trong lĩnh vực y học.", true],
        ["Nhận dạng chữ viết tay không thể chuyển hình ảnh thành dữ liệu văn bản.", false],
        ["Trợ lí ảo có thể hỗ trợ thực hiện tác vụ bằng tiếng nói.", true]
      ]},
      { topic: "Bài 2", title: "Rủi ro AI", items: [
        ["AI có thể làm phát sinh lo ngại về quyền riêng tư khi thu thập dữ liệu cá nhân.", true],
        ["Hệ thống AI không bao giờ đưa ra quyết định sai.", false],
        ["Cần giám sát chặt chẽ quá trình phát triển AI.", true],
        ["Bài học đề cập nguy cơ thất nghiệp do tự động hóa một số công việc.", true]
      ]},
      { topic: "Bài 3", title: "Modem và router", items: [
        ["Modem chuyển đổi dạng tín hiệu mà không làm thay đổi dữ liệu mang bởi tín hiệu.", true],
        ["Router chỉ phát tín hiệu đến mọi cổng và không chọn đường đi.", false],
        ["Modem quang chuyển đổi tín hiệu số và tín hiệu quang.", true],
        ["Router gia đình thường có cổng WAN để nối đến nhà cung cấp Internet.", true]
      ]},
      { topic: "Bài 5", title: "Chia sẻ máy in", items: [
        ["Máy chủ in có thể xếp các yêu cầu in thành hàng đợi.", true],
        ["Sau khi chia sẻ máy in, các máy khác không cần thiết lập sử dụng máy in mạng.", false],
        ["Tên máy in gợi nhớ giúp người dùng nhận diện máy in dễ hơn.", true],
        ["Có thể kiểm tra máy in mạng bằng cách thử in một trang.", true]
      ]}
    ],
    [
      { topic: "Bài 2", title: "Ứng dụng trong đời sống", items: [
        ["AI trong nông nghiệp có thể giúp dự đoán mùa vụ và tối ưu quy trình chăm sóc.", true],
        ["AI chỉ có ứng dụng trong lĩnh vực y học.", false],
        ["IoT kết hợp AI có thể hỗ trợ giám sát môi trường tự nhiên.", true],
        ["ChatGPT trong bài được nêu là ví dụ của AI tạo sinh.", true]
      ]},
      { topic: "Bài 3", title: "Hub, switch, WAP", items: [
        ["Switch chuyển dữ liệu đến cổng phù hợp và giúp giảm nguy cơ xung đột.", true],
        ["Wi-Fi là tên gọi của cáp UTP có giắc RJ45.", false],
        ["Có thể dùng WAP để mở rộng khả năng kết nối không dây của LAN.", true],
        ["Hub phát tín hiệu từ một cổng đến tất cả các cổng còn lại.", true]
      ]},
      { topic: "Bài 4", title: "Định tuyến", items: [
        ["Định tuyến tĩnh thường dựa vào bảng định tuyến đã thiết lập.", true],
        ["Định tuyến động không thể thay đổi đường đi.", false],
        ["Cổng mặc định có thể được dùng khi bảng không có mục phù hợp hơn.", true],
        ["Router có thể trung chuyển gói dữ liệu qua nhiều mạng.", true]
      ]},
      { topic: "Bài 6", title: "Ưu và nhược điểm", items: [
        ["Giao tiếp trực tuyến có thể giảm chi phí di chuyển.", true],
        ["Giao tiếp trực tuyến không bao giờ thiếu tín hiệu phi ngôn ngữ.", false],
        ["Giả mạo thông tin trên mạng có thể làm khó việc xây dựng lòng tin.", true],
        ["Sự cố kết nối có thể làm cuộc họp trực tuyến bị gián đoạn.", true]
      ]}
    ],
    [
      { topic: "Bài 1", title: "Nhận biết năng lực AI", items: [
        ["Camera và radar giúp xe tự lái nhận biết môi trường xung quanh.", true],
        ["Suy luận là khả năng chỉ lưu dữ liệu mà không rút kết luận.", false],
        ["Google Dịch là ví dụ ứng dụng xử lí ngôn ngữ.", true],
        ["AI yếu có thể được thiết kế cho nhiệm vụ nhận dạng khuôn mặt.", true]
      ]},
      { topic: "Bài 3", title: "Kết nối và tín hiệu", items: [
        ["Tín hiệu trong cáp quang có thể là tín hiệu ánh sáng.", true],
        ["Máy tính luôn truy cập Internet ngay sau khi cắm dây, không cần cấu hình logic trong mọi trường hợp.", false],
        ["Trong mạng không dây, dữ liệu có thể được mang bằng sóng vô tuyến.", true],
        ["Cổng LAN của router kết nối với mạng nội bộ.", true]
      ]},
      { topic: "Bài 4", title: "Địa chỉ và giao thức", items: [
        ["Địa chỉ IPv4 được viết theo dạng dấu chấm gồm bốn giá trị byte thập phân.", true],
        ["Địa chỉ MAC trong mô hình bài học là địa chỉ 4 byte.", false],
        ["Ethernet có quy định về mã kiểm tra để phát hiện lỗi truyền.", true],
        ["TCP và IP có vai trò giống hệt nhau trong mọi khía cạnh.", false]
      ]},
      { topic: "Bài 6", title: "Tình huống nhân văn", items: [
        ["Không nên chia sẻ nội dung trao đổi riêng khi chưa được phép.", true],
        ["Có thể dùng lời lẽ phân biệt giới tính hoặc tôn giáo khi tranh luận.", false],
        ["Ngăn việc phát tán video đánh nhau và báo người lớn phù hợp có thể là ứng xử nhân văn.", true],
        ["Cần đọc kĩ nội dung trước khi đưa ý kiến trong thảo luận trực tuyến.", true]
      ]}
    ],
    [
      { topic: "Bài 2", title: "Tổng hợp AI", items: [
        ["AI có thể tạo nội dung âm thanh, hình ảnh và văn bản.", true],
        ["AI không thể hỗ trợ phân tích dữ liệu tài chính.", false],
        ["Quyết định sai của AI trong y tế có thể gây hại cho người bệnh.", true],
        ["Cần quan tâm đến tính minh bạch và trách nhiệm khi ứng dụng AI.", true]
      ]},
      { topic: "Bài 4", title: "Gói dữ liệu và dịch vụ", items: [
        ["Các cuộc truyền dữ liệu có thể xen kẽ trên cùng đường truyền nhờ chia thành gói.", true],
        ["DNS được dùng để thay đổi tín hiệu số thành tín hiệu quang.", false],
        ["Ping thường giúp kiểm tra khả năng kết nối tới thiết bị mạng.", true],
        ["SMTP là giao thức gửi thư điện tử được nêu trong bài.", true]
      ]},
      { topic: "Bài 5", title: "An toàn chia sẻ", items: [
        ["Chỉ nên cấp quyền sửa khi người được chia sẻ thực sự cần chỉnh sửa.", true],
        ["Chia sẻ ổ đĩa không có nguy cơ lộ dữ liệu nên không cần cân nhắc quyền.", false],
        ["Tường lửa giúp kiểm soát truy cập và giảm nguy cơ xâm nhập.", true],
        ["Hủy chia sẻ thư mục có thể làm đường chia sẻ đó không còn truy cập được.", true]
      ]},
      { topic: "Bài 6", title: "Ứng xử tổng kết", items: [
        ["Ứng xử nhân văn góp phần xây dựng môi trường trực tuyến an toàn và tin cậy.", true],
        ["Khi tức giận, nên gửi ngay lời xúc phạm để giải quyết bất đồng.", false],
        ["Lịch sự bao gồm tránh lăng mạ, châm chọc và phỉ báng.", true],
        ["Hỗ trợ người khác đôi khi chỉ cần lời động viên chân thành.", true]
      ]}
    ]
    ,
    [
      { topic: "Bài 1", title: "Tổng hợp năng lực AI", items: [
        ["Khả năng suy luận sử dụng logic và tri thức để đưa ra kết luận.", true],
        ["Một guồng nước truyền thống nhất thiết là ứng dụng AI.", false],
        ["Trợ lí ảo có thể xử lí yêu cầu bằng ngôn ngữ tự nhiên.", true],
        ["AI yếu được định nghĩa là AI đã có năng lực tổng quát như con người.", false]
      ]},
      { topic: "Bài 2", title: "Lợi ích và cảnh báo", items: [
        ["AI có thể hỗ trợ kiểm tra chất lượng trong sản xuất.", true],
        ["Các ứng dụng AI không tạo ra bất cứ lo ngại nào về dữ liệu cá nhân.", false],
        ["Cần giám sát và quản lí rủi ro khi phát triển AI.", true],
        ["AI tạo sinh chỉ có thể tạo văn bản, không thể tạo hình ảnh hoặc âm thanh.", false]
      ]},
      { topic: "Bài 4", title: "Giao thức Internet", items: [
        ["TCP có cơ chế xác nhận để hỗ trợ phát hiện gói thất lạc hoặc lỗi.", true],
        ["DNS được dùng chủ yếu để chia sẻ máy in trên LAN.", false],
        ["Địa chỉ IPv4 được viết thông dụng bằng bốn nhóm số thập phân ngăn cách bởi dấu chấm.", true],
        ["IP và TCP có vai trò khác nhau trong bộ giao thức TCP/IP.", true]
      ]},
      { topic: "Bài 6", title: "Ứng xử có trách nhiệm", items: [
        ["Có thể chia sẻ ảnh riêng tư của bạn mà không cần xin phép nếu ảnh khiến nhiều người thích.", false],
        ["Khi bất đồng, nên bình tĩnh trình bày lí do và tránh công kích cá nhân.", true],
        ["Kiểm tra tính chính xác trước khi chia sẻ giúp hạn chế lan truyền thông tin sai.", true],
        ["Ứng xử nhân văn gồm cả tôn trọng, lịch sự, thấu hiểu và hỗ trợ.", true]
      ]}
    ]
  ]
};
/* Lời giải thích gắn vào từng câu để hiển thị khi học sinh trả lời sai/bỏ trống. */
(function addTinExplanations(){
 var bank=window.TIN_EXAMS_DATA;if(!bank)return;
 function has(s,words){return words.some(function(w){return s.indexOf(w)>=0;});}
 function mc(t,q){
  var x=String(q[0]||"").toLowerCase(),a=String(q[1][q[2]]||""),s=x+" "+a;
  if(t===0){
   if(has(s,["alan turing","phép thử turing"]))return "Alan Turing đề xuất phép thử Turing năm 1950; phép thử bàn về cách đánh giá hành vi đối thoại thông minh của máy.";
   if(s.indexOf("dartmouth")>=0)return "Hội thảo Dartmouth năm 1956 là dấu mốc quan trọng gắn với sự hình thành lĩnh vực trí tuệ nhân tạo.";
   if(has(s,["mycin","luật suy diễn"]))return "MYCIN là hệ chuyên gia y học, sử dụng tri thức chuyên môn và luật suy diễn để hỗ trợ đánh giá bệnh.";
   if(has(s,["asimo","honda"]))return "ASIMO là robot hình người do Honda phát triển; nhận dạng hình ảnh hoặc tiếng nói giúp robot tiếp nhận thông tin.";
   if(has(s,["google dịch","dịch máy"]))return "Dịch máy xử lí ngôn ngữ tự nhiên để chuyển nội dung giữa các ngôn ngữ, nên là một ứng dụng AI.";
   if(s.indexOf("ai tổng quát")>=0)return "AI tổng quát cần năng lực rộng và chuyển tri thức giữa lĩnh vực; đây vẫn là mục tiêu nghiên cứu, chưa hoàn thiện trong thực tế.";
   if(has(s,["ai yếu","nhiệm vụ cụ thể","chơi cờ"]))return "AI yếu được thiết kế cho nhiệm vụ cụ thể; điều đó không có nghĩa hệ thống làm được mọi việc như con người.";
   if(has(s,["tự động hóa","guồng nước","ấm tự ngắt"]))return "Một thiết bị chỉ lặp thao tác cố định có thể là tự động hóa nhưng không nhất thiết là AI.";
   if(has(s,["khả năng học","học từ dữ liệu","lịch sử xem"]))return "Học là rút ra mẫu từ dữ liệu và điều chỉnh dự đoán hoặc hành vi; hệ thống gợi ý có thể học từ lịch sử sử dụng.";
   if(has(s,["suy luận","logic","rút ra kết luận"]))return "Suy luận dùng dữ kiện, tri thức và logic để đưa ra kết luận, không chỉ lưu hoặc truyền dữ liệu.";
   if(has(s,["nhận thức","camera","radar","cảm biến","vật cản"]))return "Nhận thức thu nhận và diễn giải thông tin môi trường; camera, radar và cảm biến cung cấp dữ liệu đầu vào.";
   if(has(s,["hiểu ngôn ngữ","giọng nói","trợ lí ảo","siri","bixby"]))return "Hiểu ngôn ngữ giúp hệ thống xử lí câu chữ hoặc lời nói; trợ lí ảo dùng yêu cầu đó để tìm thông tin hoặc thực hiện tác vụ.";
   if(has(s,["giải quyết vấn đề","dự báo thời tiết"]))return "Giải quyết vấn đề vận dụng thông tin và tri thức để xử lí tình huống hoặc đưa ra dự báo.";
   if(has(s,["nhận dạng khuôn mặt","chữ viết tay"]))return "Nhận dạng phân tích hình ảnh để xác định khuôn mặt hoặc chuyển chữ viết thành dữ liệu có thể xử lí.";
   return "Đáp án đúng là “"+a+"”. AI có thể kết hợp học, suy luận, nhận thức, hiểu ngôn ngữ và giải quyết vấn đề; không nên nhầm các năng lực này với thao tác cố định.";
  }
  if(t===1){
   if(has(s,["hệ chuyên gia","tri thức chuyên gia"]))return "Hệ chuyên gia dùng tri thức lĩnh vực cùng luật suy diễn để đưa ra kết luận hoặc gợi ý.";
   if(has(s,["watson","ung thư"]))return "IBM Watson for Oncology là ví dụ AI hỗ trợ điều trị ung thư bằng cách phân tích thông tin y khoa.";
   if(has(s,["y học","y tế","chẩn đoán","sức khỏe"]))return "AI có thể hỗ trợ phân tích ảnh y tế và dữ liệu, nhưng kết quả cần chuyên gia giám sát vì sai sót có thể gây hại.";
   if(has(s,["giao thông","phương tiện tự lái","định tuyến"]))return "AI phân tích dữ liệu giao thông để hỗ trợ định tuyến, quản lí giao thông và phương tiện tự lái.";
   if(has(s,["tài chính","ngân hàng","gian lận","chứng từ","hóa đơn"]))return "AI có thể nhận ra mẫu giao dịch bất thường và tự động xử lí chứng từ, hỗ trợ giảm gian lận và công việc thủ công.";
   if(has(s,["sản xuất","chất lượng","chuỗi cung ứng"]))return "AI hỗ trợ kiểm tra chất lượng, tối ưu quy trình và quản lí chuỗi cung ứng.";
   if(has(s,["nông nghiệp","trang trại","cây trồng","vật nuôi","thu hoạch","đất đai"]))return "AI phân tích dữ liệu thời tiết, đất, cây trồng và chăm sóc để hỗ trợ dự báo và chọn thời điểm thu hoạch.";
   if(has(s,["giáo dục","học tập","người học","trợ lí học tập"]))return "AI trong giáo dục theo dõi tiến độ, phản hồi và đề xuất nội dung phù hợp từng người học.";
   if(has(s,["aiot","iot","biến đổi khí hậu"]))return "AIoT kết hợp AI với thiết bị IoT: thiết bị thu thập dữ liệu còn AI phân tích để hỗ trợ giám sát hoặc ra quyết định.";
   if(has(s,["tạo sinh","văn bản, hình ảnh","âm thanh","nghệ thuật","quảng cáo","trò chơi"]))return "AI tạo sinh có thể tạo nội dung mới như văn bản, hình ảnh hoặc âm thanh.";
   if(has(s,["chatgpt","openai"]))return "Theo bài học, ChatGPT là hệ thống AI tạo sinh do OpenAI phát triển, xử lí yêu cầu ngôn ngữ theo ngữ cảnh.";
   if(has(s,["huấn luyện","lượng lớn dữ liệu","ngữ cảnh","câu trả lời đa dạng"]))return "Mô hình ngôn ngữ học quy luật từ lượng lớn dữ liệu và tạo câu trả lời theo yêu cầu/ngữ cảnh; kết quả vẫn cần kiểm chứng.";
   if(has(s,["ai tổng quát","ai hẹp","ai yếu"]))return "Phần lớn ứng dụng hiện tại là AI hẹp cho nhiệm vụ nhất định; AI tổng quát cần năng lực rộng qua nhiều lĩnh vực.";
   if(has(s,["thất nghiệp","việc làm","công việc"]))return "Tự động hóa có thể thay đổi một số nhiệm vụ và tạo áp lực việc làm, nên cần thích ứng và đào tạo lại.";
   if(has(s,["quyền riêng tư","dữ liệu cá nhân"]))return "AI có thể thu thập nhiều dữ liệu cá nhân; sử dụng dữ liệu không phù hợp có thể xâm phạm quyền riêng tư.";
   if(has(s,["hộp đen","minh bạch","trách nhiệm giải trình"]))return "Nếu khó hiểu căn cứ quyết định của AI, việc kiểm tra, giải thích và xác định trách nhiệm trở nên khó.";
   if(has(s,["rủi ro","nguy cơ","vũ khí","an toàn","giám sát","quy định pháp lí","xâm nhập"]))return "AI cần giám sát và cơ chế an toàn/trách nhiệm để hạn chế sai sót và tác động tiêu cực đến con người.";
   return "Đáp án đúng là “"+a+"”. AI hỗ trợ nhiều lĩnh vực bằng cách phân tích dữ liệu và tạo gợi ý, nhưng kết quả vẫn cần kiểm tra và quản lí rủi ro.";
  }
  if(t===2){
   if(s.indexOf("hub")>=0)return "Hub phát tín hiệu ra các cổng còn lại, không chọn riêng cổng đích; nhiều máy truyền cùng lúc dễ gây xung đột.";
   if(has(s,["switch","collision","xung đột"]))return "Switch chuyển khung đến cổng thích hợp theo địa chỉ MAC, hạn chế phát dữ liệu tràn lan như hub.";
   if(has(s,["wi-fi","wifi","sóng vô tuyến","mạng không dây","mật khẩu"]))return "Wi‑Fi truyền dữ liệu không dây bằng sóng vô tuyến; mạng có khóa thường cần xác thực bằng mật khẩu.";
   if(has(s,["wap","wireless access point"]))return "WAP cung cấp điểm truy cập không dây để thiết bị kết nối vào mạng LAN.";
   if(has(s,["router","định tuyến","đường đi","wan","mạng bên ngoài","mạng nội bộ"]))return "Router chọn đường chuyển tiếp giữa các mạng; LAN hướng về mạng nội bộ còn WAN hướng tới mạng bên ngoài.";
   if(has(s,["modem","tín hiệu số","tín hiệu tương tự","tín hiệu quang","gsm","3g","4g","5g","sim"]))return "Modem chuyển đổi tín hiệu phù hợp đường truyền; modem quang xử lí tín hiệu quang, còn modem di động thường dùng SIM.";
   if(has(s,["utp","rj45","cáp mạng","đôi dây xoắn","cáp quang"]))return "Cáp UTP thường có bốn đôi dây xoắn và dùng giắc RJ45 trong LAN; cáp quang truyền dữ liệu bằng ánh sáng.";
   if(has(s,["kết nối vật lí","cấu hình logic","cắm dây","internet ngay"]))return "Cắm cáp mới tạo kết nối vật lí; máy còn có thể cần địa chỉ IP, cấu hình logic và dịch vụ Internet hoạt động.";
   if(has(s,["máy tính để bàn","bộ điều hợp","wifi sẵn"]))return "Không phải máy tính để bàn nào cũng có Wi‑Fi tích hợp; nếu thiếu có thể dùng card hoặc bộ điều hợp Wi‑Fi.";
   return "Đáp án đúng là “"+a+"”. Hub, switch, router, modem và WAP có các chức năng khác nhau; cần phân biệt truyền tín hiệu, kết nối LAN và định tuyến giữa các mạng.";
  }
  if(t===3){
   if(s.indexOf("smtp")>=0)return "SMTP dùng để gửi thư điện tử; POP3 và IMAP liên quan đến truy cập hoặc nhận thư.";
   if(has(s,["pop3","imap"]))return "POP3 và IMAP dùng để truy cập/lấy hoặc đồng bộ thư điện tử; SMTP mới là giao thức gửi thư.";
   if(s.indexOf("ethernet")>=0)return "Ethernet quy định cách truyền dữ liệu trong mạng cục bộ có dây.";
   if(has(s,["mac","6 byte","4 byte"]))return "Địa chỉ MAC dài 6 byte theo bài học; IPv4 dài 4 byte. Hai địa chỉ có vai trò khác nhau.";
   if(has(s,["ipv4","nhị phân","byte đầu tiên","192.168.1.3","10.25.0.255","131.214.23.16"]))return "IPv4 dài 32 bit (4 byte), viết thành bốn nhóm số thập phân; mỗi byte tương ứng 8 bit nhị phân.";
   if(has(s,["tcp","cổng ứng dụng","đánh số các gói","xác nhận","gửi lại","thứ tự"]))return "TCP dùng cổng để phân biệt ứng dụng, đánh số/xác nhận và có thể gửi lại dữ liệu để hỗ trợ truyền tin đúng thứ tự.";
   if(has(s,["dns","tên miền"]))return "DNS tra cứu tên miền thành địa chỉ IP để người dùng dùng tên dễ nhớ.";
   if(s.indexOf("http")>=0)return "HTTP là giao thức trao đổi dữ liệu web giữa trình duyệt và máy chủ.";
   if(has(s,["icmp","ping"]))return "Ping dùng ICMP để kiểm tra khả năng liên lạc với thiết bị mạng; kết quả còn phụ thuộc cấu hình chặn ICMP.";
   if(has(s,["mã kiểm tra","lỗi truyền"]))return "Mã kiểm tra trong Ethernet giúp phát hiện lỗi truyền của khung dữ liệu.";
   if(has(s,["chia thành các gói","xen kẽ","đường truyền quá lâu"]))return "Chia dữ liệu thành gói giúp nhiều luồng cùng chia sẻ đường truyền; các gói có thể đi qua tuyến hoặc thời gian xử lí khác nhau.";
   if(has(s,["phí internet","trả phí"]))return "Cước phí là chính sách dịch vụ, không phải quy tắc kỹ thuật của giao thức truyền dữ liệu.";
   if(has(s,["internet là gì","tcp/ip"]))return "Internet liên kết nhiều mạng và sử dụng bộ giao thức TCP/IP để trao đổi dữ liệu.";
   return "Đáp án đúng là “"+a+"”. Giao thức quy định cách trao đổi dữ liệu; IP lo địa chỉ/định tuyến, TCP hỗ trợ truyền tin tin cậy, DNS tra tên miền và SMTP gửi thư.";
  }
  if(t===4){
   if(has(s,["read/write","read cho phép","quyền read"]))return "Read cho phép xem/đọc; Read/Write cho phép đọc và sửa trong phạm vi được cấp.";
   if(s.indexOf("everyone")>=0)return "Everyone là nhóm trong thiết lập chia sẻ, không có nghĩa mọi người trên Internet được toàn quyền.";
   if(has(s,["tường lửa","firewall"]))return "Tường lửa kiểm soát lưu lượng để giảm truy cập không mong muốn; không nên tắt vĩnh viễn chỉ để chia sẻ.";
   if(s.indexOf("network discovery")>=0)return "Network discovery giúp máy tính phát hiện nhau trong phạm vi mạng theo cấu hình, không tự mở truy cập ra toàn Internet.";
   if(has(s,["private network","public network"]))return "Private phù hợp hơn với mạng đáng tin cậy; Public thận trọng hơn ở nơi công cộng để hạn chế chia sẻ ngoài ý muốn.";
   if(has(s,["public","users/public"]))return "Thư mục Public không tự động được mọi máy khác truy cập; việc truy cập còn phụ thuộc cấu hình chia sẻ và quyền.";
   if(has(s,["properties","sharing","advanced sharing","remove","share this folder"]))return "Properties/Sharing/Advanced Sharing là nơi cấu hình, giới hạn hoặc hủy chia sẻ thư mục.";
   if(has(s,["máy in","print server","hàng đợi","printers & scanners"]))return "Máy chủ in nhận yêu cầu, xếp hàng và gửi lệnh in; máy khách thường cần thêm máy in mạng và thử in để kiểm tra.";
   if(has(s,["chia sẻ toàn ổ","ổ đĩa","kiểm soát quyền","bảo mật"]))return "Chia sẻ quá rộng có thể làm lộ dữ liệu không cần thiết; cần giới hạn người truy cập và cấp quyền tối thiểu.";
   return "Đáp án đúng là “"+a+"”. Chia sẻ LAN cho phép dùng dữ liệu, phần mềm hoặc thiết bị theo quyền được cấp; cần cấu hình đúng và giữ bảo mật.";
  }
  if(has(s,["không gian mạng"]))return "Không gian mạng được hình thành từ mạng máy tính và dịch vụ trực tuyến; Internet là mạng toàn cầu lớn.";
  if(has(s,["thuận tiện","tiết kiệm","chi phí","đi lại","ở xa","hội nghị truyền hình"]))return "Giao tiếp trực tuyến giúp liên lạc từ xa và giảm thời gian/chi phí đi lại, nhưng phụ thuộc kết nối và thiết bị.";
  if(has(s,["tín hiệu phi ngôn ngữ","nét mặt","ngôn ngữ cơ thể"]))return "Tin nhắn và email thiếu nét mặt, giọng điệu hoặc ngôn ngữ cơ thể nên dễ gây hiểu nhầm.";
  if(has(s,["mật khẩu","dữ liệu riêng tư","quyền riêng tư","nhật kí","nội dung trao đổi riêng","ảnh riêng tư"]))return "Thông tin riêng chỉ nên được chia sẻ khi có sự cho phép; tự ý phát tán có thể xâm phạm quyền riêng tư và làm tổn thương.";
  if(has(s,["giả mạo","lòng tin","thông tin không chân thật","tài khoản giả"]))return "Thông tin hoặc tài khoản giả mạo khiến khó xác minh danh tính và làm giảm lòng tin.";
  if(has(s,["lịch sự","công kích","ngôn từ","phê bình","bất đồng","phân biệt","lăng mạ","châm chọc"]))return "Tranh luận nên tập trung vào vấn đề, nêu lí do và tôn trọng người nghe; công kích cá nhân dễ gây tổn thương.";
  if(has(s,["kiểm tra","xác minh","độ tin cậy","danh tiếng","tin giả"]))return "Cần kiểm tra nguồn và độ chính xác trước khi chia sẻ, vì thông tin chưa xác minh có thể gây hiểu lầm hoặc hại danh tiếng.";
  if(has(s,["thấu hiểu","hoàn cảnh","cảm xúc","khó khăn"]))return "Thấu hiểu là đặt mình vào hoàn cảnh người khác để cân nhắc cảm xúc và khó khăn của họ.";
  if(has(s,["hỗ trợ","động viên","đánh nhau","video"]))return "Ứng xử nhân văn cần giảm tổn hại, không phát tán nội dung bạo lực/làm nhục và tìm người lớn phù hợp khi cần.";
  if(has(s,["spam","thư rác","quảng cáo"]))return "Tránh gửi thư rác hoặc quảng cáo không liên quan để tôn trọng thời gian người nhận.";
  if(has(s,["sự cố","mất kết nối","gián đoạn","không tương thích","ngắt mạng"]))return "Cuộc gọi trực tuyến phụ thuộc mạng, phần mềm và thiết bị nên có thể bị gián đoạn.";
  if(has(s,["tôn trọng","lịch sự","thấu hiểu","hỗ trợ","nhân văn"]))return "Bài học nêu bốn yếu tố ứng xử nhân văn: tôn trọng, lịch sự, thấu hiểu và hỗ trợ.";
  return "Đáp án đúng là “"+a+"”. Giao tiếp trực tuyến có trách nhiệm cần tôn trọng quyền riêng tư, kiểm tra thông tin, dùng ngôn từ lịch sự và cân nhắc tác động đến người khác.";
 }
 function tf(group,item){
  var s=String(item[0]||"").toLowerCase(),ok=item[1],topic=String(group.topic||"");
  if(has(s,["alan turing","phép thử turing"]))return ok?"Đúng: Alan Turing đề xuất phép thử Turing năm 1950.":"Sai: phép thử Turing được đề xuất năm 1950, không phải năm 1956; năm 1956 gắn với hội thảo Dartmouth.";
  if(has(s,["mọi hệ thống tự động","guồng nước"]))return ok?"Tự động hóa có thể chỉ lặp thao tác cố định, nên không nhất thiết là AI.":"Sai: không phải mọi hệ thống tự động hóa đều là AI; máy móc chỉ lặp thao tác không nhất thiết biết học hay suy luận.";
  if(s.indexOf("ai tổng quát")>=0)return ok?"Đúng: AI tổng quát vẫn là mục tiêu nghiên cứu dài hạn.":"Sai: AI tổng quát chưa hoàn thiện trong thực tế, không thể nói đã làm được mọi việc của con người.";
  if(s.indexOf("hub")>=0)return ok?"Đúng: hub phát tín hiệu nhận được ra các cổng còn lại.":"Sai: hub phát ra các cổng; switch thường chuyển đến cổng phù hợp với thiết bị đích.";
  if(s.indexOf("switch")>=0)return ok?"Đúng: switch chuyển dữ liệu đến cổng thích hợp theo địa chỉ đích.":"Sai: switch không luôn phát ra mọi cổng như hub.";
  if(s.indexOf("modem")>=0)return ok?"Đúng: modem chuyển đổi tín hiệu phù hợp đường truyền mà không đổi dữ liệu được mang.":"Sai: modem có chức năng chuyển đổi tín hiệu, không phải chỉ chia sẻ thư mục.";
  if(has(s,["ipv4","6 byte","4 byte"]))return ok?"Đúng: IPv4 dài 4 byte (32 bit).":"Sai: IPv4 dài 4 byte; MAC theo bài học dài 6 byte.";
  if(s.indexOf("mac")>=0)return ok?"Đúng: địa chỉ MAC theo bài học dài 6 byte, dùng ở lớp liên kết.":"Sai: MAC theo bài học dài 6 byte, không phải 4 byte.";
  if(s.indexOf("tcp")>=0)return ok?"Đúng: TCP có cơ chế cổng, đánh số, xác nhận và gửi lại dữ liệu khi cần.":"Sai: TCP hỗ trợ truyền tin tin cậy; không thể gán toàn bộ chức năng của TCP cho IP.";
  if(s.indexOf("dns")>=0)return ok?"Đúng: DNS tra cứu tên miền thành địa chỉ IP.":"Sai: DNS ánh xạ tên miền với IP; nó không chia sẻ máy in hay đổi tín hiệu.";
  if(s.indexOf("router")>=0)return ok?"Đúng: router chọn đường chuyển tiếp dữ liệu giữa các mạng.":"Sai: router chọn đường chuyển tiếp, không chỉ phát dữ liệu ra mọi cổng.";
  if(s.indexOf("everyone")>=0)return ok?"Đúng: Everyone là nhóm trong quyền chia sẻ; quyền phụ thuộc cấu hình.":"Sai: Everyone không có nghĩa mọi người trên Internet được toàn quyền quản trị.";
  if(has(s,["tường lửa","firewall"]))return ok?"Đúng: tường lửa kiểm soát truy cập và giảm nguy cơ xâm nhập.":"Sai: tắt tường lửa vĩnh viễn làm giảm bảo vệ; hãy cấu hình chia sẻ thay vì vô hiệu hóa bảo mật.";
  if(has(s,["read/write","quyền read"]))return ok?"Đúng: Read chỉ xem; Read/Write cho phép đọc và sửa trong phạm vi được cấp.":"Sai: cần phân biệt quyền chỉ đọc với quyền sửa và cấp quyền tối thiểu cần thiết.";
  if(has(s,["ảnh riêng tư","nhật kí","nội dung trao đổi","quyền riêng tư"]))return ok?"Đúng: tôn trọng riêng tư là không chia sẻ nội dung riêng khi chưa được phép.":"Sai: không nên phát tán nội dung riêng của người khác khi chưa được họ cho phép.";
  if(has(s,["công kích","xúc phạm","phân biệt","lịch sự"]))return ok?"Đúng: giao tiếp văn minh cần tôn trọng và lịch sự.":"Sai: công kích cá nhân hoặc ngôn từ phân biệt có thể gây tổn thương; hãy nêu lí do bình tĩnh.";
  if(has(s,["gián đoạn","mất kết nối","ngắt mạng","sự cố kỹ thuật"]))return ok?"Đúng: giao tiếp trực tuyến phụ thuộc mạng, thiết bị và phần mềm nên có thể gián đoạn.":"Sai: cuộc gọi trực tuyến có thể bị gián đoạn do lỗi mạng hoặc phần mềm.";
  if(has(s,["chatgpt","openai","tạo sinh"]))return ok?"Đúng: ChatGPT là ví dụ AI tạo sinh; AI tạo sinh có thể tạo nhiều dạng nội dung.":"Sai: AI tạo sinh không chỉ định tuyến; nó có thể tạo văn bản, hình ảnh và âm thanh.";
  if(has(s,["ngân hàng","gian lận","tài chính"]))return ok?"Đúng: AI có thể phân tích dữ liệu tài chính để phát hiện giao dịch bất thường.":"Sai: AI có thể hỗ trợ phân tích dữ liệu tài chính và phát hiện gian lận.";
  if(s.indexOf("chỉ có ứng dụng trong y học")>=0)return ok?"Đúng: AI có ứng dụng ở nhiều lĩnh vực ngoài y học.":"Sai: AI còn được dùng trong giao thông, tài chính, sản xuất, giáo dục và nông nghiệp.";
  if(ok)return "Đúng: phát biểu phù hợp với kiến thức bài học về "+topic+".";
  return "Sai: phát biểu chưa phù hợp với kiến thức bài học về "+topic+". Hãy đối chiếu lại định nghĩa và chức năng của khái niệm trong câu.";
 }
 bank.topics.forEach(function(topic,t){topic.questions.forEach(function(q){if(!q[3])q[3]=mc(t,q);});});
 (bank.trueFalse||[]).forEach(function(groups){groups.forEach(function(group){group.items.forEach(function(item){if(!item[2])item[2]=tf(group,item);});});});
})();
