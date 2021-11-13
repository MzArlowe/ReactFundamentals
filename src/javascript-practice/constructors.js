class User { // We name the class
    constructor(first, last, e) { // We call the constructor function and create parameters that will be passed in and stored in the object constructor
        this.f = first;
        this.l = last;
        this.email = e;
    }
    // On the right      ^ - (first, last, e, are values that will be passed in as arguments when the object is created
    //left   ^  (this.) - the keys of the object being created. It stores the incoming arguments from the newly created object as the value for "this" specific object.
}

let userOne = new User("Paul", "O'Conner", "poconner@elevenfifty.org");
console.log(userOne.first); // Undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Conner
console.log(userOne); // User {f: "Paul". l: "O'Conner", email: "poconner@elevenfifty.org"}

// Practice
class User {
    constructor(make, model, year) {
        this.mk = make;
        this.md = model;
        this.yr = year;
    }
}

let userType = new User("Honda", "Accord", "2003");
console.log(userType.civic); // Undefined
console.log(userType.mk); // Honda
console.log(userType.md); // Accord
console.log(userType.yr); // Year
