showData(data);
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

function handleClick() {
    var date = d3.select('input').property('value');

    var filteredData = data.filter(obj => obj.datetime == date);
    showData(filteredData);
};