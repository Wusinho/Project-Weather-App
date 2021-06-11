// import views from "../views/card.html";

export default async (data) => {
  const list = document.getElementById("content");
  const row = document.createElement("div");
  row.className = "card";
  const img = document.createElement("img");
  img.className = "card-img-top";
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.innerText = `${data.name},  ${data.sys.country}`;
  p.innerText = data.weather[0].description;

  row.appendChild(h2);
  row.appendChild(p);
  list.appendChild(row);
};
