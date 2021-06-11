import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import formView from "./module/formView";
import searchView from "./views/card.html";
import getData from "./module/getData";
import createContainer from "./module/createContainer";

const getForm = document.getElementById("form");
const getContent = document.getElementById("content");
const input = document.getElementById("searchCity");
const btnSubmit = document.getElementById("submit");

getForm.appendChild(formView());
getContent.appendChild(searchView());

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
