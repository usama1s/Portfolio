// select documetn object model (DOM) items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// set if the menu is open or close
let ShowMenu = false; // initially menu is closed

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!ShowMenu) {
    // menu is closed

    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    ShowMenu = true;
  } else {
    //menu is open
    // add a close class to the one which is to be closed
    // add a show class to the one which is to be shown
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    ShowMenu = false;
  }
}
