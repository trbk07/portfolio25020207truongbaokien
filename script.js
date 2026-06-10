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

const reportList = document.querySelector("#reportList");
const reportFrame = document.querySelector("#reportFrame");
const activeReportTitle = document.querySelector("#activeReportTitle");
const openReportLink = document.querySelector("#openReportLink");

function absoluteReportUrl(path) {
  return new URL(path, window.location.href).href;
}

function selectReport(index) {
  const report = reports[index];
  const url = absoluteReportUrl(report.path);

  activeReportTitle.textContent = report.title;
  reportFrame.src = report.path;
  openReportLink.href = report.path;

  document.querySelectorAll(".report-button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });

  const activeButton = document.querySelectorAll(".report-button")[index];
  if (activeButton) {
    activeButton.querySelector("code").textContent = url;
  }
}

reports.forEach((report, index) => {
  const button = document.createElement("button");
  button.className = "report-button";
  button.type = "button";
  button.innerHTML = `<strong>${report.title}</strong><code>${absoluteReportUrl(report.path)}</code>`;
  button.addEventListener("click", () => selectReport(index));
  reportList.appendChild(button);
});

selectReport(0);
