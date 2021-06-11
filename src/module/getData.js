export default async function getInfo(city) {
  const key = '8cceef8c56079ba82c43dbf3d0d9ec90';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}
