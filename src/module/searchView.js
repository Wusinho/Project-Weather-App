import views from "../views/card.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.className = "card";
  divElement.innerHTML = views;

  return divElement;
};

// divElement.style = "width: 18rem";
