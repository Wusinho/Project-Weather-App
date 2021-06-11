import toggleFunction from './toggleFunction'


export default async (data) => {
  const cardTitle = document.getElementById('card-title');

  cardTitle.innerText = `${data.name}, ${data.sys.country}`;
  const cardText = document.getElementById('card-text');
  cardText.innerText = `${data.weather[0].description}`;

const getTogle = document.getElementById('celcius')
const getOutput = document.getElementById('output')

getOutput.innerText = data.main.temp

const getKelvin = document.getElementById('kelvin')


getTogle.addEventListener('click', (e) => {
  toggleFunction(data.main.temp)
  
  e.preventDefault();
});

getKelvin.addEventListener('click', (e) => {
getOutput.innerText = data.main.temp
  
  e.preventDefault();
});



  const cardImg = document.getElementById('card-img-top');
  cardImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
};
