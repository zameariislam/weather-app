let input = document.getElementById('input')
let button = document.getElementById('button')
let cityname = document.getElementById('cityname')
let container = document.getElementById('container')
// console.log(cityname, temperature)


button.addEventListener('click', function (e) {


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=23ec2e0b3645b44ee8e1f9763b103c86`)
        .then(res => res.json())
        .then(data => {
            let icon = data.weather[0].icon
            console.log(data.sys.sunrise)


            container.innerHTML = `<h2>${data.main.humidity}</h2>
                <h3>${data.wind.speed}</h3>
                <h4>${data.main.pressure}</h4>
                <img width='200' src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
                
                `

        })
});

// input.addEventListener('keypress', function () {



//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=23ec2e0b3645b44ee8e1f9763b103c86`)
//         .then(res => res.json())
//         .then(data => console.log(data.))

// })








