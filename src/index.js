import { generateContact, generateHome, generateMenu, generateNav } from "./nav.js";

const content = document.querySelector("#content");
generateHome(content);
generateNav(content);
generateMenu(content);
generateContact(content);