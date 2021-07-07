import generateHome from "./home.js";
import generateNav from "./nav.js";
import './style.css'

const content = document.querySelector("#content");
generateNav(content);
generateHome(content);
