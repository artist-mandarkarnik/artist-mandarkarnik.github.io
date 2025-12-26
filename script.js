const images = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbTitle = document.getElementById("lightbox-title");
const lbDesc = document.getElementById("lightbox-desc");
const closeBtn = document.getElementById("close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lbImg.src = img.src;
    lbTitle.textContent = img.dataset.title || "";
    lbDesc.textContent = img.dataset.desc || "";
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
