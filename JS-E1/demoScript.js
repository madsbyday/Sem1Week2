function Exercise () {
    // a
    var boys = ["peter", "lars", "ole"];
    var girls = ["janne", "hanne", "sanne"];
    // b & c
    var all = boys.concat(girls);
    // var all = boys.concat(girls).join('-');
    
    // d
    all.push("lone", "gitte");
    // e
    all.unshift("hans", "kurt");

    // f
    all.shift(1);

    // g
    all.pop(1);

    // h
    all.splice(3,2);

    // i
    all.reverse();

    // j
    all.sort();

    // l
    all = all.map(function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    });

    return all;
}
// document.getElementById("demo").innerHTML = Exercise().join(', ');
console.log(Exercise());