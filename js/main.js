!function(e){var n={};function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(r,c,function(n){return e[n]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\n// add queryselector to button add\nconst addButtonSelector = document.querySelector('.waterApp__button--add')\n// add queryselector to button remove\nconst removeButtonSelector = document.querySelector('.waterApp__button--remove')\n// add queryselector to count numbers\nconst numbersSelector = document.querySelector('.waterApp__numbers')\n\n\naddButtonSelector.addEventListener(\"click\", e =>{\n  ////add one glass more\n  const valueSelector = numbersSelector.innerHTML\n  if (valueSelector <99){\n  const number = Number(valueSelector)\n    const newNumber = number + 1;\n    numbersSelector.innerText = newNumber.toString();\n\n}});\n\nremoveButtonSelector.addEventListener(\"click\", e =>{\n  ////remove one glass more\n  const valueSelector = numbersSelector.innerHTML\n  if (valueSelector >=1) {\n  const number = Number(valueSelector)\n    const newNumber = number - 1;\n    numbersSelector.innerText = newNumber.toString();\n}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cblxuLy8gYWRkIHF1ZXJ5c2VsZWN0b3IgdG8gYnV0dG9uIGFkZFxuY29uc3QgYWRkQnV0dG9uU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2F0ZXJBcHBfX2J1dHRvbi0tYWRkJylcbi8vIGFkZCBxdWVyeXNlbGVjdG9yIHRvIGJ1dHRvbiByZW1vdmVcbmNvbnN0IHJlbW92ZUJ1dHRvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhdGVyQXBwX19idXR0b24tLXJlbW92ZScpXG4vLyBhZGQgcXVlcnlzZWxlY3RvciB0byBjb3VudCBudW1iZXJzXG5jb25zdCBudW1iZXJzU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2F0ZXJBcHBfX251bWJlcnMnKVxuXG5cbmFkZEJ1dHRvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAvLy8vYWRkIG9uZSBnbGFzcyBtb3JlXG4gIGNvbnN0IHZhbHVlU2VsZWN0b3IgPSBudW1iZXJzU2VsZWN0b3IuaW5uZXJIVE1MXG4gIGlmICh2YWx1ZVNlbGVjdG9yIDw5OSl7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcih2YWx1ZVNlbGVjdG9yKVxuICAgIGNvbnN0IG5ld051bWJlciA9IG51bWJlciArIDE7XG4gICAgbnVtYmVyc1NlbGVjdG9yLmlubmVyVGV4dCA9IG5ld051bWJlci50b1N0cmluZygpO1xuXG59fSk7XG5cbnJlbW92ZUJ1dHRvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAvLy8vcmVtb3ZlIG9uZSBnbGFzcyBtb3JlXG4gIGNvbnN0IHZhbHVlU2VsZWN0b3IgPSBudW1iZXJzU2VsZWN0b3IuaW5uZXJIVE1MXG4gIGlmICh2YWx1ZVNlbGVjdG9yID49MSkge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIodmFsdWVTZWxlY3RvcilcbiAgICBjb25zdCBuZXdOdW1iZXIgPSBudW1iZXIgLSAxO1xuICAgIG51bWJlcnNTZWxlY3Rvci5pbm5lclRleHQgPSBuZXdOdW1iZXIudG9TdHJpbmcoKTtcbn19KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);