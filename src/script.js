const header = document.querySelector("header");

window.addEventListener("scroll", function () {
<<<<<<< HEAD
  header.classList.toggle("sticky", window.scrollY > 0);
=======
  header.classList.add("sticky", window.scrollY > 0);
>>>>>>> de06718 (Made Changes)
});
