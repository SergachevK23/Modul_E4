const Auto = {
    name: 'Mazda',
    model: '3',
    year: 2019,
    body_type: 'sedan',
};

console.log(isProperty(Auto, 'body_type'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}
