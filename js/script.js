var menu_btn = document.querySelector(".toggle-menu div");
var main_menu = document.querySelector(".main-menu");
var menu_btn_close = document.querySelector(".toggle-menu");

menu_btn.addEventListener("click", function(event) {
  event.preventDefault();
  menu_btn.classList.add("toggle-menu__btn--close");
  menu_btn.classList.remove("toggle-menu__btn");
  main_menu.classList.add("main-menu--show");
});
