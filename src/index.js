import "./styles.css";
import home from "./pages/home-page.js";
import menu from "./pages/menu-page.js";
import about from "./pages/about-page.js";

// add event listeners to nav
document.querySelector('#home').addEventListener('click', home.load);
document.querySelector('#menu').addEventListener('click', menu.load);
document.querySelector('#about').addEventListener('click', about.load);

// synthetic click 
document.querySelector('#home').click();