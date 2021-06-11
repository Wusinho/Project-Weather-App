export default async (data) => {
  const cardTitle = document.getElementById("card-title");
  cardTitle.innerText = `${data.name}, ${data.sys.country}`;
  const cardText = document.getElementById("card-text");
  cardText.innerText = `${data.weather[0].description},  F ${data.main.temp}`;
  const cardImg = document.getElementById("card-img-top");
  cardImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
};
