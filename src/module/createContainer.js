export default async (data) => {
  const list = document.getElementById("content");
  const row = document.createElement("div");
  const input = document.createElement("h2");
  h2.value = data.name;
  row.appendChild(input);
  list.appendChild(row);
};
