const Auto = {
    name: 'Mazda',
    model: '3',
    year: 2019,
    body_type: 'sedan',
};

getObjectValues(Auto);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}
