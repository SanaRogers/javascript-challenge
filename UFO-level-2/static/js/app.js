//calling data from provided file
showData(data);
d3.selectAll('input').on('change', handleChange);
d3.select('button').on('click', handleClick); //assigning action to 'clear' button

//looping through data and adding data to cells in existing table
function showData(data) {
    d3.select('tbody').html('');

    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            row.append('td').text(val);
        });
    });
};

//declaring an empty array globally - outside the loop - to be used anywhere in code
var filteredData = [ ...data];

function handleChange(data) {
    var key = d3.select(this).property('id');  //grabs the active input tag and id
    var val = d3.select(this).property('value'); //grabs the value from the active input html tag

//filters based on inputs
    filteredData = filteredData.filter(obj=>obj[key]== val);
    showData(filteredData); //rebuilding table based on the filters
};

//when 'clear' button is clicked, page is cleared
function handleClick() {
    d3.selectAll('input').property('value','');
    filteredData = [ ...data];
    showData(filteredData);
};