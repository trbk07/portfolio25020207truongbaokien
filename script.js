const projects = [
  {
    id: "01",
    category: "digital",
    title: "BT1 - Chương 1: Thao tác cơ bản với tệp tin và thư mục",
    intro: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục trên Windows; đồng thời thiết kế cấu trúc thư mục logic để tổ chức tài liệu học tập.",
    objectives: [
      "Tạo được cấu trúc thư mục học tập rõ ràng, có phân cấp.",
      "Áp dụng quy tắc đặt tên nhất quán cho tệp và thư mục.",
      "Thực hiện thành thạo các thao tác dữ liệu cơ bản trên File Explorer."
    ],
    steps: [
      ["Mở không gian làm việc", "Nhấn Windows + E hoặc mở biểu tượng thư mục trên thanh tác vụ để truy cập File Explorer."],
      ["Chọn ổ đĩa thực hành", "Vào This PC và chọn ổ đĩa không phải ổ hệ thống, ví dụ ổ E:, để tạo khu vực thực hành riêng."],
      ["Tạo và đổi tên tệp", "Tạo tệp văn bản .txt, đổi tên tệp theo nội dung và tạo thư mục con TaiLieu để phân loại dữ liệu."],
      ["Sao chép và di chuyển", "Thực hiện Copy & Paste, Cut & Paste để đưa tệp giữa thư mục gốc và thư mục con bằng chuột phải hoặc phím tắt."],
      ["Xóa và khôi phục", "Thực hành Delete, Shift + Delete và khôi phục dữ liệu từ Recycle Bin để hiểu khác biệt giữa xóa tạm thời và xóa vĩnh viễn."]
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
    category: "digital",
    title: "BT2 - Chương 2: Tìm kiếm và đánh giá thông tin học thuật",
    intro: "Phát triển kỹ năng tìm kiếm nâng cao và tư duy đánh giá nguồn tin học thuật từ các nguồn đáng tin cậy.",
    objectives: [
      "Biết xác định chủ đề nghiên cứu liên quan đến ngành học.",
      "Sử dụng công cụ học thuật và toán tử tìm kiếm để thu thập tài liệu.",
      "Đánh giá độ tin cậy của nguồn theo tác giả, đơn vị xuất bản, phương pháp và tính cập nhật."
    ],
    steps: [
      ["Chọn chủ đề", "Xác định chủ đề nghiên cứu liên quan đến Công nghệ thông tin hoặc AI để giới hạn phạm vi tìm kiếm."],
      ["Tìm kiếm nâng cao", "Sử dụng Google Scholar, thư viện và toán tử như site:, filetype: để lọc tài liệu phù hợp."],
      ["Đánh giá nguồn tin", "Phân tích tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và thời điểm công bố."],
      ["Tổng hợp dữ liệu", "Lập bảng so sánh, xếp hạng độ tin cậy của các nguồn và chọn thông tin có giá trị."],
      ["Hoàn thiện báo cáo", "Viết báo cáo kèm danh mục tài liệu tham khảo theo định dạng Harvard."]
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
    category: "ai",
    title: "BT2 - Chương 3: Tổng quan về Trí tuệ nhân tạo và Prompt hiệu quả",
    intro: "Tập trung vào kỹ năng viết prompt để tận dụng mô hình ngôn ngữ lớn trong học tập, bao gồm Role Prompting, Chain-of-Thought và Few-shot examples.",
    objectives: [
      "Thiết kế prompt rõ vai trò, bối cảnh, yêu cầu và định dạng đầu ra.",
      "So sánh chất lượng giữa prompt cơ bản, cải tiến và nâng cao.",
      "Đúc kết nguyên tắc viết prompt hiệu quả cho học tập."
    ],
    steps: [
      ["Chọn tác vụ học tập", "Chọn 3 tác vụ phổ biến như tóm tắt tài liệu, giải thích khái niệm phức tạp hoặc tạo bộ câu hỏi ôn tập."],
      ["Thiết kế 3 phiên bản prompt", "Với mỗi tác vụ, viết prompt ở nhiều mức: cơ bản, cải tiến và nâng cao."],
      ["Thử nghiệm bằng AI", "Chạy các prompt trên ChatGPT hoặc Gemini để thu kết quả đầu ra."],
      ["So sánh kết quả", "Đánh giá sự khác nhau về độ chính xác, cấu trúc, tính dễ hiểu và mức độ phù hợp."],
      ["Tổng hợp mẹo sử dụng", "Rút ra các mẹo như yêu cầu AI giải thích bằng ví dụ đời sống hoặc suy nghĩ từng bước khi xử lý bài kỹ thuật."]
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
    category: "collab",
    title: "BT3 - Chương 4: Giao tiếp và hợp tác trong môi trường số",
    intro: "Thực hành quản lý dự án nhóm trực tuyến qua bộ công cụ cộng tác, với bối cảnh bài thuyết trình chủ đề AI trong giáo dục.",
    objectives: [
      "Thành thạo công cụ hợp tác trực tuyến để quản lý dự án nhóm.",
      "Biết lập kế hoạch, phân công nhiệm vụ và lưu trữ tài liệu chung.",
      "Đánh giá ưu nhược điểm của từng công cụ trong quy trình làm việc nhóm."
    ],
    steps: [
      ["Xác định bối cảnh dự án", "Nhóm thực hiện bài thuyết trình về AI trong giáo dục, gồm khái niệm, lợi ích, hạn chế và ví dụ ứng dụng."],
      ["Chọn bộ công cụ", "Kết hợp công cụ quản lý nhiệm vụ, soạn thảo tài liệu, lưu trữ và giao tiếp như Trello, Google Docs, Google Drive, Zalo."],
      ["Trao đổi công việc", "Dùng Zalo để nhắn tin nhanh, gửi link tài liệu và thống nhất phần việc với thành viên hỗ trợ."],
      ["Quản lý tài liệu", "Tổ chức thư mục, tài liệu thuyết trình và các minh chứng làm việc nhóm trong không gian lưu trữ chung."],
      ["Đánh giá hiệu quả", "Rút ra vai trò riêng của từng công cụ: quản lý nhiệm vụ, soạn thảo cộng tác, lưu trữ và trao đổi nhanh."]
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
    category: "ai",
    title: "BT2 - Chương 5: Sáng tạo nội dung số",
    intro: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung số, kết hợp công cụ tạo văn bản, tạo hình ảnh và hỗ trợ thiết kế.",
    objectives: [
      "Thành thạo việc dùng công cụ AI tạo sinh trong sáng tạo nội dung.",
      "Kết hợp ít nhất 3 nhóm công cụ: văn bản, hình ảnh, thiết kế hoặc dựng video.",
      "Phát triển kỹ năng sáng tạo và phân tích khi làm việc với AI."
    ],
    steps: [
      ["Chọn dự án sáng tạo", "Xác định loại sản phẩm như bài thuyết trình, infographic, bài viết chuyên sâu hoặc video ngắn."],
      ["Chọn bộ công cụ AI", "Kết hợp ChatGPT/Gemini cho văn bản, công cụ tạo ảnh như DALL-E/Midjourney và công cụ thiết kế như Canva AI/CapCut."],
      ["Tạo và chỉnh sửa nội dung", "Dùng AI để lấy nguyên liệu ban đầu, sau đó chọn lọc, chỉnh sửa hình ảnh, câu chữ và bố cục."],
      ["Phân tích tư duy sử dụng AI", "Đánh giá vai trò của con người trong việc kiểm soát chất lượng, tránh phụ thuộc và giữ dấu ấn cá nhân."],
      ["Hoàn thiện báo cáo", "Tổng hợp quy trình, sản phẩm cuối cùng và bài học rút ra về Prompt Engineering."]
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
    category: "ethics",
    title: "BT4 - Chương 6: An toàn và liêm chính học thuật trong môi trường số",
    intro: "Xây dựng kỹ năng sử dụng AI có trách nhiệm, đạo đức và minh bạch trong học tập, nghiên cứu.",
    objectives: [
      "Nhận thức ranh giới giữa AI hỗ trợ hợp lý và gian lận học thuật.",
      "Thiết lập bộ nguyên tắc cá nhân khi dùng AI.",
      "Thực hành công bố, ghi nhận sự hỗ trợ của AI và kiểm chứng thông tin."
    ],
    steps: [
      ["Nghiên cứu chính sách", "Tìm hiểu quy định của trường đại học và các khuyến nghị về sử dụng AI trong học thuật."],
      ["Phân tích đạo đức", "Xác định ranh giới giữa hỗ trợ và gian lận, xem xét sở hữu trí tuệ, trích dẫn và tác động đến tự học."],
      ["Thực hiện nhiệm vụ với AI", "Chọn một tác vụ cụ thể, ghi lại prompt và kết quả đầu ra tương ứng."],
      ["Đánh giá và chỉnh sửa", "Mô tả cách kiểm tra, chỉnh sửa và tích hợp nội dung AI vào sản phẩm cuối cùng."],
      ["Xây dựng nguyên tắc cá nhân", "Thiết lập 5-7 nguyên tắc sử dụng AI có trách nhiệm, có minh bạch và kiểm chứng."]
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

function reportUrl(path) {
  return new URL(path, window.location.href).href;
}

function renderProjects() {
  $("#projectList").innerHTML = projects.map((project) => `
    <article class="project-panel reveal" data-category="${project.category}">
      <div class="project-head">
        <div class="project-number">${project.id}</div>
        <div>
          <h3>${project.title}</h3>
          <p class="project-intro">${project.intro}</p>
        </div>
      </div>
      <div class="project-body">
        <div>
          <p class="kicker">Mục tiêu</p>
          <ul class="objective-list">
            ${project.objectives.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div>
          <p class="kicker">Các bước thực hiện</p>
          <div class="workflow">
            ${project.steps.map((step, index) => `
              <div class="step-card">
                <span class="step-badge">${index + 1}</span>
                <div>
                  <h4>${step[0]}</h4>
                  <p>${step[1]}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
        <div>
          <p class="kicker">Điểm rút ra</p>
          <ul class="project-extra">
            ${project.extras.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="project-links">
          <a class="drive-link" href="${project.drive}" target="_blank" rel="noopener">Sản phẩm trên Drive</a>
          ${project.extraDrive ? `<a class="drive-link" href="${project.extraDrive}" target="_blank" rel="noopener">Infographic Drive</a>` : ""}
          <a class="report-link" href="${project.pdf}" target="_blank" rel="noopener">PDF đọc thêm</a>
        </div>
      </div>
    </article>
  `).join("");
}

function selectReport(index) {
  const project = projects[index];
  $("#activeReportTitle").textContent = project.title;
  $("#reportFrame").src = project.pdf;
  $("#openReportLink").href = project.pdf;

  $$(".report-button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });
}

function renderReports() {
  $("#reportList").innerHTML = projects.map((project, index) => `
    <button class="report-button" type="button" data-report="${index}">
      <strong>${project.id}. ${project.title.replace(/^BT\d?\s?-\s?/, "")}</strong>
      <code>${reportUrl(project.pdf)}</code>
    </button>
  `).join("");

  $$(".report-button").forEach((button) => {
    button.addEventListener("click", () => selectReport(Number(button.dataset.report)));
  });

  selectReport(0);
}

function initFilters() {
  $$(".filter").forEach((filter) => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.filter;
      $$(".filter").forEach((button) => button.classList.toggle("active", button === filter));
      $$(".project-panel").forEach((panel) => {
        const visible = category === "all" || panel.dataset.category === category;
        panel.classList.toggle("hidden", !visible);
      });
    });
  });
}

function initTheme() {
  const button = $(".theme-toggle");
  const label = $(".theme-text");
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  const sync = () => {
    const isLight = document.body.classList.contains("light-theme");
    label.textContent = isLight ? "Dark" : "Light";
    button.setAttribute("aria-pressed", String(isLight));
  };

  button.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("portfolio-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
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

function initCanvas() {
  const canvas = $("#networkCanvas");
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
    const isLight = document.body.classList.contains("light-theme");

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

renderProjects();
renderReports();
initFilters();
initTheme();
initReveal();
initProgress();
initNav();
initCanvas();
