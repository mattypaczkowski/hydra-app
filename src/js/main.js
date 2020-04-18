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
const addButtonSelector = document.querySelector('.waterApp__button--add')
// add queryselector to button remove
const removeButtonSelector = document.querySelector('.waterApp__button--remove')
// add queryselector to count numbers
const numbersSelector = document.querySelector('.waterApp__numbers')


addButtonSelector.addEventListener("click", e =>{
  ////add one glass more
  const valueSelector = numbersSelector.innerHTML
  if (valueSelector <99){
  const number = Number(valueSelector)
    const newNumber = number + 1;
    numbersSelector.innerText = newNumber.toString();

}});

removeButtonSelector.addEventListener("click", e =>{
  ////remove one glass more
  const valueSelector = numbersSelector.innerHTML
  if (valueSelector >=1) {
  const number = Number(valueSelector)
    const newNumber = number - 1;
    numbersSelector.innerText = newNumber.toString();
}});