const reports = [
  {
    title: "Bài 1 - Máy tính và thiết bị ngoại vi",
    path: "assets/reports/bai-1-may-tinh-thiet-bi-ngoai-vi.pdf"
  },
  {
    title: "Bài 2 - Khai thác dữ liệu và thông tin",
    path: "assets/reports/bai-2-khai-thac-du-lieu-thong-tin.pdf"
  },
  {
    title: "Bài 3 - Tổng quan về trí tuệ nhân tạo",
    path: "assets/reports/bai-3-tong-quan-tri-tue-nhan-tao.pdf"
  },
  {
    title: "Bài 4 - Công cụ hợp tác trực tuyến",
    path: "assets/reports/bai-4-cong-cu-hop-tac-truc-tuyen.pdf"
  },
  {
    title: "Bài 5 - AI tạo sinh hỗ trợ sáng tạo nội dung",
    path: "assets/reports/bai-5-ai-tao-sinh-sang-tao-noi-dung.pdf"
  },
  {
    title: "Bài 6 - Sử dụng AI có trách nhiệm",
    path: "assets/reports/bai-6-ai-co-trach-nhiem.pdf"
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const reportList = $("#reportList");
const reportFrame = $("#reportFrame");
const activeReportTitle = $("#activeReportTitle");
const openReportLink = $("#openReportLink");

function absoluteReportUrl(path) {
  return new URL(path, window.location.href).href;
}

function selectReport(index) {
  const report = reports[index];
  const url = absoluteReportUrl(report.path);

  activeReportTitle.textContent = report.title;
  reportFrame.src = report.path;
  openReportLink.href = report.path;

  $$(".report-button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });

  const activeButton = $$(".report-button")[index];
  if (activeButton) {
    activeButton.querySelector("code").textContent = url;
  }
}

function renderReports() {
  reports.forEach((report, index) => {
    const button = document.createElement("button");
    button.className = "report-button";
    button.type = "button";
    button.innerHTML = `<strong>${report.title}</strong><code>${absoluteReportUrl(report.path)}</code>`;
    button.addEventListener("click", () => selectReport(index));
    reportList.appendChild(button);
  });

  selectReport(0);
}

function initFilters() {
  $$(".filter").forEach((filter) => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.filter;

      $$(".filter").forEach((button) => {
        button.classList.toggle("is-active", button === filter);
      });

      $$(".project-card").forEach((card) => {
        const visible = category === "all" || card.dataset.category === category;
        card.classList.toggle("hidden", !visible);
      });
    });
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  $$(".reveal").forEach((item) => observer.observe(item));
}

function initProgress() {
  const progress = $(".progress");
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${value}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initNavState() {
  const links = $$(".nav a");
  const sections = $$("main section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function initTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  $$("[data-tilt]").forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      item.style.transform = `perspective(900px) rotateX(${y * -3}deg) rotateY(${x * 4}deg) translateY(-2px)`;
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });
  });
}

function initCanvas() {
  const canvas = $("#motionCanvas");
  const context = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let dots = [];

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    dots = Array.from({ length: Math.min(70, Math.floor(window.innerWidth / 18)) }, (_, index) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      color: index % 3 === 0 ? "#16a084" : index % 3 === 1 ? "#d99a28" : "#c04d3b"
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    dots.forEach((dot, index) => {
      if (!reduceMotion) {
        dot.x += dot.vx;
        dot.y += dot.vy;
      }

      if (dot.x < -10) dot.x = window.innerWidth + 10;
      if (dot.x > window.innerWidth + 10) dot.x = -10;
      if (dot.y < -10) dot.y = window.innerHeight + 10;
      if (dot.y > window.innerHeight + 10) dot.y = -10;

      context.globalAlpha = 0.22;
      context.beginPath();
      context.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
      context.fillStyle = dot.color;
      context.fill();

      for (let nextIndex = index + 1; nextIndex < dots.length; nextIndex += 1) {
        const next = dots[nextIndex];
        const distance = Math.hypot(dot.x - next.x, dot.y - next.y);
        if (distance < 120) {
          context.globalAlpha = 0.08;
          context.beginPath();
          context.moveTo(dot.x, dot.y);
          context.lineTo(next.x, next.y);
          context.strokeStyle = "#0f6b4f";
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

renderReports();
initFilters();
initReveal();
initProgress();
initNavState();
initTilt();
initCanvas();
