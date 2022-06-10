
// Target elements  
let element = (id) => document.getElementById(id)

let input = element('input'),
    button = element('button'),
    container = element('container'),
    title = element('title'),
    city = element('city');

let information = document.querySelector('.information')
let children = (information.children)



//  Add Eventlistener   here 


input.addEventListener('keyup', function (e) {
    let inputValue = (input.value).trim()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=23ec2e0b3645b44ee8e1f9763b103c86`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let icon = data.weather[0].icon
            information.style.opacity = 1

            // console.log(data.main.humidity)
            city.innerText = `${data.name} ,${data.sys.country}`

            children[0].innerHTML = `
                <img width='50' src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
                <p>${data.main.temp} C</p>
                <p>Temperature</p>
               
                `
            cardGenerator(children[1], data.wind.speed, 'km/h', 'Wind')
            cardGenerator(children[2], data.main.humidity, '%', 'Humidity')
            cardGenerator(children[3], data.main.pressure, 'hPa', 'Humidity')

        })

});


let cardGenerator = (element, data, unit, text) => {
    element.children[1].style.display = 'none'
    element.children[2].style.display = 'none'
    element.children[3].innerText = `${data} ${unit}`
    element.children[4].innerText = `${text}`

}













