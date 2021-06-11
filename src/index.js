import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import formView from "./module/form";
import getData from "./module/getData";
import UI from "./module/ui";

const getForm = document.getElementById("form");
getForm.appendChild(formView());

const search = document.getElementById("searchCity");
const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", (e) => {
  const currentVal = search.value;
  getData(currentVal);

  e.preventDefault();
});
