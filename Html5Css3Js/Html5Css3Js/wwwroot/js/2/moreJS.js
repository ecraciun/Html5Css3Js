// hoisting and scoping

var num = 7;
function demonstrateScopingAndHoisting() {
    if (true) {
        var num = 42;
    }
    alert("The value of num is " + num);
}

demonstrateScopingAndHoisting();

// namespaces and iife

(function () {
    // Variables defined inside the function disappear when the function finishes
    // - they will not conflict with variables defined by other scripts
    var localVar = "a";
    var localVar2 = 3;
    // The same logic applies to functions
    // - they are destroyed when the immediately invoked function finishes
    function localFunc() {
        localVar = 99;
        
    }
    localFunc(); // Run localFunc
})();


var MyNamespace = {
    myFunction1: function (someParameters) {
        // Implementation code…
    },
    myFunction2: function (someParameters) {
        // Implementation code…
    },
    message: "Hello World",
    count: 42
}

MyNamespace.myFunction1(1);
MyNamespace.message = "Goodbye all";

// strict mode
function someFunction() {
    "use strict";
    var errorCode = 100; // Declares a local variable named errorCode.
    count = 0; // Implicitly declares a global variable named count;
}

// singleton and global objects
var radius = 100 * Math.random();
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

var anObject = {
    oneProp: 300,
    anotherProp: "abcd"
};

var anObjectAsJsonString = JSON.stringify(anObject);
var anObjectAgain = JSON.parse(anObjectAsJsonString);


// custom objects

// simple objects

var employee1 = new Object();

var employee2 = {};

employee1.name = "John Smith";
employee1.age = 21;
employee1.salary = 10000;
employee1.payRise = function (amount) {
    // Inside a method, "this" means the current object.
    this.salary += amount;
    return this.salary;
}

var newSalary = employee1.payRise(1000);
document.write("New salary for employee1 is " + newSalary);

// object literal notation
var employee2 = {
    name: "Mary Jones",
    age: 42,
    salary: 20000,
    payRise: function (amount) {
        this.salary += amount;
        return this.salary;
    },
    displayDetails: function () {
        alert(this.name + " is " + this.age + " and earns " + this.salary);
    }
};

// constructors
var Account = function (id, name) {
    this.id = id;
    this.name = name;
    this.balance = 0;
    this.numTransactions = 0;
};

var acc1 = new Account(1, "John");
var acc2 = new Account(2, "Mary");

// prototypes
Account.prototype = {
    deposit: function (amount) {
        this.balance += amount;
        this.numTransactions++;
    },
    withdraw: function (amount) {
        this.balance -= amount;
        this.numTransactions++;
    },
    displayDetails: function () {
        alert(this.id + ", " +
            this.name + " balance $" +
            this.balance + " (" +
            this.numTransactions + " transactions)");
    }
};

var acc1 = new Account(1, "John");
var acc2 = new Account(2, "Mary");
acc1.deposit(100);
acc1.displayDetails();
acc2.withdraw(50);
acc2.displayDetails();

// Object.create

var obj1 = Object.create(null, {
    prop1: { value: "hello", writable: true }, // read/write property
    prop2: { value: "world" } // read-only property
});


// encapsulation
var Person = function (name, age) {
    // Private properties.
    var _name, _age;
    // Public methods defined in the constructor have access to private properties.
    this.getName = function () {
        return _name;
    }
    this.setName = function (name) {
        _name = name;
    }
    this.getAge = function () {
        return _age;
    }
    this.setAge = function (age) {
        if (age > 0 && age < 100)
            _age = age;
    }
    // Constructor logic.
    _name = name;
    this.setAge(age);
}
// Public methods defined in the prototype do not have access to private properties.
Person.prototype =
{
    toString: function () {
        return this.getName() + " is " + this.getAge();
    }
}
// External code.
var person1 = new Person("Joe", 21);
alert(person1.toString()); // Displays "Joe is 21"
alert(person1._name); // Displays "undefined"


// inheritance

// Base constructor.
var Person = function (name, age) {
    this.name = name;
    this.age = age;
}
// Base prototype.
Person.prototype = {
    haveBirthday: function () {
        this.age++;
    }
};
// Derived constructor.
var Student = function (name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
}
// Set the derived prototype to be the same object as the base prototype,
// and reset that derived prototype so that it uses the correct constructor.
Student.prototype = new Person();
Student.prototype.constructor = Student;
// Create a derived object and invoke any methods defined in the object or one of its
// parents. JavaScript uses prototype chaining to locate methods up the inheritance tree.
var aStudent = new Student("Jim", 20, "Physics");
aStudent.subject = "BioChemistry";
aStudent.haveBirthday();
alert(aStudent.age);

// adding functionality to an object
var Point = function (x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.moveBy = function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
}
Point.prototype.moveTo = function (otherPoint) {
    this.x = otherPoint.x;
    this.y = otherPoint.y;
}
var p1 = new Point(100, 200);
p1.moveBy(10, 20);
var p2 = new Point(25, 50);
p2.moveTo(p1);
alert("p2.x: " + p2.x + " p2.y: " + p2.y);