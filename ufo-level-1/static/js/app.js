// from data.js
var tableData = data;
//console.log(tableData);

//Build table with complete data to be rendered on the page 
var tableBody=d3.select('tbody');
//For every entry in the tableData
tableData.forEach(function(item){
    //Append a row in the table
    var row=tableBody.append("tr");
    //For every key value pair in the filtered data
    Object.entries(item).forEach(function([key, value]){
        //Append cells in each row
        var cell=row.append("td");
        //Enter the text in each cell
        cell.text(value);
        });
});


//Creating a table for filtered data upon event call based on an input value
//Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //Filter data based on the user input value
    var filteredData = tableData.filter(item => item.datetime === inputValue);
    //Select the table to output filtered data
    
    //Clear any data from the table to append new data upon every event of click
    tableBody.html("");
    //For every entry in the filtered data
    filteredData.forEach(function(ufo){
        //Append a row in the table
        var row=tableBody.append("tr");
        //For every key value pair in the filtered data
        Object.entries(ufo).forEach(function([key, value]){
            //Append cells in each row
            var cell=row.append("td");
            //Enter the text in each cell
            cell.text(value);
            });
        });
    
});
