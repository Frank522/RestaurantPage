const menu = {
  items: [
    {
      name: "Pecan Pie",
      description:
        "Pecans, corn syrup (or brown sugar, or both); considered a southern dish, but you’ll find it anywhere you find pies; especially popular as a dessert during Thanksgiving or Christmas; the pumpkin pie is its heated rival.",
      price: "9.50",
      imageSource: "../src/img/pecanPie.jpeg",
    },

    {
      name: "Key Lime",
      description:
        "Lime juice (specifically one from a Key lime), meringue topping, and graham-cracker crust; naturally, the pie is heavily associate with the Florida Keys, and Key West holds a festival for the pie every 4th of July Weekend.",
      price: "10.00",
      imageSource: "../src/img/keyLimePie.jpeg",
    },
  ],
};

const generateMenu = (content) => {
  const h1 = document.createElement("h1");
  h1.innerText = "Menu";
  content.appendChild(h1);

  menu.items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menuItem");
    div.setAttribute("id", item.name);

    const h3 = document.createElement("h3");
    h3.innerText = item.name;
    div.appendChild(h3);

    const p1 = document.createElement("p");
    p1.innerText = item.description;
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = "$" + item.price;
    div.appendChild(p2);

    const image = document.createElement("img");
    image.setAttribute("src", item.imageSource);
    div.appendChild(image);
    content.appendChild(div);
  });
};

export default generateMenu;
