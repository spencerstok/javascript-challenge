// from data.js
var tableData = data;

// This will grab the tbody element
var table=d3.select("tbody")

// Logical way would be to loop through each dictionary
// Extract the datapoints and put in table as a single row
function make_table(data){
    //dont forget to erase old table
    table.html("");
    data.forEach((table_row) => {
        // First create tr object (to signify new row)
    var row = table.append("tr");
//We want to append our td to each tr
Object.values(table_row).forEach((val) => {
    var cell = row.append("td");
    cell.text(val)
});
    }
    );
}


//Making input logic

// This will grab the opject  -- .prop will allow us to grab user input
function on_click(){
var input_date = d3.select('#datetime').property("value");
var new_data = tableData;
new_data = new_data.filter(table_row =>table_row.datetime == input_date)
make_table(new_data);
}

d3.select('#filter-btn').on("click", on_click);
d3.select('#filter-btn').on("return", on_click);
make_table(tableData);