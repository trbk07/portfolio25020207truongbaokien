const projects = [
  {
    id: "01",
    category: ["digital"],
    cover: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80",
    tags: ["Kỹ năng số", "File Explorer"],
    title: "Thao tác cơ bản với tệp tin và thư mục",
    intro: "Quản lý vòng đời tệp tin khoa học",
    objectives: [
      "Tạo được cấu trúc thư mục học tập rõ ràng, có phân cấp.",
      "Áp dụng quy tắc đặt tên nhất quán cho tệp và thư mục.",
      "Thực hiện thành thạo các thao tác dữ liệu cơ bản trên File Explorer."
    ],
    steps: [
      ["Mở không gian làm việc", "Nhấn Windows + E hoặc mở biểu tượng thư mục trên thanh tác vụ để truy cập File Explorer.", "assets/evidence-pages/bai-1/bai-1-page-01.jpg"],
      ["Chọn ổ đĩa thực hành", "Vào This PC và chọn ổ đĩa không phải ổ hệ thống, ví dụ ổ E:, để tạo khu vực thực hành riêng.", "assets/evidence-pages/bai-1/bai-1-page-02.jpg"],
      ["Tạo và đổi tên tệp", "Tạo tệp văn bản .txt, đổi tên tệp theo nội dung và tạo thư mục con TaiLieu để phân loại dữ liệu.", "assets/evidence-pages/bai-1/bai-1-page-03.jpg"],
      ["Sao chép và di chuyển", "Thực hiện Copy & Paste, Cut & Paste để đưa tệp giữa thư mục gốc và thư mục con bằng chuột phải hoặc phím tắt.", "assets/evidence-pages/bai-1/bai-1-page-04.jpg"],
      ["Xóa và khôi phục", "Thực hành Delete, Shift + Delete và khôi phục dữ liệu từ Recycle Bin để hiểu khác biệt giữa xóa tạm thời và xóa vĩnh viễn.", "assets/evidence-pages/bai-1/bai-1-page-05.jpg"]
    ],
    extras: [
      "Sản phẩm cuối cùng là báo cáo PDF ghi lại thao tác và ảnh minh chứng.",
      "Kỹ năng chính: quản lý dữ liệu cá nhân, đặt tên tệp, tổ chức tài liệu."
    ],
    pdf: "assets/reports/bai-1-thao-tac-tap-tin-thu-muc.pdf",
    drive: "https://drive.google.com/file/d/1Vdt4fZsCso_ELw_1nFdKVW_1O4w3cM8D/view?usp=sharing"
  },
  {
    id: "02",
    category: ["digital", "research"],
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=80",
    tags: ["Nghiên cứu", "AI", "Harvard"],
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    intro: "Tìm đúng nguồn, đánh giá đúng giá trị",
    objectives: [
      "Biết xác định chủ đề nghiên cứu liên quan đến ngành học.",
      "Sử dụng công cụ học thuật và toán tử tìm kiếm để thu thập tài liệu.",
      "Đánh giá độ tin cậy của nguồn theo tác giả, đơn vị xuất bản, phương pháp và tính cập nhật."
    ],
    steps: [
      ["Chọn chủ đề", "Xác định chủ đề nghiên cứu liên quan đến Công nghệ thông tin hoặc AI để giới hạn phạm vi tìm kiếm.", "assets/evidence-pages/bai-2/bai-2-page-01.jpg"],
      ["Tìm kiếm nâng cao", "Sử dụng Google Scholar, thư viện và toán tử như site:, filetype: để lọc tài liệu phù hợp.", "assets/evidence-pages/bai-2/bai-2-page-02.jpg"],
      ["Đánh giá nguồn tin", "Phân tích tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và thời điểm công bố.", "assets/evidence-pages/bai-2/bai-2-page-03.jpg"],
      ["Tổng hợp dữ liệu", "Lập bảng so sánh, xếp hạng độ tin cậy của các nguồn và chọn thông tin có giá trị.", "assets/evidence-pages/bai-2/bai-2-page-05.jpg"],
      ["Hoàn thiện báo cáo", "Viết báo cáo kèm danh mục tài liệu tham khảo theo định dạng Harvard.", "assets/evidence-pages/bai-2/bai-2-page-08.jpg"]
    ],
    extras: [
      "Tìm kiếm thông thường nhanh và đa dạng nhưng độ tin cậy không đồng nhất.",
      "Tìm kiếm học thuật ưu tiên bài báo, sách chuyên khảo và tài liệu đã qua phản biện.",
      "Nguồn tốt cần rõ tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật."
    ],
    pdf: "assets/reports/bai-2-khai-thac-du-lieu-thong-tin.pdf",
    drive: "https://drive.google.com/file/d/1wX9LrGu4wFEVTKLjmbMAsbfx4KmB0b_v/view?usp=sharing"
  },
  {
    id: "03",
    category: ["ai"],
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    tags: ["AI", "Prompt", "S.P.I.C.E"],
    title: "Viết Prompt hiệu quả cho tác vụ học tập",
    intro: "Biến yêu cầu thành kết quả chất lượng",
    objectives: [
      "Thiết kế prompt rõ vai trò, bối cảnh, yêu cầu và định dạng đầu ra.",
      "So sánh chất lượng giữa prompt cơ bản, cải tiến và nâng cao.",
      "Đúc kết nguyên tắc viết prompt hiệu quả cho học tập."
    ],
    steps: [
      ["Chọn tác vụ học tập", "Chọn 3 tác vụ phổ biến như tóm tắt tài liệu, giải thích khái niệm phức tạp hoặc tạo bộ câu hỏi ôn tập.", "assets/evidence-pages/bai-3/bai-3-page-01.jpg"],
      ["Thiết kế 3 phiên bản prompt", "Với mỗi tác vụ, viết prompt ở nhiều mức: cơ bản, cải tiến và nâng cao.", "assets/evidence-pages/bai-3/bai-3-page-02.jpg"],
      ["Thử nghiệm bằng AI", "Chạy các prompt trên ChatGPT hoặc Gemini để thu kết quả đầu ra.", "assets/evidence-pages/bai-3/bai-3-page-04.jpg"],
      ["So sánh kết quả", "Đánh giá sự khác nhau về độ chính xác, cấu trúc, tính dễ hiểu và mức độ phù hợp.", "assets/evidence-pages/bai-3/bai-3-page-06.jpg"],
      ["Tổng hợp mẹo sử dụng", "Rút ra các mẹo như yêu cầu AI giải thích bằng ví dụ đời sống hoặc suy nghĩ từng bước khi xử lý bài kỹ thuật.", "assets/evidence-pages/bai-3/bai-3-page-08.jpg"]
    ],
    extras: [
      "Khi giải thích khái niệm khó như mômen quán tính, nên yêu cầu AI dùng phép ẩn dụ và ví dụ thực tế.",
      "Với bài toán kỹ thuật, cần yêu cầu AI giải thích công thức và lý do từng bước để dễ kiểm tra logic."
    ],
    pdf: "assets/reports/bai-3-viet-prompt-hieu-qua.pdf",
    drive: "https://drive.google.com/file/d/1grF3KZdi_4hlChetnrFcDsLewiByIbT-/view?usp=sharing"
  },
  {
    id: "04",
    category: ["digital", "collab"],
    cover: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    tags: ["Cộng tác", "Trello", "Discord"],
    title: "Sử dụng công cụ hợp tác trực tuyến",
    intro: "Cộng tác hiệu quả trong môi trường số",
    objectives: [
      "Thành thạo công cụ hợp tác trực tuyến để quản lý dự án nhóm.",
      "Biết lập kế hoạch, phân công nhiệm vụ và lưu trữ tài liệu chung.",
      "Đánh giá ưu nhược điểm của từng công cụ trong quy trình làm việc nhóm."
    ],
    steps: [
      ["Xác định bối cảnh dự án", "Nhóm thực hiện bài thuyết trình về AI trong giáo dục, gồm khái niệm, lợi ích, hạn chế và ví dụ ứng dụng.", "assets/evidence-pages/bai-4/bai-4-page-01.jpg"],
      ["Chọn bộ công cụ", "Kết hợp công cụ quản lý nhiệm vụ, soạn thảo tài liệu, lưu trữ và giao tiếp như Trello, Google Docs, Google Drive, Zalo.", "assets/evidence-pages/bai-4/bai-4-page-02.jpg"],
      ["Trao đổi công việc", "Dùng Zalo để nhắn tin nhanh, gửi link tài liệu và thống nhất phần việc với thành viên hỗ trợ.", "assets/evidence-pages/bai-4/bai-4-page-03.jpg"],
      ["Quản lý tài liệu", "Tổ chức thư mục, tài liệu thuyết trình và các minh chứng làm việc nhóm trong không gian lưu trữ chung.", "assets/evidence-pages/bai-4/bai-4-page-04.jpg"],
      ["Đánh giá hiệu quả", "Rút ra vai trò riêng của từng công cụ: quản lý nhiệm vụ, soạn thảo cộng tác, lưu trữ và trao đổi nhanh.", "assets/evidence-pages/bai-4/bai-4-page-05.jpg"]
    ],
    extras: [
      "Bài tập giúp rèn kỹ năng quản lý công việc cá nhân, sắp xếp tài liệu và phối hợp trong môi trường số.",
      "Kết luận chính: công cụ hợp tác trực tuyến giúp quá trình làm bài nhóm minh bạch, linh hoạt và dễ theo dõi hơn."
    ],
    pdf: "assets/reports/bai-4-cong-cu-hop-tac-truc-tuyen.pdf",
    drive: "https://drive.google.com/file/d/1p6ArE8Mf2xS1QKgfS3fCGeY7NLkKdsnL/view?usp=sharing"
  },
  {
    id: "05",
    category: ["ai"],
    cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
    tags: ["AI", "Thiết kế", "Infographic"],
    title: "AI tạo sinh và thiết kế Infographic",
    intro: "Đồng sáng tạo cùng AI",
    objectives: [
      "Thành thạo việc dùng công cụ AI tạo sinh trong sáng tạo nội dung.",
      "Kết hợp ít nhất 3 nhóm công cụ: văn bản, hình ảnh, thiết kế hoặc dựng video.",
      "Phát triển kỹ năng sáng tạo và phân tích khi làm việc với AI."
    ],
    steps: [
      ["Chọn dự án sáng tạo", "Xác định loại sản phẩm như bài thuyết trình, infographic, bài viết chuyên sâu hoặc video ngắn.", "assets/evidence-pages/bai-5/bai-5-page-01.jpg"],
      ["Chọn bộ công cụ AI", "Kết hợp ChatGPT/Gemini cho văn bản, công cụ tạo ảnh như DALL-E/Midjourney và công cụ thiết kế như Canva AI/CapCut.", "assets/evidence-pages/bai-5/bai-5-page-02.jpg"],
      ["Tạo và chỉnh sửa nội dung", "Dùng AI để lấy nguyên liệu ban đầu, sau đó chọn lọc, chỉnh sửa hình ảnh, câu chữ và bố cục.", "assets/evidence-pages/bai-5/bai-5-page-03.jpg"],
      ["Phân tích tư duy sử dụng AI", "Đánh giá vai trò của con người trong việc kiểm soát chất lượng, tránh phụ thuộc và giữ dấu ấn cá nhân.", "assets/evidence-pages/bai-5/bai-5-page-05.jpg"],
      ["Hoàn thiện báo cáo", "Tổng hợp quy trình, sản phẩm cuối cùng và bài học rút ra về Prompt Engineering.", "assets/evidence-pages/bai-5/bai-5-page-06.jpg"]
    ],
    extras: [
      "Quy trình chuyển từ làm việc tuần tự sang làm việc song song: AI cung cấp nguyên liệu, con người biên tập và quyết định chất lượng.",
      "Bài học lớn: AI không thay thế con người, nhưng người biết dùng AI sẽ có lợi thế hơn người không biết dùng AI."
    ],
    pdf: "assets/reports/bai-5-ai-tao-sinh-sang-tao-noi-dung.pdf",
    drive: "https://drive.google.com/file/d/1tIFu4F3EBLRfggovKaY2DCp90pDJNKZw/view?usp=sharing"
  },
  {
    id: "06",
    category: ["ai", "ethics"],
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
    tags: ["AI", "Đạo đức", "5K"],
    title: "Sử dụng AI có trách nhiệm",
    intro: "Công nghệ là công cụ, đạo đức là la bàn",
    objectives: [
      "Nhận thức ranh giới giữa AI hỗ trợ hợp lý và gian lận học thuật.",
      "Thiết lập bộ nguyên tắc cá nhân khi dùng AI.",
      "Thực hành công bố, ghi nhận sự hỗ trợ của AI và kiểm chứng thông tin."
    ],
    steps: [
      ["Nghiên cứu chính sách", "Tìm hiểu quy định của trường đại học và các khuyến nghị về sử dụng AI trong học thuật.", "assets/evidence-pages/bai-6/bai-6-page-01.jpg"],
      ["Phân tích đạo đức", "Xác định ranh giới giữa hỗ trợ và gian lận, xem xét sở hữu trí tuệ, trích dẫn và tác động đến tự học.", "assets/evidence-pages/bai-6/bai-6-page-02.jpg"],
      ["Thực hiện nhiệm vụ với AI", "Chọn một tác vụ cụ thể, ghi lại prompt và kết quả đầu ra tương ứng.", "assets/evidence-pages/bai-6/bai-6-page-03.jpg"],
      ["Đánh giá và chỉnh sửa", "Mô tả cách kiểm tra, chỉnh sửa và tích hợp nội dung AI vào sản phẩm cuối cùng.", "assets/evidence-pages/bai-6/bai-6-page-04.jpg"],
      ["Xây dựng nguyên tắc cá nhân", "Thiết lập 5-7 nguyên tắc sử dụng AI có trách nhiệm, có minh bạch và kiểm chứng.", "assets/infographic-trust-ai.jpg"]
    ],
    extras: [
      "Sản phẩm gồm báo cáo chi tiết và infographic về sử dụng AI có trách nhiệm.",
      "Trọng tâm: đạo đức số, quyền riêng tư, bản quyền, minh bạch và tư duy phản biện."
    ],
    pdf: "assets/reports/bai-6-ai-co-trach-nhiem.pdf",
    drive: "https://drive.google.com/file/d/1THBPqqnQKMayol4EjE1XBx9M0TVcq3UH/view?usp=sharing",
    extraDrive: "https://drive.google.com/file/d/1QoEp5YY3QpTENl9dQYpG-PQKqngEnsU_/view?usp=sharing"
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const projectDocuments = {
  "01": [
    {
      title: "Nền tảng của một không gian số ngăn nắp",
      intro: "PDF bài 1 trình bày toàn bộ thao tác với tệp tin và thư mục trên Windows, từ mở File Explorer đến khôi phục dữ liệu trong Recycle Bin.",
      bullets: [
        "Mở File Explorer và chọn ổ đĩa thực hành.",
        "Tạo thư mục ThucHanh_TruongBaoKien và tệp GhiChu.txt.",
        "Đổi tên, tạo thư mục con, sao chép, di chuyển, xóa và khôi phục tệp."
      ],
      cards: [
        ["Mục tiêu", "Làm chủ thao tác cơ bản với tệp tin, thư mục và hiểu sự khác biệt giữa Copy, Cut, Delete, Shift + Delete."],
        ["Kỹ năng thực hành", "Create, Rename, Copy, Move, Delete, Restore bằng File Explorer."],
        ["Sản phẩm cuối", "Cấu trúc thư mục thực hành kèm bộ ảnh minh chứng các thao tác."]
      ]
    },
    {
      title: "Các bước thực hiện chi tiết",
      intro: "Các bước trong PDF được gom thành một quy trình có thể theo dõi nhanh ngay trong portfolio.",
      steps: [
        {
          title: "Mở File Explorer",
          text: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ để mở không gian quản lý tệp.",
          image: "assets/evidence-pages/bai-1/bai-1-page-01.jpg"
        },
        {
          title: "Truy cập ổ đĩa hoặc thư mục thực hành",
          text: "Ở cột bên trái, nhấp vào This PC, sau đó chọn một ổ đĩa không phải ổ hệ thống, ví dụ ổ E:, để tạo khu vực thực hành riêng.",
          image: "assets/evidence-pages/bai-1/bai-1-page-02.jpg"
        },
        {
          title: "Tạo thư mục và tệp văn bản",
          text: "Nhấp chuột phải vào khoảng trống, chọn New -> Folder, đặt tên ThucHanh_TruongBaoKien; sau đó tạo tệp GhiChu.txt trong thư mục vừa tạo.",
          image: "assets/evidence-pages/bai-1/bai-1-page-03.jpg"
        },
        {
          title: "Đổi tên, sao chép và di chuyển tệp",
          text: "Đổi tên GhiChu.txt thành GhiChuQuanTrong.txt, tạo thư mục con TaiLieu, thực hành Copy & Paste và Cut & Paste để phân biệt sao chép với di chuyển.",
          image: "assets/evidence-pages/bai-1/bai-1-page-04.jpg"
        },
        {
          title: "Xóa và khôi phục dữ liệu",
          text: "Xóa tệp vào Recycle Bin, thực hành Shift + Delete để hiểu xóa vĩnh viễn, sau đó khôi phục dữ liệu từ Thùng rác khi cần.",
          image: "assets/evidence-pages/bai-1/bai-1-page-05.jpg"
        }
      ]
    },
    {
      title: "Sản phẩm và bài học",
      intro: "Bài tập giúp hình thành thói quen đặt tên tệp rõ nghĩa, tổ chức thư mục theo mục đích và tránh mất dữ liệu khi thao tác.",
      bullets: [
        "Không gian lưu trữ rõ ràng giúp tìm tài liệu nhanh hơn.",
        "Hiểu thao tác xóa tạm thời và xóa vĩnh viễn giúp giảm rủi ro mất dữ liệu.",
        "Quy trình nhỏ này là nền tảng cho các dự án số phức tạp hơn."
      ]
    }
  ],
  "02": [
    {
      title: "Giới thiệu chủ đề và phạm vi tìm kiếm",
      intro: "PDF bài 2 chọn chủ đề ứng dụng Deep Learning trong phát hiện sớm ransomware trên môi trường điện toán đám mây.",
      cards: [
        ["Chủ đề", "Ứng dụng Deep Learning để phát hiện ransomware trong Cloud Computing."],
        ["Lý do chọn", "Ransomware biến đổi nhanh, khiến phương pháp phát hiện dựa trên chữ ký truyền thống kém hiệu quả."],
        ["Phạm vi", "Tài liệu giai đoạn 2021-2026, ưu tiên tiếng Anh, nguồn học thuật và báo cáo an ninh mạng uy tín."]
      ]
    },
    {
      title: "Phương pháp tìm kiếm và thu thập tài liệu",
      intro: "Quá trình tìm kiếm kết hợp cơ sở dữ liệu học thuật, tạp chí chuyên ngành, sách, nguồn mở và báo cáo ngành.",
      steps: [
        {
          title: "Xác định phạm vi tìm kiếm",
          text: "Quá trình tìm kiếm giới hạn trong giai đoạn 2021-2026, ưu tiên tài liệu tiếng Anh và các nguồn chuyên ngành CNTT như IEEE Xplore, ACM Digital Library và Google Scholar.",
          image: "assets/evidence-pages/bai-2/bai-2-page-01.jpg"
        },
        {
          title: "Chọn nguồn thông tin",
          text: "Báo cáo sử dụng nhiều loại nguồn: cơ sở dữ liệu học thuật, tạp chí khoa học chuyên ngành, sách chuyên khảo, nguồn mở uy tín và báo cáo an ninh mạng từ các tổ chức bảo mật.",
          image: "assets/evidence-pages/bai-2/bai-2-page-02.jpg"
        },
        {
          title: "Áp dụng từ khóa và toán tử tìm kiếm",
          text: "Các từ khóa chính gồm deep learning for ransomware detection, cloud computing security, AI malware analysis và ransomware zero-day; quá trình thu thập dùng toán tử Boolean để tối ưu kết quả.",
          image: "assets/evidence-pages/bai-2/bai-2-page-03.jpg"
        }
      ]
    },
    {
      title: "Đánh giá độ tin cậy của nguồn tài liệu",
      intro: "Các nguồn được đánh giá theo uy tín tác giả, đơn vị xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật.",
      steps: [
        {
          title: "Đánh giá theo tiêu chí học thuật",
          text: "Mỗi tài liệu được xem xét theo tác giả, cơ quan xuất bản, phương pháp nghiên cứu, hệ thống trích dẫn và mức độ cập nhật của dữ liệu.",
          image: "assets/evidence-pages/bai-2/bai-2-page-05.jpg"
        },
        {
          title: "Đối chiếu giữa nguồn học thuật và báo cáo ngành",
          text: "Các bài báo khoa học được dùng để hiểu nền tảng phương pháp, còn báo cáo ngành giúp bổ sung bối cảnh thực tiễn về ransomware và bảo mật Cloud.",
          image: "assets/evidence-pages/bai-2/bai-2-page-06.jpg"
        }
      ]
    },
    {
      title: "Danh mục tài liệu tham khảo",
      intro: "PDF hoàn thiện danh mục tham khảo theo phong cách học thuật, gồm sách, bài báo, báo cáo an ninh mạng và phân tích kỹ thuật.",
      bullets: [
        "Các nguồn trọng tâm xoay quanh machine learning, deep learning và cybersecurity.",
        "Bổ sung báo cáo từ CrowdStrike, Microsoft Threat Intelligence và Palo Alto Networks.",
        "Kết quả cho thấy tìm kiếm học thuật cần vừa rộng nguồn vừa có tiêu chí lọc rõ."
      ],
      steps: [
        {
          title: "Hoàn thiện danh mục tham khảo",
          text: "Danh mục cuối cùng gồm sách, bài báo khoa học và báo cáo chuyên ngành, được sắp xếp để có thể kiểm tra lại nguồn thông tin khi cần.",
          image: "assets/evidence-pages/bai-2/bai-2-page-07.jpg"
        }
      ]
    }
  ],
  "03": [
    {
      title: "Phần 1: Lựa chọn và phân tích tác vụ học tập",
      intro: "Bài 3 ứng dụng AI vào môn Vật lý đại cương 1, chương Vật rắn quay, nơi sinh viên năm nhất thường gặp khó vì nhiều công thức và tư duy không gian.",
      cards: [
        ["Tác vụ 1", "Tóm tắt tài liệu học thuật về động học quay."],
        ["Tác vụ 2", "Giải thích khái niệm phức tạp: mômen quán tính."],
        ["Tác vụ 3", "Tạo bộ câu hỏi ôn tập về động năng quay và định lý trục song song."]
      ],
      steps: [
        {
          title: "Chọn bối cảnh học tập",
          text: "Bài tập ứng dụng AI vào môn Vật lý đại cương 1, chương Vật rắn quay; mục tiêu là chuyển hóa lý thuyết nhiều công thức thành kiến thức trực quan và dễ ứng dụng.",
          image: "assets/evidence-pages/bai-3/bai-3-page-01.jpg"
        }
      ]
    },
    {
      title: "Phần 2: Xây dựng, thử nghiệm và so sánh prompt",
      intro: "Mỗi tác vụ được thử bằng nhiều phiên bản prompt: cơ bản, cải tiến và nâng cao để so sánh chất lượng đầu ra.",
      steps: [
        {
          title: "Tác vụ 1: Tóm tắt tài liệu học thuật",
          text: "Prompt được thiết kế từ mức cơ bản đến nâng cao để yêu cầu AI giữ lại công thức, trình bày các đại lượng dưới dạng bảng và nhấn mạnh quy ước dấu trong chuyển động quay.",
          image: "assets/evidence-pages/bai-3/bai-3-page-02.jpg"
        },
        {
          title: "Tác vụ 2: Giải thích mômen quán tính",
          text: "Prompt nâng cao yêu cầu AI không dùng ngôn ngữ hàn lâm rườm rà, giải thích bản chất mômen quán tính bằng phép ẩn dụ và ví dụ đời sống.",
          image: "assets/evidence-pages/bai-3/bai-3-page-04.jpg"
        },
        {
          title: "Tác vụ 3: Tạo câu hỏi ôn tập",
          text: "Prompt yêu cầu tạo câu hỏi có tình huống thực tế, cấu trúc rõ ràng gồm đề bài, bốn đáp án, đáp án đúng và giải thích lỗi sai thường gặp.",
          image: "assets/evidence-pages/bai-3/bai-3-page-06.jpg"
        }
      ]
    },
    {
      title: "Phần 3: Phân tích hiệu quả của các phiên bản prompt",
      intro: "Phần phân tích chỉ ra vì sao role-prompting, context, constraint, formatting và chain-of-thought giúp đầu ra dễ kiểm tra hơn.",
      cards: [
        ["Role & Context", "Đóng vai gia sư hoặc chuyên gia giúp AI chọn giọng giải thích phù hợp."],
        ["Constraint & Formatting", "Ràng buộc độ dài, bảng biểu, công thức và cấu trúc giúp câu trả lời dễ đọc."],
        ["Tư duy từng bước", "Yêu cầu giải thích quá trình giúp phát hiện sai logic tốt hơn."]
      ],
      steps: [
        {
          title: "Rút ra hiệu quả của prompt nâng cao",
          text: "Báo cáo cho thấy role-prompting, context, constraint, formatting và yêu cầu giải thích từng bước giúp đầu ra có cấu trúc hơn, dễ kiểm tra hơn và ít hời hợt hơn.",
          image: "assets/evidence-pages/bai-3/bai-3-page-07.jpg"
        }
      ]
    },
    {
      title: "Phần 4: Nguyên tắc và mẹo viết prompt",
      intro: "Kết luận của bài là prompt tốt không thay người học suy nghĩ, mà giúp người học đặt câu hỏi rõ hơn và tự kiểm chứng tốt hơn.",
      bullets: [
        "Nêu rõ vai trò, bối cảnh, mục tiêu và định dạng đầu ra.",
        "Với khái niệm khó, yêu cầu ví dụ đời sống hoặc phép ẩn dụ.",
        "Với bài toán kỹ thuật, cần kiểm tra lại công thức và lập luận của AI."
      ],
      steps: [
        {
          title: "Tổng hợp nguyên tắc viết prompt",
          text: "Khi dùng AI để giải thích khái niệm hoặc tạo bài tập, cần yêu cầu AI trình bày rõ ràng, có ví dụ, có lời giải thích và luôn kiểm tra lại phần tính toán.",
          image: "assets/evidence-pages/bai-3/bai-3-page-08.jpg"
        }
      ]
    }
  ],
  "04": [
    {
      title: "Bối cảnh dự án và cách tổ chức làm việc nhóm",
      intro: "Nhóm thực hiện bài thuyết trình về AI trong giáo dục, phân chia công việc theo nội dung và phối hợp bằng công cụ trực tuyến.",
      cards: [
        ["Chủ đề nhóm", "AI trong giáo dục: khái niệm, lợi ích, hạn chế và ví dụ ứng dụng."],
        ["Vai trò cá nhân", "Tìm tài liệu, viết nội dung về lợi ích của AI trong giáo dục và chỉnh sửa nội dung chung."],
        ["Mục tiêu tổ chức", "Giảm làm việc rời rạc, giúp từng thành viên theo dõi phần việc của mình."]
      ],
      steps: [
        {
          title: "Xác định bối cảnh dự án nhóm",
          text: "Nhóm thực hiện bài thuyết trình chủ đề AI trong giáo dục, phân chia công việc theo từng nội dung và dùng công cụ trực tuyến để phối hợp đúng thời hạn.",
          image: "assets/evidence-pages/bai-4/bai-4-page-01.jpg"
        }
      ]
    },
    {
      title: "Quá trình sử dụng công cụ hợp tác trực tuyến",
      intro: "PDF trình bày lần lượt Trello, Google Docs, Google Drive và Zalo trong quy trình nhóm.",
      steps: [
        {
          title: "Trello: phân công và theo dõi tiến độ",
          text: "Trello được dùng để chia công việc, gắn deadline, mô tả ngắn và checklist cho các thẻ nhiệm vụ, giúp từng thành viên biết rõ việc cần làm.",
          image: "assets/evidence-pages/bai-4/bai-4-page-02.jpg"
        },
        {
          title: "Google Docs và Zalo: soạn thảo, trao đổi",
          text: "Google Docs hỗ trợ cùng chỉnh sửa nội dung, theo dõi lịch sử đóng góp; Zalo được dùng để trao đổi nhanh, gửi link tài liệu và thống nhất ý tưởng.",
          image: "assets/evidence-pages/bai-4/bai-4-page-03.jpg"
        },
        {
          title: "Google Drive: lưu trữ và sắp xếp tài liệu",
          text: "Drive được dùng để tạo thư mục chính và các thư mục nhỏ như tài liệu tham khảo, nội dung, hình ảnh minh họa, giúp tránh thất lạc file.",
          image: "assets/evidence-pages/bai-4/bai-4-page-04.jpg"
        }
      ]
    },
    {
      title: "Đóng góp cá nhân và đánh giá hiệu quả",
      intro: "Cá nhân tôi tham gia tìm tài liệu, viết nội dung, cập nhật tiến độ và phối hợp chỉnh sửa để sản phẩm thống nhất hơn.",
      steps: [
        {
          title: "Đánh giá hiệu quả công cụ",
          text: "Các công cụ giúp nhóm hạn chế làm việc rời rạc, dễ kiểm soát tiến độ, giảm việc gửi nhiều file qua lại và giúp tài liệu được lưu trữ có cấu trúc.",
          image: "assets/evidence-pages/bai-4/bai-4-page-05.jpg"
        }
      ]
    },
    {
      title: "Khó khăn và kết luận",
      intro: "Khó khăn chính là đồng bộ tiến độ và tránh trôi thông tin. Cách giải quyết là phân công rõ, đặt deadline và lưu tài liệu tại một nơi chung.",
      bullets: [
        "Cộng tác hiệu quả không chỉ phụ thuộc vào công cụ mà còn phụ thuộc vào quy ước nhóm.",
        "Việc chia vai trò rõ ràng giúp giảm chồng chéo.",
        "Các công cụ trực tuyến làm quá trình nhóm linh hoạt và dễ kiểm tra hơn."
      ]
    }
  ],
  "05": [
    {
      title: "I. Giới thiệu dự án",
      intro: "Bài 5 là dự án sáng tạo nội dung số với AI về chủ đề tác động của AI đối với các ngành nghề trong tương lai.",
      cards: [
        ["Tên dự án", "Tác động của AI đối với các ngành nghề trong tương lai."],
        ["Lý do chọn", "AI đang tái định hình thị trường lao động, tạo cả cơ hội và thách thức cho sinh viên."],
        ["Mục tiêu", "Tạo infographic súc tích, dễ hiểu về sự cộng tác giữa con người và máy."]
      ],
      steps: [
        {
          title: "Giới thiệu dự án sáng tạo nội dung số",
          text: "Báo cáo chọn chủ đề tác động của AI đối với các ngành nghề trong tương lai, nhằm tạo infographic giúp sinh viên và người đi làm có cái nhìn tổng quan về sự cộng tác giữa người và máy.",
          image: "assets/evidence-pages/bai-5/bai-5-page-01.jpg"
        }
      ]
    },
    {
      title: "II. Nhật ký sử dụng AI và quá trình thực hiện",
      intro: "Quy trình dùng Gemini để lên ý tưởng, DALL-E 3 để tạo hình minh họa và Canva để thiết kế hoàn thiện.",
      steps: [
        {
          title: "Gemini: lên ý tưởng và kịch bản",
          text: "Tôi dùng Gemini để xây dựng cấu trúc nội dung, chuyển prompt ban đầu thành prompt chuyên sâu yêu cầu đóng vai chuyên gia phân tích xu hướng công nghệ.",
          image: "assets/evidence-pages/bai-5/bai-5-page-02.jpg"
        },
        {
          title: "DALL-E 3: tạo hình ảnh minh họa",
          text: "Báo cáo thử nhiều câu lệnh hình ảnh; prompt nâng cao mô tả văn phòng tương lai, ánh sáng điện ảnh, 3D render và con người làm việc cùng robot.",
          image: "assets/evidence-pages/bai-5/bai-5-page-03.jpg"
        },
        {
          title: "Canva: thiết kế và hoàn thiện",
          text: "Sau khi có nội dung và hình ảnh, tôi dùng Canva để bố trí infographic, tinh chỉnh màu sắc, chữ và các khối thông tin để sản phẩm dễ đọc hơn.",
          image: "assets/evidence-pages/bai-5/bai-5-page-04.jpg"
        }
      ]
    },
    {
      title: "III. Vai trò và tư duy phản biện",
      intro: "PDF phân tích rõ AI hỗ trợ nhanh ở giai đoạn phác thảo, nhưng con người vẫn phải kiểm chứng, biên tập và chịu trách nhiệm.",
      steps: [
        {
          title: "Phân tích vai trò của AI",
          text: "AI hỗ trợ nhanh trong việc tạo ý tưởng, dàn ý, hình minh họa và gợi ý bố cục, nhưng người thực hiện vẫn phải kiểm chứng, biên tập và chịu trách nhiệm về sản phẩm cuối.",
          image: "assets/evidence-pages/bai-5/bai-5-page-05.jpg"
        }
      ]
    },
    {
      title: "IV. Kết luận",
      intro: "Sản phẩm cuối cho thấy AI phù hợp nhất khi đóng vai trò cộng sự tạo nguyên liệu, còn chất lượng phụ thuộc vào lựa chọn biên tập của người học.",
      bullets: [
        "AI tăng tốc quá trình sáng tạo nội dung số.",
        "Prompt càng cụ thể, đầu ra càng gần mục tiêu.",
        "Sản phẩm tốt cần vòng lặp: tạo, chọn lọc, chỉnh sửa, kiểm chứng."
      ],
      steps: [
        {
          title: "Hoàn thiện và rút kinh nghiệm",
          text: "Kết luận của bài nhấn mạnh AI là công cụ tăng tốc sáng tạo, còn chất lượng cuối phụ thuộc vào lựa chọn, chỉnh sửa và tư duy phản biện của người học.",
          image: "assets/evidence-pages/bai-5/bai-5-page-06.jpg"
        }
      ]
    }
  ],
  "06": [
    {
      title: "I. Nghiên cứu chính sách sử dụng AI",
      intro: "PDF bài 6 tóm tắt chính sách sử dụng AI trong học tập: được hỗ trợ có kiểm soát, phải khai báo, kiểm chứng và bảo vệ dữ liệu.",
      bullets: [
        "AI được dùng để hỗ trợ ý tưởng, lập dàn ý hoặc gỡ lỗi, không dùng để làm hộ.",
        "Cần khai báo rõ công cụ AI và phần nội dung được hỗ trợ.",
        "Sinh viên chịu trách nhiệm về độ chính xác, bảo mật và liêm chính học thuật."
      ],
      steps: [
        {
          title: "Tóm tắt chính sách sử dụng AI",
          text: "Sinh viên được phép dùng AI để hỗ trợ tìm kiếm ý tưởng, lập dàn ý hoặc gỡ lỗi; tuy nhiên nghiêm cấm lạm dụng AI để làm hộ bài tập hoặc sao chép nguyên văn.",
          image: "assets/evidence-pages/bai-6/bai-6-page-01.jpg"
        }
      ]
    },
    {
      title: "II. Thực hiện nhiệm vụ học tập với AI",
      intro: "Bài chọn nhiệm vụ tổng hợp tài liệu và lập dàn ý cho tiểu luận về vai trò của thanh niên trong chuyển đổi số.",
      cards: [
        ["Công cụ", "Gemini được dùng để tìm ý tưởng và gợi ý tài liệu tham khảo."],
        ["Prompt", "Yêu cầu AI đóng vai giảng viên đại học, lập dàn ý logic, có luận điểm rõ ràng."],
        ["Tích hợp", "Đầu ra AI được đánh giá, chỉnh sửa và trích dẫn minh bạch theo chuẩn APA."]
      ],
      steps: [
        {
          title: "Thực hiện nhiệm vụ với Gemini",
          text: "Nhiệm vụ được chọn là tổng hợp tài liệu và lập dàn ý cho bài tiểu luận về vai trò của thanh niên trong công cuộc chuyển đổi số hiện nay.",
          image: "assets/evidence-pages/bai-6/bai-6-page-02.jpg"
        }
      ]
    },
    {
      title: "III. Phân tích vấn đề đạo đức học thuật",
      intro: "Phần này làm rõ ranh giới giữa hỗ trợ hợp lý và gian lận, vấn đề sở hữu trí tuệ, trích dẫn và tác động đến kỹ năng tự học.",
      steps: [
        {
          title: "Xác định ranh giới học thuật",
          text: "Báo cáo phân biệt hỗ trợ hợp lý như brainstorm, gợi ý cấu trúc, sửa lỗi ngôn ngữ với hành vi gian lận như dùng AI viết hộ hoặc giải hộ bài tập.",
          image: "assets/evidence-pages/bai-6/bai-6-page-03.jpg"
        }
      ]
    },
    {
      title: "IV. Bộ nguyên tắc cá nhân T.R.U.S.T.E",
      intro: "Bộ 6 nguyên tắc cá nhân nhấn mạnh minh bạch, trách nhiệm, tư duy đi trước, kiểm chứng, coi AI là công cụ và bảo vệ dữ liệu.",
      cards: [
        ["T - Transparency", "Luôn khai báo công cụ AI đã sử dụng."],
        ["R - Responsibility", "Chịu trách nhiệm 100% với bài làm."],
        ["U - Understanding First", "Tự vạch dàn ý trước khi hỏi AI."],
        ["S - Scrutiny", "Kiểm tra chéo số liệu, trích dẫn và nguồn học thuật."],
        ["T - Tool, Not Author", "AI là công cụ hỗ trợ, không phải tác giả."],
        ["E - Ethics & Privacy", "Không nhập dữ liệu cá nhân, đề thi hoặc thông tin nội bộ."]
      ],
      steps: [
        {
          title: "Xây dựng bộ nguyên tắc cá nhân",
          text: "Bộ T.R.U.S.T.E nhấn mạnh minh bạch, trách nhiệm, tư duy đi trước, kiểm chứng, coi AI là công cụ và bảo vệ dữ liệu riêng tư.",
          image: "assets/infographic-trust-ai.jpg"
        },
        {
          title: "Hoàn thiện báo cáo nguyên tắc",
          text: "Phần cuối báo cáo tổng hợp các nguyên tắc thành cam kết sử dụng AI có trách nhiệm trong học tập và nghiên cứu.",
          image: "assets/evidence-pages/bai-6/bai-6-page-04.jpg"
        }
      ]
    }
  ]
};

const projectOverviews = {
  "01": {
    role: "Người thực hành và hệ thống hóa dữ liệu cá nhân",
    method: "Thực hành trực tiếp trên File Explorer, ghi lại từng thao tác bằng ảnh minh chứng.",
    outcome: "Hoàn thành quy trình quản lý vòng đời tệp tin: tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục.",
    lesson: "Một không gian số gọn gàng giúp giảm nhầm lẫn và là nền tảng cho mọi dự án học tập sau đó."
  },
  "02": {
    role: "Người tìm kiếm, chọn lọc và đánh giá nguồn học thuật",
    method: "Kết hợp Google Scholar, IEEE Xplore, ScienceDirect, ACM, Springer và báo cáo an ninh mạng.",
    outcome: "Xây dựng bộ tài liệu về Deep Learning phát hiện ransomware trong môi trường Cloud.",
    lesson: "Nguồn tốt cần rõ tác giả, uy tín xuất bản, phương pháp nghiên cứu, tính cập nhật và khả năng kiểm chứng chéo."
  },
  "03": {
    role: "Người thiết kế và kiểm thử prompt",
    method: "So sánh prompt cơ bản, cải tiến và nâng cao trên ba tác vụ học Vật lý đại cương.",
    outcome: "Rút ra cách dùng role, context, constraint, formatting và tư duy từng bước để kiểm soát đầu ra AI.",
    lesson: "Prompt tốt giúp học sâu hơn, nhưng người học vẫn phải kiểm tra công thức, logic và kết quả."
  },
  "04": {
    role: "Thành viên nhóm và người phối hợp nội dung",
    method: "Dùng Trello, Google Docs, Google Drive và Zalo để phân công, soạn thảo, lưu trữ và trao đổi.",
    outcome: "Theo dõi tiến độ rõ hơn, hạn chế thất lạc tài liệu và giữ nội dung nhóm thống nhất.",
    lesson: "Cộng tác trực tuyến hiệu quả đến từ quy ước làm việc rõ ràng, không chỉ từ công cụ."
  },
  "05": {
    role: "Người biên tập nội dung và thiết kế sản phẩm số",
    method: "Dùng Gemini để lập dàn ý, DALL-E 3 để thử hình minh họa và Canva để hoàn thiện infographic.",
    outcome: "Hoàn thành sản phẩm truyền thông về tác động của AI đối với ngành nghề tương lai.",
    lesson: "AI tăng tốc giai đoạn phác thảo, còn chất lượng cuối phụ thuộc vào kiểm chứng và biên tập của con người."
  },
  "06": {
    role: "Người xây dựng nguyên tắc sử dụng AI có trách nhiệm",
    method: "Phân tích chính sách, thực nghiệm một nhiệm vụ với AI, đánh giá ranh giới đạo đức và xây bộ nguyên tắc cá nhân.",
    outcome: "Đúc kết bộ nguyên tắc T.R.U.S.T.E về minh bạch, trách nhiệm, kiểm chứng và bảo mật dữ liệu.",
    lesson: "AI hữu ích khi được xem là công cụ hỗ trợ, không phải nơi giao phó tư duy hay trách nhiệm học thuật."
  }
};

function renderProjects() {
  $("#projectList").innerHTML = projects.map((project) => `
    <article class="project-card reveal" data-category="${project.category.join(" ")}" style="--project-cover: url('${project.cover}')">
      <span class="project-ambient" aria-hidden="true"></span>
      <button class="project-open" type="button" data-project="${project.id}" aria-label="Xem chi tiết ${project.title}">
        <img src="${project.cover}" alt="Minh chứng ${project.title}" loading="lazy">
        <span class="project-pill">Dự án / ${project.id}</span>
        <span class="arrow-pill">↗</span>
      </button>
      <div class="project-card-body">
        <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <h3>${project.title}</h3>
        <p>${project.intro}</p>
        <button class="detail-link" type="button" data-project="${project.id}">Xem chi tiết</button>
      </div>
    </article>
  `).join("");

  $$(".project-open, .detail-link").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function toAnchor(text, index) {
  const slug = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 46);

  return `project-section-${slug || "muc"}-${index + 1}`;
}

function renderDocumentCards(cards = []) {
  if (!cards.length) return "";

  return `
    <div class="document-card-grid">
      ${cards.map(([title, text]) => `
        <article>
          <h4>${title}</h4>
          <p>${text}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderDocumentBullets(bullets = []) {
  if (!bullets.length) return "";

  return `
    <ul class="document-bullets">
      ${bullets.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderDocumentSteps(steps = []) {
  if (!steps.length) return "";

  return `
    <ol class="document-steps">
      ${steps.map((item, index) => {
        const step = typeof item === "string"
          ? { title: `Bước ${index + 1}`, text: item }
          : item;

        return `
          <li class="${step.image ? "has-evidence" : ""}">
            <div class="step-copy">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h4>${step.title}</h4>
              <p>${step.text}</p>
            </div>
            ${step.image ? `
              <figure class="step-evidence">
                <img src="${step.image}" alt="Minh chứng ${step.title}" loading="lazy">
                <figcaption>Minh chứng từ báo cáo PDF</figcaption>
              </figure>
            ` : ""}
          </li>
        `;
      }).join("")}
    </ol>
  `;
}

function renderDocumentGallery(gallery = [], title = "Minh chứng") {
  if (!gallery.length) return "";

  return `
    <div class="document-gallery">
      ${gallery.map((src, index) => `
        <figure>
          <img src="${src}" alt="${title} ${index + 1}" loading="lazy">
          <figcaption>${title} / ${String(index + 1).padStart(2, "0")}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function getDrivePreviewUrl(url) {
  const match = url?.match(/\/file\/d\/([^/]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
}

function renderFinalProduct(project) {
  return `
    <div class="embed-stack">
      <figure class="pdf-embed">
        <iframe src="${project.pdf}" title="PDF báo cáo ${project.title}" loading="lazy"></iframe>
      </figure>
    </div>
  `;
}

function renderProjectSection(section, index) {
  const id = toAnchor(section.title, index);

  return `
    <section class="document-section" id="${id}">
      <span class="document-section-index">Mục PDF / ${String(index + 1).padStart(2, "0")}</span>
      <h3>${section.title}</h3>
      ${section.intro ? `<p class="document-intro">${section.intro}</p>` : ""}
      ${renderDocumentCards(section.cards)}
      ${renderDocumentBullets(section.bullets)}
      ${renderDocumentSteps(section.steps)}
      ${renderDocumentGallery(section.gallery, section.title)}
    </section>
  `;
}

function bindDocumentNav() {
  const dialog = $("#projectDialog");
  const nav = $(".document-side-nav");
  const links = $$(".document-side-nav a");
  const targets = [$("#dialogContent .document-cover"), ...$$(".document-section")].filter(Boolean);
  if (!dialog || !nav || !links.length || !targets.length) return;

  const targetTop = (target) => target.getBoundingClientRect().top - dialog.getBoundingClientRect().top + dialog.scrollTop;
  const navOffset = () => window.matchMedia("(max-width: 900px)").matches ? 78 : 26;

  const setActive = () => {
    const activationPoint = dialog.scrollTop + navOffset() + 12;
    const current = [...targets].reverse().find((section) => targetTop(section) <= activationPoint) || targets[0];
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`));
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = $(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      dialog.scrollTo({
        top: Math.max(targetTop(target) - navOffset(), 0),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  });

  dialog.onscroll = setActive;
  setActive();
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  const sections = projectDocuments[project.id] || [];
  const overview = projectOverviews[project.id];
  const navItems = sections.map((section, index) => ({
    id: toAnchor(section.title, index),
    title: section.title
  }));

  $("#dialogContent").innerHTML = `
    <div class="source-document" data-project-theme="${project.id}">
      <nav class="document-side-nav" aria-label="Mục lục dự án">
        <a class="active" href="#document-overview-${project.id}">
          <span>00</span>
          <strong>Tổng quan</strong>
        </a>
        ${navItems.map((item, index) => `
          <a href="#${item.id}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${item.title}</strong>
          </a>
        `).join("")}
      </nav>

      <div class="source-document-body">
        <section class="document-cover" id="document-overview-${project.id}">
          <img src="${project.cover}" alt="Ảnh minh chứng ${project.title}">
          <div>
            <p class="kicker">Dự án / ${project.id}</p>
            <h2>${project.title}</h2>
            <p>${project.intro}</p>
            <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <div class="document-facts">
              <div><span>Số mục lớn</span><strong>${String(sections.length).padStart(2, "0")} mục được trình bày theo cấu trúc PDF.</strong></div>
              <div><span>Sản phẩm</span><strong>Báo cáo PDF, minh chứng hình ảnh và liên kết Drive.</strong></div>
            </div>
            ${overview ? `
              <div class="document-overview-grid">
                <article><span>Vai trò</span><p>${overview.role}</p></article>
                <article><span>Phương pháp</span><p>${overview.method}</p></article>
                <article><span>Kết quả</span><p>${overview.outcome}</p></article>
                <article><span>Bài học</span><p>${overview.lesson}</p></article>
              </div>
            ` : ""}
          </div>
        </section>

        ${sections.map(renderProjectSection).join("")}

        <section class="document-section document-links-section" id="final-product-${project.id}">
          <span class="document-section-index">Sản phẩm</span>
          <h3>Sản phẩm cuối cùng</h3>
          ${renderFinalProduct(project)}
          <div class="project-links">
            <a class="drive-link" href="${project.drive}" target="_blank" rel="noopener">Mở sản phẩm trên Drive</a>
            ${project.extraDrive ? `<a class="drive-link" href="${project.extraDrive}" target="_blank" rel="noopener">Mở infographic Drive</a>` : ""}
            <a class="report-link" href="${project.pdf}" target="_blank" rel="noopener">Mở PDF báo cáo</a>
          </div>
        </section>
      </div>
    </div>
  `;

  $("#projectDialog").showModal();
  $("#projectDialog").scrollTop = 0;
  bindDocumentNav();
}

function closeProjectDialog() {
  $("#projectDialog").close();
}

function initFilters() {
  $$(".filter").forEach((filter) => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.filter;
      $$(".filter").forEach((button) => button.classList.toggle("active", button === filter));
      $$(".project-card").forEach((panel) => {
        const visible = category === "all" || panel.dataset.category.split(" ").includes(category);
        panel.classList.toggle("hidden", !visible);
        panel.classList.remove("filter-enter");
        if (visible) requestAnimationFrame(() => panel.classList.add("filter-enter"));
      });
    });
  });
}

function initDialog() {
  $(".dialog-close").addEventListener("click", closeProjectDialog);
  $("#projectDialog").addEventListener("click", (event) => {
    if (event.target.id === "projectDialog") closeProjectDialog();
  });
  $$("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.openProject));
  });
}

function initTheme() {
  const button = $(".theme-toggle");
  const label = $(".theme-text");
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  const sync = () => {
    const isDark = document.body.classList.contains("dark-theme");
    label.textContent = isDark ? "Light" : "Dark";
    $(".theme-icon").textContent = isDark ? "☾" : "☼";
    button.setAttribute("aria-pressed", String(isDark));
  };

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("portfolio-theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    sync();
  });

  sync();
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  $$(".reveal").forEach((item) => observer.observe(item));
}

function initProgress() {
  const progress = $(".progress");
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initNav() {
  const links = $$(".nav a");
  const sections = $$("main section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-42% 0px -48% 0px" });

  sections.forEach((section) => observer.observe(section));
}

function bindLiquidTargets(scope = document) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const interactiveItems = [
    ...scope.querySelectorAll(".project-card"),
    ...scope.querySelectorAll(".mission-card, .glass-panel, .summary-grid article")
  ];

  interactiveItems.forEach((item) => {
    if (item.dataset.liquidBound === "true") return;
    item.dataset.liquidBound = "true";

    const isProjectCard = item.classList.contains("project-card");
    if (!isProjectCard) item.classList.add("liquid-reactive");

    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      item.style.setProperty("--mx", `${x}%`);
      item.style.setProperty("--my", `${y}%`);

      if (reduceMotion) return;
      const tiltX = ((50 - y) / 50) * 3.2;
      const tiltY = ((x - 50) / 50) * 3.2;
      item.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
      item.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      item.style.setProperty("--mx-num", ((x - 50) / 50).toFixed(3));
      item.style.setProperty("--my-num", ((y - 50) / 50).toFixed(3));
    }, { passive: true });

    item.addEventListener("pointerleave", () => {
      item.style.setProperty("--mx", "50%");
      item.style.setProperty("--my", "50%");
      item.style.setProperty("--tilt-x", "0deg");
      item.style.setProperty("--tilt-y", "0deg");
      item.style.setProperty("--mx-num", "0");
      item.style.setProperty("--my-num", "0");
    });
  });
}

function initLiquidGlass() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  window.addEventListener("pointermove", (event) => {
    if (reduceMotion.matches) return;
    document.body.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.body.style.setProperty("--pointer-y", `${event.clientY}px`);
  }, { passive: true });

  bindLiquidTargets();
}

function initCanvas() {
  const canvas = $("#networkCanvas");
  if (!canvas || getComputedStyle(canvas).display === "none") return;
  const context = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let nodes = [];

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    nodes = Array.from({ length: Math.min(80, Math.floor(window.innerWidth / 16)) }, (_, index) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      color: index % 3 === 0 ? "#25d7ff" : index % 3 === 1 ? "#43ffaf" : "#8d7cff"
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const isLight = !document.body.classList.contains("dark-theme");

    nodes.forEach((node, index) => {
      if (!reduceMotion) {
        node.x += node.vx;
        node.y += node.vy;
      }
      if (node.x < -10) node.x = window.innerWidth + 10;
      if (node.x > window.innerWidth + 10) node.x = -10;
      if (node.y < -10) node.y = window.innerHeight + 10;
      if (node.y > window.innerHeight + 10) node.y = -10;

      context.globalAlpha = isLight ? 0.25 : 0.32;
      context.beginPath();
      context.arc(node.x, node.y, 2, 0, Math.PI * 2);
      context.fillStyle = node.color;
      context.fill();

      for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
        const next = nodes[nextIndex];
        const distance = Math.hypot(node.x - next.x, node.y - next.y);
        if (distance < 118) {
          context.globalAlpha = isLight ? 0.08 : 0.1;
          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(next.x, next.y);
          context.strokeStyle = isLight ? "#0878d8" : "#25d7ff";
          context.stroke();
        }
      }
    });

    context.globalAlpha = 1;
    window.requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
}

function initPrint() {
  $("[data-print-portfolio]")?.addEventListener("click", () => window.print());
}

renderProjects();
initFilters();
initDialog();
initPrint();
initTheme();
initReveal();
initProgress();
initNav();
initLiquidGlass();
initCanvas();
