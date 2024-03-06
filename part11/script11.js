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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

}


class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}


class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App{
   #map;
   #mapEvent;

  constructor() {
    this._getPosition()

    form.addEventListener('click', this._newWorkout().bind(this))
     
       inputType.addEventListener('change', function(){
          inputElevation.closest('.form_row').classList.toggle(' form__row--hidden')
          inputCadence.closest('.form_row').classList.toggle(' form__row--hidden')
       })
  }

  _getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this._loadMap().bind(this), function () {
          console.log('no available location')
        })
    }
  }

  _loadMap() {
        console.log(position)
        let {latitude} = position.coords
        let {longitude} = position.coords
     
       const coords = [latitude, longitude]
 
        this.#map = L.map('map').setView(coords, 13);
 
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
       this.#map.on('click', this._showForm().bind(this))
 
  }

  _showForm(mapE) {
    this.#mapEvent = mapE
         form.classList.remove('hidden')
         inputDistance.focus()
         const {lat, lng} = mapEvent.latlng
 
  }

  _toggleElevationField() {}

  _newWorkout(e) {
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ' ';
     
        e.preventDefault()
     
         L.marker({lat, lng}).addTo(this.#map)
         .bindPopup(L.popup({
             maxWidth: 250,
             minWidth: 100,
             autoClose: false,
             closeOnClick: false,
             className: "running-popup"
         }))
         .setPopupContent('Workout')
         .openPopup();
     
       }
  }


let app = new App()

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