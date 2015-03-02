var Car = function (make, model, color, balance) {
    this.make = make;
    this.model = model;
    this.color = color;
    var balance = balance;
    this.startEngine = function () {
        console.log("This car costs " + balance + " dollars.");
    }
}
Car.prototype.startEngine = function () {
    console.log("This car costs " + this.balance + " dollars.");
}

var addCar = function () {
    var make = document.getElementById('InputMake').value;
    var model = document.getElementById('InputModel').value;
    var color = document.getElementById('InputColor').value;
    var myCar = new Car(make, model, color, 10000);
    //myCar.func = function() {}
    myCar.startEngine();
    //myCar.__proto__ = null; //Removes the protype from the myCar object
    console.log(myCar);
    console.log(myCar.balance);
}
//Creates an object with no prototype
/*
var cat = Object.create(null);
cat.Name = "Mittens";
cat.Breed = "Siamese";
cat.Age = 3;
cat.Speak = function() {
    console.log("meow meow");
}
console.log(cat);
*/