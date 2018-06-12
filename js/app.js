// ------------------------------------------------------------------------------------------------------------
// SETUP
// ------------------------------------------------------------------------------------------------------------
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
  myStoreTraffic: function (store, custMin, custMax) {
    var randNum = Math.random() * (custMax - store.custMin) + custMin;
    return parseInt(randNum);
  }
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

// Extra Variables
var myHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];
var myDays  = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
var myStores = [myStore1, myStore2, myStore3, myStore4, myStore5];

// ------------------------------------------------------------------------------------------------------------
// Operations
// ------------------------------------------------------------------------------------------------------------
// Estimate the AVERAGE number of CUSTOMERS per HOUR per LOCATION
myStores.forEach(function(myStore){
  console.log(myStore);
  myStore.myAvgCustomers = calcTraffic(myStore.myCustomerMin, myStore.myCustomerMax);
});

// Calculate and store the simulated amount of cookies purchased each location per hour (myAvgSale * myAvgCustomers)

// Calcluate Average 


// ------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------------------
// Generate a random number of customers per hour (uses RANGE between myCustomerMin and myCustomerMax)
function calcTraffic(custMin, custMax) {
  var randNum = Math.random() * (custMax - custMin) + custMin;
  return parseInt(randNum);
}

// Calculate and store the simulated amount of cookies purchased each location per hour (myAvgSale * myAvgCustomers)
function mySimulation(avgSale, avgCust) {
  return avgSale * avgCust;
}