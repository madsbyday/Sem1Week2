//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}
var sub = function (n1, n2) {
    return n1 - n2
}
var mul = function (n1, n2) {
    return n1 * n2
}
var divi = function(n1, n2) {
    return n1 / n2
}
var cb = function (n1, n2, callback) {
    if (typeof n1 != "number" || typeof callback != "function") {
        try {
            throw new Error('Whoops! problem with number or function');
        }
        catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    }
    else {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    }
};
console.log(add(1, 2))
console.log(add)
console.log(add(1, 2, 3));
console.log(add(1));
console.log(cb(3, 3, add));
console.log(cb(4, 3, sub));
console.log(cb(3,3,add()));
console.log(cb(3, "hh", add));
console.log(cb(5, 6, mul));
console.log(cb(8, 2, divi));