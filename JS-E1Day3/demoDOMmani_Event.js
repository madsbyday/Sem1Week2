// 1
div1 = document.getElementById("d1");
div2 = document.getElementById("d2");
div3 = document.getElementById("d3");

function colorDivs() {
    this.div1.style.backgroundColor = 'red';
    this.div2.style.backgroundColor = 'blue';
    this.div3.style.backgroundColor = 'green';
}

// 2
divb1 = document.getElementById("b1");
divb2 = document.getElementById("b2");


divb1.onclick = function () {
    alert("hello from div1");
    console.log("hi from div1");
}
divb2.onclick = function () {
    alert("hello from div2");
    console.log("hi from div2");
}

function insertChild(div) {
    for (i = 0; i < 10; i++) {
    var element = document.createElement("div");
    element.className = "mydiv";

       console.log(document.getElementById(div).appendChild(element));
    }
}
insertChild("outher");
// 3
function insertParagraph() {
    var element = document.createElement("p");
}

var iname = document.getElementById("textbox").value;

persons = persons.join(" ")

document.getElementById("myBtn").addEventListener("click",
    toUllist(persons,addTolist(iname, persons),iname)
);