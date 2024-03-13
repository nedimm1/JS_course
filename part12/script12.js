'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
}

function renderError(msg){
    countriesContainer.insertAdjacentText('beforeend', msg)

}

/*function getCountryAndNeighbor(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send()

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        renderCountry(data)

        const [neighbor] = data.borders

        if(!neighbor) return;

        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`)
        request2.send()

        request2.addEventListener('load', function(){
            const data2 = JSON.parse(this.responseText)
            renderCountry(data2, 'neighbour')
        })

    });

}

getCountryAndNeighbor('kosovo')
getCountryAndNeighbor('iceland')
getCountryAndNeighbor('algeria')*/

function getCountryData(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0])
            const neighbor = data[0].borders[0]

            if (!neighbor) return;


            return fetch(`https://restcountries.com/v2/alpha/${neighbor}`)


        }).then((response) => response.json())
        .then((data) => renderCountry(data, 'neighbour'))
        .catch((err) => {
            console.error(`${err} 🚩`)
            renderError('something went wrong! 🚩🚩🚩')
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}

btn.addEventListener('click', function(){
    getCountryData('kosovo')
})

