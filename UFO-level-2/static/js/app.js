// from data.js
// Variables
var tableData = data;
var btn = d3.select('#filter-btn');
var tbody = d3.select('tbody');
var clear = d3.select('#clear-btn');

renderTable(tableData);

btn.on("click", handleClick);

function handleClick() {
    d3.event.preventDefault();
    var filteredData = tableData;
    var input1 = d3.select('#asdf').property("value");
    var input2 = d3.select('#info2');
    if (input1 === "Date") {
        var inputval = input2.property("value");
        filteredData = tableData.filter(row => row.datetime === inputval);
        tbody.html("");}
    else if (input1 === "City") {
        var inputval = input2.property("value");
        filteredData = tableData.filter(row => row.city === inputval);
        tbody.html("");}
    else if (input1 === "State") {
        var inputval = input2.property("value");
        filteredData = tableData.filter(row => row.state === inputval);
        tbody.html("");}   
    else if (input1 === "Country") {
        var inputval = input2.property("value");
        filteredData = tableData.filter(row => row.country === inputval);
        tbody.html("");}
    else if (input1 === "Shape") {
        var inputval = input2.property("value");
        filteredData = tableData.filter(row => row.shape === inputval);
        tbody.html("");}
    console.log(filteredData);
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


 
