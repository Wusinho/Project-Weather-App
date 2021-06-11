export default async (data) => {
  const list = document.getElementById("content");
  const row = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = `${data.name},  ${data.sys.country}`;
  row.appendChild(h2);
  list.appendChild(row);
};
