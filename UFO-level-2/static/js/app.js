showData(data);
d3.selectAll('input').on('change', handleChange);
d3.select('button').on('click', handleClick);

function showData(data) {
    d3.select('tbody').html('');

    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            row.append('td').text(val);
        });
    });
};

var filteredData = [ ...data];

function handleChange(data) {
    var key = d3.select(this).property('id');
    var val = d3.select(this).property('value');

    filteredData = filteredData.filter(obj=>obj[key]== val);
    showData(filteredData);
};

function handleClick() {
    d3.selectAll('input').property('value','');
    filteredData = [ ...data];
    showData(filteredData);
};