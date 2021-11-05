// Create a Basic JavaScript Object

let duck = {
    name: "Aflac",
    numLegs: 2
  };

    // // Test
    // Create a dog object with name and numLegs properties,
    // and set them to a string and a number, respectively.

    let dog = {
        name: "Chip",
        numLegs: 4
    };
    console.log(dog); // { name: 'Chip', numLegs: 4 }


// Use Dot Notation to Access the Properties of an Object

let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);

    // // Test
    // Print both properties of the dog object to your console.
    let dog = {
      name: "Spot",
      numLegs: 4
    };
    console.log(dog.name, dog.numLegs); // Spot 4


// Create a Method on an Object

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();

    // // Test
    // Using the dog object, give it a method called sayLegs. 
    // The method should return the sentence This dog has 4 legs.
    let dog = {
      name: "Spot",
      numLegs: 4,
      sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
    };
    console.log(dog.sayLegs());

    //or
    let dog = {
      name: "Spot",
      numLegs: 4,
      sayLegs: function() {return `This dog has ${dog.numLegs} legs.`}
    };
    console.log(dog.sayLegs());


// Make Code More Reusable with the this Keyword

// sayName: function() {return "The name of this duck is " + duck.name + ".";}

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

    // // Test
    // Modify the "dog.sayLegs" method to remove any references to "dog". 
    // Use the "duck" example for guidance.
    let dog = {
      name: "Spot",
      numLegs: 4,
//    sayLegs: function() {return "This dog has " +  dog.numLegs + " legs.";}
      sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
    };
    console.log(dog.sayLegs()); // This dog has 4 legs.


// Define a Constructor Function

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

    // // Test
    // Create a constructor, Dog, with properties name, color, 
    // and numLegs that are set to a string, a string, 
    // and a number, respectively.
    function Dog() {
      this.name = "Rex";
      this.color = "White";
      this.numLegs = 4;
    }


// Use a Constructor to Create Objects

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}
let blueBird = new Bird();

console.log(blueBird.name);    // Albert
console.log(blueBird.color);   // blue
console.log(blueBird.numLegs); // 2

blueBird.name = 'Elvira';
console.log(blueBird.name);    // Elvira
console.log(blueBird)          // Bird { name: 'Elvira', color: 'blue', numLegs: 2 }

    // // Test
    // Use the "Dog" constructor from the last lesson to create a new instance of ""Dog"", 
    // assigning it to a variable "hound".
    function Dog() {
      this.name = "Rupert";
      this.color = "brown";
      this.numLegs = 4;
    }
    let hound = new Dog();
    console.log(hound); // Dog { name: 'Rupert', color: 'brown', numLegs: 4 }


// Extend Constructors to Receive Arguments

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

cardinal.name
cardinal.color
cardinal.numLegs

    // // Test
    // Create another "Dog" constructor. This time, set it up to take the parameters "name" and "color", 
    // and have the property "numLegs" fixed at 4. Then create a new "Dog" saved in a variable "terrier". 
    // Pass it two strings as arguments for the "name" and "color" properties.

    function Dog(name, color) {
      this.name = name;
      this.color = color;
      this.numLegs = 4;
    }
    let terrier = new Dog("Rex", "Black");
    console.log(terrier); // Dog { name: 'Rex', color: 'Black', numLegs: 4 }


// Verify an Object's Constructor with instanceof

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
let crow = new Bird("Alexis", "black");
console.log(crow instanceof Bird);   // true

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};
console.log(canary instanceof Bird); // false

    // // Test
    // Create a new instance of the "House" constructor, 
    // calling it "myHouse" and passing a number of bedrooms. 
    // Then, use "instanceof" to verify that it is an instance of "House".

    function House(numBedrooms) {
      this.numBedrooms = numBedrooms;
    }
    let myHouse = new House(3);
    console.log(myHouse instanceof House); // true


// Understand Own Properties

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}
let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // [ 'name', 'numLegs' ]

    // // Test
    // Add the own properties of "canary" to the array "ownProps".
    function Bird(name) {
      this.name = name;
      this.numLegs = 2;
    }
    
    let canary = new Bird("Tweety");
    let ownProps = [];
    for (let property in canary){
      if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
      }
    }
    console.log(ownProps); // [ 'name', 'numLegs' ]


// Use Prototype Properties to Reduce Duplicate Code

Bird.prototype.numLegs = 2;
console.log(duck.numLegs);
console.log(canary.numLegs);

    // // Test
    // Add a numLegs property to the prototype of Dog
    function Dog(name) {
      this.name = name;
    }
    Dog.prototype.numLegs = 4;
    let beagle = new Dog("Snoopy");
    console.log(beagle);         // Dog { name: 'Snoopy' }
    console.log(beagle.numLegs); // 4


// Iterate Over All Properties

function Bird(name) {
  this.name = name;  //own property
}
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps);       // [ 'name' ]
console.log(prototypeProps); // [ 'numLegs' ]

    // // Test
    // Add all of the own properties of "beagle" to the array "ownProps". 
    // Add all of the "prototype" properties of "Dog" to the array "prototypeProps".

    function Dog(name) {
      this.name = name;
    }
    Dog.prototype.numLegs = 4;
    let beagle = new Dog("Snoopy");

    let ownProps = [];
    let prototypeProps = [];

    for (let property in beagle) {
      if(beagle.hasOwnProperty(property)) {
        ownProps.push(property);
      } else {
        prototypeProps.push(property)
      }
    }
    console.log(ownProps);       // [ 'name' ]
    console.log(prototypeProps); // [ 'numLegs' ]


// Understand the Constructor Property

    // // Test
    // Write a ""joinDogFraternity"" function that takes a ""candidate"" parameter and, 
    // using the "constructor" property, return "true" if the candidate is a "Dog", 
    // otherwise return "false".
    function Dog(name) {
      this.name = name;
    }
    function joinDogFraternity(candidate) {
      if(candidate.constructor === Dog) {
        return console.log(true);
      } else {
        return console.log(false);
      }
    }
    joinDogFraternity("Max"); // false


// Change the Prototype to a New Object

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

    // // Test
    // Add the property numLegs and the two methods eat() 
    // and describe() to the prototype of Dog by setting the prototype to a new object.
    function Dog(name) {
      this.name = name;
    }
    Dog.prototype = {
      numLegs: 2,
      eat: function(){
        console.log("eating");
      },
      describe: function(){
        console.log(`I have ${this.numLegs} legs`);
      }
    };


// Remember to Set the Constructor Property when Changing the Prototype

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

    // // Test
    // Define the "constructor" property on the "Dog" "prototype".
    function Dog(name) {
      this.name = name;
    }
    Dog.prototype = {
      constructor: Dog,
      numLegs: 4,
      eat: function() {
        console.log("nom nom nom");
      },
      describe: function() {
        console.log("My name is " + this.name);
      }
    };


// Understand Where an Object’s Prototype Comes From

    // // Test
    // Use "isPrototypeOf" to check the "prototype" of "beagle".
    function Dog(name) {
      this.name = name;
    }
    let beagle = new Dog("Snoopy");
    console.log(Dog.prototype.isPrototypeOf(beagle)); // true


// Understand the Prototype Chain

    // // Test
    function Dog(name) {
      this.name = name;
    }
    
    let beagle = new Dog("Snoopy");
    Dog.prototype.isPrototypeOf(beagle);  // yields true
    Object.prototype.isPrototypeOf(Dog.prototype);


// Use Inheritance So You Don't Repeat Yourself

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};


    // // Test
    // The "eat" method is repeated in both "Cat" and "Bear". 
    // Edit the code in the spirit of DRY by moving the "eat" method to the "Animal" supertype.
    function Cat(name) {
      this.name = name;
    }
    
    Cat.prototype = {
      constructor: Cat,
      eat: function() {
        console.log("nom nom nom");
      }
    };
    
    function Bear(name) {
      this.name = name;
    }
    
    Bear.prototype = {
      constructor: Bear,
      eat: function() {
        console.log("nom nom nom");
      }
    };
    
    function Animal() { }
    
    Animal.prototype = {
      constructor: Animal,
    
    };

      // Solution
      function Cat(name) {
        this.name = name;
      }
      
      Cat.prototype = {
        constructor: Cat,
      };
      
      function Bear(name) {
        this.name = name;
      }
      
      Bear.prototype = {
        constructor: Bear,
      };
      
      function Animal() { }
      
      Animal.prototype = {
        constructor: Animal,
        eat: function() {
          console.log("nom nom nom");
        }
      };


// Inherit Behaviors from a Supertype

    // // Test
    // Use Object.create to make two instances of Animal named duck and beagle.
    function Animal() { }
    Animal.prototype = {
      constructor: Animal,
      eat: function() {
        console.log("nom nom nom");
      }
    };
    let duck  = Object.create(Animal.prototype);
    let beagle = Object.create(Animal.prototype);


// Set the Child's Prototype to an Instance of the Parent

    // // Test
    // Modify the code so that instances of Dog inherit from Animal.
    function Animal() { }
    Animal.prototype = {
      constructor: Animal,
      eat: function() {
        console.log("nom nom nom");
      }
    };
    function Dog() { }
    Dog.prototype = Object.create(Animal.prototype)
    let beagle = new Dog();


// Reset an Inherited Constructor Property

    // // Test
    // Fix the code so ``duck.constructor`` and ``beagle.constructor`` 
    // return their respective constructors.
    function Animal() { }
    function Bird() { }
    function Dog() { }

    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);

    // Only change code below this line



    let duck = new Bird();
    let beagle = new Dog();