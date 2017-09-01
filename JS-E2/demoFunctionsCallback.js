var persons = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

var filterP = persons.filter(function (element) { return element.length === 3 });

console.log("---normal array---");
persons.forEach(function (e) { console.log(e) });
console.log("---filter array---");
filterP.forEach(function (e) { console.log(e) });

function toUp() {
    persons = persons.map(function (str) {
        return str.toUpperCase();
    });
    return persons;
}
console.log(toUp());

persons = persons.map(function (str) {
    str = "<li>" + str + "</li>" + "\r\n";
    return str;
})
function addTolist(name, arr) {
    arr.push(name);
}
function toUllist(arr, callback, name) {
    callback(arr, name);
    return "<ul> \r\n" + arr + "</ul>";
}
console.log(toUllist(persons.join(" ")));


