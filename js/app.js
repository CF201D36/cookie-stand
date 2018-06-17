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

  // Store a reference to each new instance in a global 'myStores' array
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
    this.salesPerHour.push(dailySales);
  }
};

//-----------------------------------------------------------------
Store.buildTable = function () {
  // Generate Table Header
  Store.renderTableHeader();

  // Generate Table Body
  for(var i=0; i < myStores.length; i++) {
    console.log('Rendering table for: ' + myStores[i].location);
    myStores[i].cookieSales(myStores[i].custMin,myStores[i].custMax);
    myStores[i].renderTableBody();
  }

  // Generate Table Footer
  Store.renderTableFooter();
};

//-----------------------------------------------------------------
Store.renderTableHeader = function () {
  // Fetch table element
  var tHead  = document.getElementById('table-sales-header');

  // Create header row (parent)
  var hrEl = document.createElement('tr');
  tHead.appendChild(hrEl);

  // Create header data (location)
  var tdBlank = document.createElement('td');
  tdBlank.textContent = 'Location';
  hrEl.appendChild(tdBlank);

  // Create header data (hours)
  for(var i=0; i < myHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = myHours[i];
    hrEl.appendChild(thEl);
  }

  // Create header data (sumtotals)
  var tdSumTotal = document.createElement('td');
  tdSumTotal.textContent = 'Totals';
  hrEl.appendChild(tdSumTotal);
};

//-----------------------------------------------------------------
Store.prototype.renderTableBody = function () {
  // Fetch table
  var tBody = document.getElementById('table-sales-body');

  // Create table row
  var trEl = document.createElement('tr');
  tBody.appendChild(trEl);

  // Create table data (location)
  var tdLoc = document.createElement('td');
  tdLoc.textContent = this.location;
  trEl.appendChild(tdLoc);

  // Create table data (hours)
  for (var i=0; i < myHours.length; i++) {
    var tdHours = document.createElement('td');
    tdHours.textContent = this.salesPerHour[i];
    trEl.appendChild(tdHours);
  }

  // Create table data (sumtotals)
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  trEl.appendChild(tdTotal);
};

//-----------------------------------------------------------------
Store.renderTableFooter = function () {
  // Fetch table
  var tFoot = document.getElementById('table-sales-footer');

  // Create table row
  var trEl = document.createElement('tr');
  tFoot.appendChild(trEl);

  // Create table data (location)
  var tdLoc = document.createElement('td');
  tdLoc.textContent = 'Totals';
  trEl.appendChild(tdLoc);

  // Create table data (daily total)
  for (var h=0; h < myHours.length; h++) {
    var hourlyTotal = 0;
    for (var i=0; i < myStores.length; i++) {
      hourlyTotal += myStores[i].salesPerHour[h];
    }
    var tdDaily = document.createElement('td');
    tdDaily.textContent = hourlyTotal;
    trEl.appendChild(tdDaily);
  }

  // Create table data (grand total)
  var grandTotal = 0;
  for (var i=0; i < myStores.length; i++) {
    grandTotal += myStores[i].dailyTotal;
  }
  var tdTotal = document.createElement('td')
  tdTotal.textContent = grandTotal;
  trEl.appendChild(tdTotal);
};

//-----------------------------------------------------------------
Store.addNewStore = function(event) { // event is a parameter that actually specifies the item being passed -- but it's just a variable.
  event.preventDefault(); // do not refresh page
  var newStoreLocation  = event.target.storeLocation.value;
  var newCustMin        = event.target.storeCustMin.value;
  var newCustMax        = event.target.storeCustMax.value;
  var newAvgSalePerCust = event.target.storeAvgSalePerCust.value;

  new Store(newStoreLocation,newCustMin,newCustMax, newAvgSalePerCust);
  Store.innerHTML = ' '; // clears the table previously rendered, allowing you to re-render the table in your render function.
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

// Bind event listener to form
// Store.Form.addEventListener('submit', Store.addNewStore);

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