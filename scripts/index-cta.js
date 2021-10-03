const scrollDown = document.querySelector(".scroll-down");
 
window.addEventListener("scroll", scrollHandler);
 
function scrollHandler() {
  window.pageYOffset > 0
    ? scrollDown.classList.add("is-hidden")
    : scrollDown.classList.remove("is-hidden");
}