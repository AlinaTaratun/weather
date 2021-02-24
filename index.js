
  function fun() {
      let city = document. getElementById("window").value;
    //   console.log(city);    
      weather(city);
  }
function weather(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=612063be1ae68a9db6d031baba132bda`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('data', data);
    document.querySelector('.name').textContent = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.weather').textContent = data.weather[0]['description'];
    document.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    document.querySelector('.pressure').innerHTML = Math.round(data.main.pressure * 0.75) + 'мм.рт.ст.';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'м/ч';
    document.querySelector('.month').innerHTML = new Date(data.dt * 1000).toDateString().split(" ")[1];
    document.querySelector('.day').innerHTML = new Date(data.dt * 1000).toDateString().split(" ")[2];
  })
  .catch(function (error) {
    console.log('error', error)
    alert("Error");
  })
}
