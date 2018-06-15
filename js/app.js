// ------------------------------------------------------------------------------------------------------------
// SETUP
// ------------------------------------------------------------------------------------------------------------
// Safety Goggles ON!
'use strict';

// Global Variables
// var myDays  = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
var myHours  = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];
var myStores = [];
var formAddObject = document.getElementById('form-add-object');

// ------------------------------------------------------------------------------------------------------------
// OBJECTS
// ------------------------------------------------------------------------------------------------------------
// Store Object
function Store(myLoc, myMin, myMax, myAvg, salesPH, dailyT) {
  this.location = myLoc;
  this.custMin = myMin;
  this.custMax = myMax;
  this.avgSalePerCust = myAvg;

  // Generated Values
  this.salesPerHour = salesPH; // cookies per hour
  this.dailyTotal = dailyT; // total cookies sold per day

  // Store a reference to every new instance in global 'myStores' array
  myStores.push(this);
}

// ------------------------------------------------------------------------------------------------------------
// METHODS
// ------------------------------------------------------------------------------------------------------------
Store.prototype.cookieSales = function (cMin, cMax) {
  // Cycle through each hour
  for(var i=0; i < myHours.length; i++) {

    // Generate a random customer traffic total for each hour
    var randNum = Math.round(Math.random() * (cMax - cMin) + cMin);

    // Generate sales data based on customer traffic
    var dailySales = Math.round(this.avgSalePerCust * randNum);
    this.dailyTotal += dailySales;

    // Add hourly sales data to 'salesPerHour' array
    this.salesPerHour.push(dailySales + ' cookies');
  }
};

//-----------------------------------------------------------------
Store.prototype.renderRow = function () {
  // Fetch table elements
  var tBody = document.getElementById('table-sales-body');

  // Create table body elements
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  // Append Data to Cells
  for (var i=0; i < myHours.length; i++) {
    tdEl.textContent = this.salesPerHour;
    trEl.appendChild(tdEl);
  }
  tBody.appendChild(trEl);
};

//-----------------------------------------------------------------
Store.renderHeader = function () {
  // Fetch table elements
  var tHead  = document.getElementById('table-sales-header');

  // Create table row element
  var hrEl = document.createElement('tr');

  // Add hours to Header
  for(var i=0; i < myHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = myHours[i];
    hrEl.appendChild(thEl);
    tHead.appendChild(thEl);
  }
};

//-----------------------------------------------------------------
Store.buildTable = function () {
  // Initiate Header
  Store.renderHeader();

  // Initiate Body
  for(var i=0; i < myStores.length; i++) {
    console.log('Rendering table for: ' + myStores[i].location);
    myStores[i].cookieSales(myStores[i].custMin,myStores[i].custMax);
    myStores[i].renderRow();
  }
};

// ------------------------------------------------------------------------------------------------------------
// OPERATIONS
// ------------------------------------------------------------------------------------------------------------
// Create and save new 'Store' object instances
new Store('1st and Pike',   23, 65, 6.3, [], 0); // eslint-disable-line
new Store('SeaTac Airport', 3,  24, 1.2, [], 0); // eslint-disable-line
new Store('Seattle Center', 11, 38, 3.7, [], 0); // eslint-disable-line
new Store('Capitol Hill',   20, 38, 2.3, [], 0); // eslint-disable-line
new Store('Alki',           2,  16, 4.6, [], 0); // eslint-disable-line

// Render Table
Store.buildTable();

// Add the event listener to the form
Store.Form.addEventListener('submit', Store.addNewStore);

// Setup addNewDog Event Function
Store.addNewStore = function(event) { // event is a parameter that actually specifies the item being passed -- but it's just a variable.
  event.preventDefault();
  var newStoreLocation  = event.target.storeLocation.value;
  var newCustMin        = event.target.storeCustMin.value;
  var newCustMax        = event.target.storeCustMax.value;
  var newAvgSalePerCust = event.target.storeAvgSalePerCust.value;

  new Store(newStoreLocation,newCustMin,newCustMax, newAvgSalePerCust);
  Store.innerHTML = ' '; // clears the table previously rendered, allowing you to re-render the table in your render function.
};

// ------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------
// DEPRECATED
// ------------------------------------------------------------------------------------------------------------
// function generateList () {
//   // Output destination
//   var ulEl = document.getElementById('listFirstAndPike');
//
//   // Append Hourly Sales
//   for(var i=0; i < this.salesPerHour.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = this.salesPerHour[i];
//     ulEl.appendChild(liEl);
//   }
//   // Output Totals
//   var totalEl = document.createElement('li');
//   totalEl.textContent = 'Total: ' + this.dailyTotal;
//   ulEl.appendChild(totalEl);
// }