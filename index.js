function GetClima() {

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=09e0ef7219cfe8ad1f7067468fd3a5a2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
