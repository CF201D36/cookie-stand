// ------------------------------------------------------------------------------------------------------------
// SETUP
// ------------------------------------------------------------------------------------------------------------
// Safety Goggles ON!
'use strict';

// Global Variables
// var myDays  = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
var myHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];
var stores  = [];
var myTable = document.getElementById('table');

// ------------------------------------------------------------------------------------------------------------
// CONSTRUCTOR OBJECTS
// ------------------------------------------------------------------------------------------------------------
// Store Object
function Store(myLoc, myMin, myMax, myAvg, salesPH, dailyT) {
  this.location = myLoc;
  this.custMin = myMin;
  this.custMax = myMax;
  this.avgSalePerCust = myAvg;
  this.salesPerHour = salesPH;
  this.dailyTotal = dailyT;
  stores.push(this);
}

// ------------------------------------------------------------------------------------------------------------
// CONSTRUCTOR METHODS
// ------------------------------------------------------------------------------------------------------------
// Render Table Rows
Store.prototype.renderRow = function () {
  // Create Elements
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  // Append Data to Cells
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  tdEl.textContent = this.custMin;
  trEl.appendChild(tdEl);
  tdEl.textContent = this.custMax;
  trEl.appendChild(tdEl);
  tdEl.textContent = this.avgSalePerCust;
  trEl.appendChild(tdEl);

  // Append Row to Table
  myTable.appendChild(trEl);
};

// Render Table Headers
Store.prototype.renderHeader = function () {
  var hrEl = document.createElement('tr');

  //Add blank cell to first TD element in Header
  hrEl.appendChild(thEl);

  // Add hours to Header
  for(var i=0; i < myHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = i;
    hrEl.appendChild(thEl);
  }

  // Append Header to Table
  myTable.appendChild(hrEl);
};

// Random Number Generator
Store.prototype.custActivity = function (cMin, cMax) {
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

// ------------------------------------------------------------------------------------------------------------
// OPERATIONS
// ------------------------------------------------------------------------------------------------------------
// Create and save new instances of 'Store'
var myStore1 = new Store('1st and Pike',   23, 65, 6.3, [], 0); // eslint-disable-line
var myStore2 = new Store('SeaTac Airport', 3,  24, 1.2, [], 0); // eslint-disable-line
var myStore3 = new Store('Seattle Center', 11, 38, 3.7, [], 0); // eslint-disable-line
var myStore4 = new Store('Capitol Hill',   20, 38, 2.3, [], 0); // eslint-disable-line
var myStore5 = new Store('Alki',           2,  16, 4.6, [], 0); // eslint-disable-line

// Create an array of stores
var myStores = [myStore1,myStore2,myStore3,myStore4,myStore5];

// Generate Customer Activity Data
for(var n=0; n<myStores.length; n++) {
  myStores[n].custActivity(myStores[n].custMin, myStores[n].custMax);
}

// Generate sales data foreach location
for(var i=0; i<myStores.length; i++) {
  myStores[i].custActivity(myStores[i].custMin, myStores[i].custMax);
}

// Output sales data to 'sales.html' foreach location
for(var k=0; k<myStores.length; k++) {
  myStores[k].renderHeader();
  myStores[k].renderRow();
}

// ------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------
// UNUSED CODE
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