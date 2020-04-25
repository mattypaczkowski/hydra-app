"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below



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