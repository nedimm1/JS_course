'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map;
let mapEvent;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
       console.log(position)
       let {latitude} = position.coords
       let {longitude} = position.coords
    
      const coords = [latitude, longitude]

       map = L.map('map').setView(coords, 13);

       L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(map);
       
      map.on('click', function(mapE){
        mapEvent = mapE
        form.classList.remove('hidden')
        inputDistance.focus()
        const {lat, lng} = mapEvent.latlng

        L.marker({lat, lng}).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: "running-popup"
        }))
        .setPopupContent('Workout')
        .openPopup();
      })

       L.marker(coords).addTo(map)
           .bindPopup('A pretty CSS popup.<br> Easily customizable.')
           .openPopup();
    }, function () {
      console.log('no available location')
    })
}

form.addEventListener('click', function(e){
   inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ' ';

   e.preventDefault()

    L.marker({lat, lng}).addTo(map)
    .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup"
    }))
    .setPopupContent('Workout')
    .openPopup();

  })

  inputType.addEventListener('change', function(){
     inputElevation.closest('.form_row').classList.toggle(' form__row--hidden')
     inputCadence.closest('.form_row').classList.toggle(' form__row--hidden')
  })