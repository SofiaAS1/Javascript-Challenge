// from data.js
// Variables
var tableData = data;
var btn = d3.select('button');
var tbody = d3.select('tbody');
var form = d3.select('form');


renderTable(tableData);

btn.on("click", handleClick);
form.on("submit", handleClick);

function handleClick() {
    d3.event.preventDefault();
    var filteredData = tableData;
    var input = d3.select('#datetime');
    var inputval = input.property("value");
    filteredData = tableData.filter(row => row.datetime === inputval);
    console.log(filteredData);
    tbody.html("");
    renderTable(filteredData);
}

function renderTable(data) {
    data.forEach(obj => {
        var row = tbody.append('tr');
        Object.values(obj).forEach(val => {
            row.append('td').text(val);
        })
    });
};

 
