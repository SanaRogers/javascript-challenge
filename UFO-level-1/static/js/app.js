//call data

showData(data);
d3.select('button').on('click', handleClick);

//call data to build table 
function showData(data) {
    d3.select('tbody').html('');

//build cells and add values to cells
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            row.append('td').text(val);
        });
    });
};

//taking the value that was typed in to use as a filter 
function handleClick() {
    var userdate = d3.select('input').property('value');

    var filteredData = data.filter(obj => obj.datetime == userdate);
    showData(filteredData);
};