const generateHome = (content) => {
  const header = document.createElement("header");
  content.appendChild(header);

  const h1 = document.createElement("h1");
  h1.innerText = "Johnny's Pie Emporium";
  header.appendChild(h1);

  const img = document.createElement("img");
  img.setAttribute('id', 'homePie');
  img.setAttribute("src", "../src/img/pie.jpeg");
  content.appendChild(img);

  const p = document.createElement("p");
  p.setAttribute('id', 'homeDescription')
  p.innerText +=
    "Johnny's Pie Emporium was established in the year 1853 by Johnny Palazar";
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

export default generateHome;
