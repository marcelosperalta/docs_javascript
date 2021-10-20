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