const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.add("sticky", window.scrollY > 0);
});
