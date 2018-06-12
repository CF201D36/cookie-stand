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

var myStores = [myStore1, myStore2, myStore3, myStore4, myStore5];

// Calculate and store the AVERAGE number of customers per hour per location
for (var i = 0; i < myStores.length; i++) {
  var myArray = myStores[i];

}
myStore1.myAvgCustomers = parseInt(myStoreTraffic(myStore1.myCustomerMin, myStore1.myCustomerMax));
myStore2.myAvgCustomers = parseInt(myStoreTraffic(myStore2.myCustomerMin, myStore2.myCustomerMax));
myStore3.myAvgCustomers = parseInt(myStoreTraffic(myStore3.myCustomerMin, myStore3.myCustomerMax));
myStore4.myAvgCustomers = parseInt(myStoreTraffic(myStore4.myCustomerMin, myStore4.myCustomerMax));
myStore5.myAvgCustomers = parseInt(myStoreTraffic(myStore5.myCustomerMin, myStore5.myCustomerMax));

// Calculate and store the simulated amount of cookies purchased each location per hour (myAvgSale * myAvgCustomers)

// Calcluate Average 

// Generate a random number of customers per hour (using RANGE between myCustomerMin and myCustomerMax)
function myStoreTraffic(store, custMin, custMax) {
  var randNum = Math.random() * (custMax - store.custMin) + custMin;
  return parseInt(randNum);
}

// Calculate and store the simulated amount of cookies purchased each location per hour (myAvgSale * myAvgCustomers)
function mySimulation(avgSale, avgCust) {
  return avgSale * avgCust;
}