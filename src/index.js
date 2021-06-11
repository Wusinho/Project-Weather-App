import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import formView from './module/formView';
import searchView from './module/searchView';
import getData from './module/getData';
import createInfo from './module/createInfo';

const getForm = document.getElementById('form');
const getContent = document.getElementById('content');

getForm.appendChild(formView());
getContent.appendChild(searchView());

const input = document.getElementById('searchCity');
const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', (e) => {
  const currentSearch = input.value;

  getData(currentSearch)
    .then((data) => {
      createInfo(data);
    })
    .catch((error) => error);

  e.preventDefault();
});
