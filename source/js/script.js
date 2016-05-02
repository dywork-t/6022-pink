var toggle_btn = document.querySelector(".toggle-menu__btn");
var toggle_btnClose = document.querySelector(".toggle-menu__btn--close");
var main_menu = document.querySelector(".main-menu");

toggle_btn.addEventListener("click", function(event) {
  event.preventDefault();
  toggle_btn.classList.add("toggle-menu__btn--unshow");
  toggle_btnClose.classList.add("toggle-menu__btn--show");
  main_menu.classList.add("main-menu--show");
});

toggle_btnClose.addEventListener("click", function(event) {
  event.preventDefault();
  toggle_btn.classList.remove("toggle-menu__btn--unshow");
  toggle_btnClose.classList.remove("toggle-menu__btn--show");
  main_menu.classList.remove("main-menu--show");
});
