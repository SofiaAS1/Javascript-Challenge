// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var btn = d3.select('button');

renderTable(tableData);

btn.on("click", handleClick);

function handleClick() {
    // console.log('Hello');
    d3.event.preventDefault();
    var filteredData = tableData;
    var input = d3.select('#datetime');
    var inputval = input.property("value");
    filteredData = tableData.filter(row => row.datetime === inputval);
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


