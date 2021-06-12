import views from '../views/search.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.id = 'card';

  divElement.className = 'card';
  divElement.style = 'width: 18rem';
  divElement.innerHTML = views;

  return divElement;
};
