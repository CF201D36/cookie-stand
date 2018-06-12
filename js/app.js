// Safety Goggles ON!
'use strict';

// Get Key Information
var navHome = document.getElementById('home');
var navSales = document.getElementById('sales');

// Starting Data
var myStore1 = {
  myLocation: '1st and Pike',
  myCustomerMin: 23,
  myCustomerMax: 65,
  myAvgSale: 6.3,
  myAvgCustomers: null,
};

var myStore2 = {
  myLocation: 'SeaTac Airport',
  myCustomerMin: 3,
  myCustomerMax: 24,
  myAvgSale: 1.2,
  myAvgCustomers: null,
};

var myStore3 = {
  myLocation: 'Seattle Center',
  myCustomerMin: 11,
  myCustomerMax: 38,
  myAvgSale: 3.7,
  myAvgCustomers: null,
};

var myStore4 = {
  myLocation: 'Capitol Hill',
  myCustomerMin: 20,
  myCustomerMax: 38,
  myAvgSale: 2.3,
  myAvgCustomers: null,
};

var myStore5 = {
  myLocation: 'Alki',
  myCustomerMin: 2,
  myCustomerMax: 16,
  myAvgSale: 4.6,
  myAvgCustomers: null,
};

// Calculate and store the simulated amount of cookies purchased each hour at THIS location (myAvgSale * myAvgCustomers)
myStore1.myAvgCustomers = myStoreTraffic(myStore1.myCustomerMin, myStore1.myCustomerMax);
myStore2.myAvgCustomers = myStoreTraffic(myStore2.myCustomerMin, myStore2.myCustomerMax);
myStore3.myAvgCustomers = myStoreTraffic(myStore3.myCustomerMin, myStore3.myCustomerMax);
myStore4.myAvgCustomers = myStoreTraffic(myStore4.myCustomerMin, myStore4.myCustomerMax);
myStore5.myAvgCustomers = myStoreTraffic(myStore5.myCustomerMin, myStore5.myCustomerMax);

// Clean the data
myStore1.myAvgCustomers = myStore1.myAvgCustomers.toFixed(2);
myStore2.myAvgCustomers = myStore2.myAvgCustomers.toFixed(2);
myStore3.myAvgCustomers = myStore3.myAvgCustomers.toFixed(2);
myStore4.myAvgCustomers = myStore4.myAvgCustomers.toFixed(2);
myStore5.myAvgCustomers = myStore5.myAvgCustomers.toFixed(2);


// Generate a random number of customers per hour (using RANGE between myCustomerMin and myCustomerMax)
function myStoreTraffic(custMin, custMax) {
  return Math.random() * (custMax - custMin) + custMin;
}