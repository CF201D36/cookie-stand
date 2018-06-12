// Safety Goggles ON!
'use strict';

// Get Key Information
var initialPage = location;
var navHome = document.getElementById('home');
var navSales = document.getElementById('sales'); 

// 1. make my list items -> document.createElement
var navEl = document.createElement('li');

// 2. use the miles to give the list items some content -> .textContent
navHome.textContent = 'Home';

// 3. display the list items in the browser -> interact with the DOM -> parentElement.appendChild(childElement)
ulElement.appendChild(liEl);