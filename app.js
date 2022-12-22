
let img = document.querySelector("img")
let btn = document.querySelector("button")
let rdm = Math.random() * 9;
let rdmfloor = Math.floor(rdm)

function background ()  {
    fetch ('https://api.unsplash.com/topics/nature/photos?client_id=ah-XtVEciBwjD79i8xB74z7hUj1lT3g6U1XpNHuIySw')
    .then(response => response.json())
    .then(reponse => { 
        img.src = reponse[rdmfloor].urls.full
    })
}
background()

btn.addEventListener(`click`, background)