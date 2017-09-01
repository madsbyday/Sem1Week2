function Person(name){
    this.name = name;
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  //Explain this
    },2000);
  }
  //call it like this (do it, even if you know it’s silly ;-)
  Person("Kurt Wonnegut");  //This calls the function
  console.log("I'm global: "+ name);  //Explain this
  var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
  console.log("I'm global: "+ name);  //What’s different ?
  
  var greeter = function(){
    console.log(this.message);
  };
  var comp1 = { message: "Hello World" };
  var comp2 = { message: "Hi" };
  
  var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
  var g2 = greeter.bind(comp2 );//And here another “this”
  setTimeout(g1,500);
  setTimeout(g2,1000);
  

  var individual = {name: "hans", birthday: "February 21", hobby: "soccer", email: "hans@compuserve.dk"};

  delete individual.name;
  individual["age"] = 20;

  for (prop in individual) {
      console.log(prop,individual[prop]);
  }

  function createInd(iname, ib, ih, ie) {
    Char = new Char(iname, ib, ih, ie);
    for (prop in Char) {
      console.log(prop,Char[prop]);
  }
}
console.log(createInd("tom", "March 02", "tennis", "66@mail.com"));

function Char(iname, ib, ih, ie) {
    this.iname = iname;
    this.ib = ib;
    this.ih = ih;
    this.ie = ie;
}
