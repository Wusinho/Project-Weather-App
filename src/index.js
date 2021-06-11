import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import formView from "./module/form";
import searchView from "./views/card.html";
import getData from "./module/getData";
import createContainer from "./module/createContainer";
import UI from "./module/ui";

const getForm = document.getElementById("form");
getForm.appendChild(formView());

const input = document.getElementById("searchCity");
const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", (e) => {
  const currentSearch = input.value;

  getData(currentSearch)
    .then((data) => {
      createContainer(data);
    })
    .catch((error) => {
      console.error("error", error);
    });

  e.preventDefault();
});
