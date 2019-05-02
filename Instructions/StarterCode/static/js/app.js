// from data.js
var tableData = data;


function handleSearch() {
    // Prevent the page from refreshing
        d3.event.preventDefault();
        var dateSearch = d3.select("#filter-btn").node().value;
        console.log(dateSearch);

        // Create Table
        createTable(dateSearch);
    
        // clear the input value
        d3.select("#filter-btn").node().value = "";
    
    };

// Pull tbody element, input fields, and buttons
var tbody = document.querySelector("tbody");
var date = document.querySelector("#date");
var city = document.querySelector("#city");
var state = document.querySelector("#state");
var country = document.querySelector("#country");
var shape = document.querySelector("#shape");
var searchButton = document.querySelector("#search");
var resetButton = document.querySelector("#reset");

function createTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
        var sighting = tableData[i];
        var fields = Object.keys(sighting);
        var $row = tbody.insertRow(i);
    
        for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sighting[field];
        }
    }

    };


// Add event listener for submit button
d3.select("#submit").on("click", handleSearch);
//d3.event.preventDefault();
// Create the table for initial page load
createTable();
