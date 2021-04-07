import moment from 'moment';
import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

// add queryselector to button add
const addButtonSelector = document.querySelector('.waterApp__button--add');
// add queryselector to button remove
const removeButtonSelector = document.querySelector('.waterApp__button--remove');
// add queryselector to count numbers
const value = document.querySelector('.waterApp__numbers');
//curen data 
const key = new Date().toISOString().slice(0, 10);

if (value) {

  addButtonSelector.addEventListener("click", e =>{
    ////add one glass more
    if (value.innerHTML < 99) {
    value.innerHTML = parseInt(value.innerHTML) + 1;
  }});


  removeButtonSelector.addEventListener("click", e =>{
    ////remove one glass more
    if (value.innerHTML > 0) {
    value.innerHTML = parseInt(value.innerHTML) - 1;
  }});

};