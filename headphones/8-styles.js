const menuBtn = document.getElementById("menu-btn");
const ulList = document.getElementById("ulList");
const animate = document.querySelector(".animate");
const mainP = document.getElementById("mainP");
const pResult = document.getElementById("pResult");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    animate.classList.add("active");
    mainP.classList.add("active");
    pResult.classList.add("active");
  } else {
    animate.classList.remove("active");
    mainP.classList.remove("active");
    pResult.classList.remove("active");
  }
});
menuBtn.addEventListener("click", () => {
  ulList.classList.toggle("active");
  menuBtn.innerHTML = ulList.classList.contains("active")
    ? "&#10005;"
    : "&#9776;";
});
