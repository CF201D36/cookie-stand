// ------------------------------------------------------------------------------------------------------------
// SETUP
// ------------------------------------------------------------------------------------------------------------
// Safety Goggles ON!
'use strict';

// Global Vartiables
// var myDays  = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
var myHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];

// Store Data
var myStore1 = {
  location: '1st and Pike',
  custMin: 23,
  custMax: 65,
  avgSalePerCust: 6.3,
  salesPerHour: [],
  dailyTotal: 0,

  custActivity: function (cMin, cMax) {
    // Cycle through each hour
    for(var i=0; i < myHours.length; i++) {
      // Generate a random customer traffic total for each hour
      var randNum = Math.round(Math.random() * (cMax - cMin) + cMin);

      // Generate sales data based on customer traffic
      var dailySales = Math.round(this.avgSalePerCust * randNum);
      this.dailyTotal += dailySales;

      // Add hourly sales data to 'salesPerHour' array
      this.salesPerHour.push(myHours[i] + ': ' + dailySales + ' cookies');
    }
  },
  generateList: function() {
    // Output destination
    var ulEl = document.getElementById('listFirstAndPike');

    // Append Hourly Sales
    for(var i=0; i < this.salesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.salesPerHour[i];
      ulEl.appendChild(liEl);
    }
    // Output Totals
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal;
    ulEl.appendChild(totalEl);
  }
};

var myStore2 = {
  location: 'SeaTac Airport',
  custMin: 3,
  custMax: 24,
  avgSalePerCust: 1.2,
  salesPerHour: [],
  dailyTotal: 0,

  custActivity: function (cMin, cMax) {
    // Cycle through each hour
    for(var i=0; i < myHours.length; i++) {
      // Generate a random customer traffic total for each hour
      var randNum = Math.round(Math.random() * (cMax - cMin) + cMin);

      // Generate sales data based on customer traffic
      var dailySales = Math.round(this.avgSalePerCust * randNum);
      this.dailyTotal += dailySales;

      // Add hourly sales data to 'salesPerHour' array
      this.salesPerHour.push(myHours[i] + ': ' + dailySales + ' cookies');
    }
  },
  generateList: function() {
    // Output destination
    var ulEl = document.getElementById('listSeatacAirport');

    // Append Hourly Sales
    for (var i=0; i < this.salesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.salesPerHour[i];
      ulEl.appendChild(liEl);
    }
    //Output Totals
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal;
    ulEl.appendChild(totalEl);
  }
};

var myStore3 = {
  location: 'Seattle Center',
  custMin: 11,
  custMax: 38,
  avgSalePerCust: 3.7,
  salesPerHour: [],
  dailyTotal: 0,

  custActivity: function (cMin, cMax) {
    // Cycle through each hour
    for(var i=0; i < myHours.length; i++) {
      // Generate a random customer traffic total for each hour
      var randNum = Math.round(Math.random() * (cMax - cMin) + cMin);

      // Generate sales data based on customer traffic
      var dailySales = Math.round(this.avgSalePerCust * randNum);
      this.dailyTotal += dailySales;

      // Add hourly sales data to 'salesPerHour' array
      this.salesPerHour.push(myHours[i] + ': ' + dailySales + ' cookies');
    }
  },
  generateList: function() {
    // Output destination
    var ulEl = document.getElementById('listSeattleCenter');

    // Append Hourly Sales
    for (var i=0; i < this.salesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.salesPerHour[i];
      ulEl.appendChild(liEl);
    }
    //Output Totals
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal;
    ulEl.appendChild(totalEl);
  }
};

var myStore4 = {
  location: 'Capitol Hill',
  custMin: 20,
  custMax: 38,
  avgSalePerCust: 2.3,
  salesPerHour: [],
  dailyTotal: 0,

  custActivity: function (cMin, cMax) {
    // Cycle through each hour
    for(var i=0; i < myHours.length; i++) {
      // Generate a random customer traffic total for each hour
      var randNum = Math.round(Math.random() * (cMax - cMin) + cMin);

      // Generate sales data based on customer traffic
      var dailySales = Math.round(this.avgSalePerCust * randNum);
      this.dailyTotal += dailySales;

      // Add hourly sales data to 'salesPerHour' array
      this.salesPerHour.push(myHours[i] + ': ' + dailySales + ' cookies');
    }
  },
  generateList: function() {
    // Output destination
    var ulEl = document.getElementById('listCapitolHill');

    // Append Hourly Sales
    for (var i=0; i < this.salesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.salesPerHour[i];
      ulEl.appendChild(liEl);
    }
    //Output Totals
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal;
    ulEl.appendChild(totalEl);
  }
};

var myStore5 = {
  location: 'Alki',
  custMin: 2,
  custMax: 16,
  avgSalePerCust: 4.6,
  salesPerHour: [],
  dailyTotal: 0,

  custActivity: function (cMin, cMax) {
    // Cycle through each hour
    for(var i=0; i < myHours.length; i++) {
      // Generate a random customer traffic total for each hour
      var randNum = Math.round(Math.random() * (cMax - cMin) + cMin);

      // Generate sales data based on customer traffic
      var dailySales = Math.round(this.avgSalePerCust * randNum);
      this.dailyTotal += dailySales;

      // Add hourly sales data to 'salesPerHour' array
      this.salesPerHour.push(myHours[i] + ': ' + dailySales + ' cookies');
    }
  },
  generateList: function() {
    // Output destination
    var ulEl = document.getElementById('listAlki');

    // Append Hourly Sales
    for (var i=0; i < this.salesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.salesPerHour[i];
      ulEl.appendChild(liEl);
    }
    //Output Totals
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.dailyTotal;
    ulEl.appendChild(totalEl);
  }
};
// ------------------------------------------------------------------------------------------------------------
// Operations
// ------------------------------------------------------------------------------------------------------------
// Create an array of stores
var myStores = [myStore1,myStore2,myStore3,myStore4,myStore5];

// Generate sales data foreach location
for(var i=0; i<myStores.length; i++) {
  myStores[i].custActivity(myStores[i].custMin, myStores[i].custMax);
}

// Output sales data to 'sales.html' foreach location
for(var k=0; k<myStores.length; k++) {
  myStores[k].generateList();
}
// ------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------------------
// Coming soon!