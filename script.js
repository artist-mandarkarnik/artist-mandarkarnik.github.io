const images = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbTitle = document.getElementById("lightbox-title");
const lbSize = document.getElementById("lightbox-size");
const lbDesc = document.getElementById("lightbox-desc");
const closeBtn = document.getElementById("close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lbImg.src = img.src;
    lbTitle.textContent = img.dataset.title;
    lbSize.textContent = img.dataset.size;
    lbDesc.textContent = img.dataset.desc;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
