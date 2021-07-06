import menu from './menu.js'
import contacts from './contact.js'

const generateHome = (content) => {
  const header = document.createElement("header");
  content.appendChild(header);

  const h1 = document.createElement("h1");
  h1.innerText = "Johnny's Pie Emporium";
  header.appendChild(h1);

  const img = document.createElement("img");
  img.setAttribute("src", "../src/img/pie.jpeg");
  content.appendChild(img);

  const p = document.createElement("p");
  p.innerText += 
    "Johnny's Pie Emporium was established in the year 1853 by Johnny Palazar"
  p.innerText +=
    " after traveling to America to escape his oppressive family in Germany, who did not";
  p.innerText +=
    "believe that he could make pies. It was always Johnny's dream to sell pies on the";
  p.innerText +=
    "street corner and have every american enjoy the sweet taste of his spectacular";
  p.innerText +=
    "walnut cranberry pie. Johnny's Pie Emporium evolved what it has become today, a";
  p.innerText +=
    "pie chain that can be found in every state, after his son took over in 1882 and sold";
  p.innerText +=
    "the pie chain to a close and dear friend. Now every American no matter where they are";
  p.innerText +=
    "can enjoy a slice Johnny's cranberry walnut pie, knowing the history behind it.";
  content.appendChild(p);
};

const generateMenu = (content) => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Menu';
  content.appendChild(h1);

  menu.items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menuItem');
    div.setAttribute('id', item.name);

    const h3 = document.createElement('h3');
    h3.innerText = item.name;
    div.appendChild(h3);

    const p1 = document.createElement('p');
    p1.innerText = item.description;
    div.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = '$' + item.price;
    div.appendChild(p2);

    const image = document.createElement('img');
    image.setAttribute('src', item.imageSource);
    div.appendChild(image);
    content.appendChild(div);
  });
};
const generateContact = (content) => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Contact Us';
  content.appendChild(h1);

  contacts.items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('contact');
    div.setAttribute('id', item.name);

    const h3 = document.createElement('h3');
    h3.innerText = item.name;
    div.appendChild(h3);

    const p1 = document.createElement('p');
    p1.innerText = item.role;
    div.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = item.number;
    div.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerText = item.email;
    div.appendChild(p2);
    content.appendChild(div);
  });

};

const generateNav = (content) => {
  const nav = document.createElement('ul');
  const homeNav = document.createElement('li');
  homeNav.innerText = 'HOME'
  const menuNav = document.createElement('li');
  menuNav.innerText = 'MENU'
  const contactNav = document.createElement('li');
  contactNav.innerText = 'CONTACT'
  nav.appendChild(homeNav);
  nav.appendChild(menuNav);
  nav.appendChild(contactNav);
  content.appendChild(nav);
};

const clearContent = (content) => {
  content.innerHTML = '';
};

export { generateHome, generateMenu, generateContact, generateNav, clearContent };
