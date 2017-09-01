var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function newerThan(element) {

    if (element.year > 1999) {
        return element;
    }
}
function allVolvos(element) {
    if (element.make == 'Volvo') {
        return element;
    }
}
function priceBelow(element) {
    if (element.price < 5000) {
        return element;
    }
}
function oneMethod(arr, callback) {
    return arr.filter(callback);
}
function toinsert(element) {
    var list = [element.id , element.year, element.make, element.model, element.price].join(", ")
    return "insert into cars (id, year, make, model, price) Values (" + list + ")"; 
}
function tomap() {
    cars = cars.map(toinsert)
    return cars;
}

var listPropertyNames = Object.keys(cars);

 console.log(listPropertyNames);

// console.log(cars.filter(newerThan));
// console.log(cars.filter(allVolvos));

// console.log(oneMethod(cars, priceBelow));
// console.log(tomap(cars).join("; "));

