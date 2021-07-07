const contacts = {
  items: [
    {
      name: "Jimmy Palazar",
      role: "Co-owner",
      number: "(123) 456-7890",
      email: "palazar@website.com",
    },

    {
      name: "Tony Linguini",
      role: "Co-owner",
      number: "(123) 0987-654",
      email: "linguini@website.com",
    },
  ],
};

const generateContact = (content) => {
  const h1 = document.createElement("h1");
  h1.innerText = "Contact Us";
  content.appendChild(h1);

  contacts.items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("contact");
    div.setAttribute("id", item.name);

    const h3 = document.createElement("h3");
    h3.innerText = item.name;
    div.appendChild(h3);

    const p1 = document.createElement("p");
    p1.innerText = item.role;
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = item.number;
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = item.email;
    div.appendChild(p2);
    content.appendChild(div);
  });
};

export default generateContact;
