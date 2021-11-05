# Object Oriented Programming

_source:_  
**freeCodeCamp**  
:link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures#object-oriented-programming  

**OOP**, or **Object Oriented Programming**, is one of the major approaches to the software development process. In OOP, **objects** and **classes** organize code to describe things and what they can do.  

In this course, you'll learn the basic principles of OOP in JavaScript, including the **``this``** keyword, **prototype chains**, **constructors**, and **inheritance**.  

## Create a Basic JavaScript Object

Think about things people see every day, like cars, shops, and birds. These are all **objects**: tangible things people can observe and interact with.  

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.  

These qualities, or **properties**, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.  

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a ``duck`` object:  

```
let duck = {
  name: "Aflac",
  numLegs: 2
};
```
This duck object has _two_ **property/value** _pairs_: a ``name`` of ``Aflac`` and a ``numLegs`` of ``2``.  

## Use Dot Notation to Access the Properties of an Object

```
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

## Create a Method on an Object

Objects can have a special type of property, called a **method**.  

**Methods** are properties that are functions. This adds different behavior to an object. Here is the ``duck`` example with a method:  

````
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
````

The example adds the ``sayName`` method, which is a function that returns a sentence giving the name of the ``duck``. Notice that the method accessed the ``name`` property in the return statement using ``duck.name``. The next challenge will cover another way to do this.  

## Make Code More Reusable with the ``this`` Keyword

The last challenge introduced a method to the ``duck`` object. It used ``duck.name`` dot notation to access the value for the ``name`` property within the return statement:  

```
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.  

A way to avoid these issues is with the ``this`` keyword:  

```
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

``this`` is a deep topic, and the above example is only one way to use it. In the current context, ``this`` refers to the object that the method is associated with: ``duck``. If the object's name is changed to ``mallard``, it is not necessary to find all the references to ``duck`` in the code. It makes the code reusable and easier to read.  

## Define a Constructor Function

**Constructors** are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.  

Here is an example of a constructor:  

```
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

This constructor defines a ``Bird`` object with properties ``name``, ``color``, and ``numLegs`` set to Albert, blue, and 2, respectively. Constructors follow a few conventions:  

- Constructors are defined with a capitalized name to distinguish them from other functions that are not ``constructors``.
- Constructors use the keyword ``this`` to set properties of the object they will create. Inside the constructor, ``this`` refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as other functions might.

## Use a Constructor to Create Objects

Here's the Bird constructor from the previous challenge:  

```
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

NOTE: this inside the constructor always refers to the object being created.  

Notice that the ``new`` operator is used when calling a constructor. This tells JavaScript to create a new instance of ``Bird`` called ``blueBird``. Without the ``new`` operator, ``this`` inside the constructor would not point to the newly created object, giving unexpected results. Now ``blueBird`` has all the properties defined inside the ``Bird`` constructor:  

```
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

Just like any other object, its properties can be accessed and modified:  

```
blueBird.name = 'Elvira';
blueBird.name;
```

## Extend Constructors to Receive Arguments

The ``Bird`` and ``Dog`` constructors from the last challenge worked well. However, notice that all ``Birds`` that are created with the ``Bird`` constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:  

```
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different ``Bird`` objects, you can design your Bird constructor to accept parameters:  

```
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Then pass in the values as arguments to define each unique bird into the ``Bird`` constructor: ``let cardinal = new Bird("Bruce", "red");`` This gives a new instance of ``Bird`` with ``name`` and ``color`` properties set to ``Bruce`` and ``red``, respectively. The ``numLegs`` property is still set to 2. The ``cardinal`` has these properties:  

```
cardinal.name
cardinal.color
cardinal.numLegs
```

The constructor is more flexible. It's now possible to define the properties for each ``Bird`` at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.  

## Verify an Object's Constructor with instanceof

Anytime a constructor function creates a new object, that object is said to be an _instance_ of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:  

```
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

This ``instanceof`` method would return ``true``.  

If an object is created without using a constructor, ``instanceof`` will verify that it is not an instance of that constructor:  

````
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
````

This ``instanceof`` method would return ``false``.  

## Understand Own Properties

In the following example, the ``Bird`` constructor defines two properties: ``name`` and ``numLegs``:  

````
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
````

``name`` and ``numLegs`` are called _own properties_, because they are defined directly on the instance object. That means that ``duck`` and ``canary`` each has its own separate copy of these properties. In fact every instance of ``Bird`` will have its own copy of these properties. The following code adds all of the own properties of ``duck`` to the array ``ownProps``:  

````
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
````

The console would display the value ``["name", "numLegs"]``.  

## Use Prototype Properties to Reduce Duplicate Code

Since ``numLegs`` will probably have the same value for all instances of ``Bird``, you essentially have a duplicated variable ``numLegs`` inside each ``Bird`` instance.  

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.  

A better way is to use the ``prototype`` of ``Bird``. Properties in the ``prototype`` are shared among ALL instances of ``Bird``. Here's how to add ``numLegs`` to the ``Bird prototype``:  

````
Bird.prototype.numLegs = 2;
````

Now all instances of ``Bird`` have the ``numLegs`` property.  

````
console.log(duck.numLegs);
console.log(canary.numLegs);
````

Since all instances automatically have the properties on the ``prototype``, think of a ``prototype`` as a "recipe" for creating objects. Note that the ``prototype`` for ``duck`` and ``canary`` is part of the ``Bird`` constructor as ``Bird.prototype``. Nearly every object in JavaScript has a ``prototype`` property which is part of the constructor function that created it.  

## Iterate Over All Properties

You have now seen two kinds of properties: _own properties_ and ``prototype`` properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the ``prototype``.  

```
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Here is how you add ``duck``'s own properties to the array ``ownProps`` and ``prototype`` properties to the array ``prototypeProps``:  

```
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
```

``console.log(ownProps)`` would display ``["name"]`` in the console, and ``console.log(prototypeProps)`` would display ``["numLegs"]``.  

## Understand the Constructor Property



## Change the Prototype to a New Object

```
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

## Remember to Set the Constructor Property when Changing the Prototype

``constructor``

```
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
```

## Understand Where an Object’s Prototype Comes From

``isPrototypeOf``  

## Understand the Prototype Chain

``Object.prototype``  

## Use Inheritance So You Don't Repeat Yourself

There's a principle in programming called _Don't Repeat Yourself (DRY)_. The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.  

Notice in the example below that the ``describe`` method is shared by ``Bird`` and ``Dog``:  

```
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
```

The ``describe`` method is repeated in two places. The code can be edited to follow the DRY principle by creating a ``supertype`` (or parent) called ``Animal``:  

```
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Since ``Animal`` includes the ``describe`` method, you can remove it from ``Bird`` and ``Dog``:  

```
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

## Inherit Behaviors from a Supertype

It uses a technique called inheritance.  
This challenge covers the first step: make an instance of the supertype (or parent).  

```
let animal = Object.create(Animal.prototype);
```

## Set the Child's Prototype to an Instance of the Parent

This challenge covers the next step: set the ``prototype`` of the subtype (or child)—in this case, ``Bird``—to be an instance of ``Animal``.  `

```
Bird.prototype = Object.create(Animal.prototype);
```

## Reset an Inherited Constructor Property

