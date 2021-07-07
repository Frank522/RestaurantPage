import generateMenu from "./menu.js";
import generateContact from "./contact.js";
import generateHome from "./home.js";

const generateNav = (content) => {
  const nav = document.createElement("ul");

  const homeNav = document.createElement("li");
  homeNav.addEventListener("click", () => {
    generatePage(generateHome, content);
  });
  homeNav.innerText = "HOME";

  const menuNav = document.createElement("li");
  menuNav.addEventListener("click", () => {
    generatePage(generateMenu, content);
  });
  menuNav.innerText = "MENU";

  const contactNav = document.createElement("li");
  contactNav.addEventListener("click", () => {
    generatePage(generateContact, content);
  });
  contactNav.innerText = "CONTACT";

  nav.appendChild(homeNav);
  nav.appendChild(menuNav);
  nav.appendChild(contactNav);
  content.appendChild(nav);
};

const clearContent = (content) => {
  content.innerHTML = "";
};

//utilized to generate desired page upon click
const generatePage = (pageFunc, content) => {
  clearContent(content);
  generateNav(content);
  pageFunc(content);
};

export default generateNav;
