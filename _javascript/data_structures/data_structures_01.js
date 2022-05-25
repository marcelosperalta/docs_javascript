// A collection of the values 1, 2 and 3
const arr1 = [1, 2, 3]

// Each value is related to one another, in the sense that each is indexed in a position of the array
const indexOfTwo = arr1.indexOf(2)
console.log(arr1[indexOfTwo-1]) // 1
console.log(arr1[indexOfTwo+1]) // 3

// We can perform many operations on the array, like pushing new values into it
arr1.push(4)
console.log(arr1) // [1,2,3,4]


///////////////// // array
const arr2 = ['a', 'b', 'c', 'd']
console.log(arr2[2]) // c
console.log(arr2.length) // 4

const arr3 = ['store', 1, 'whatever', 2, 'you want', 3]
const arr4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]


///////////////// Objects (hash tables)
const obj1 = {
    prop1: "I'm",
    prop2: "an",
    prop3: "object"
}

const obj2 = {
    prop1: "Hello!",
    prop3: function() {console.log("I'm a property dude!")
}}


///////////////// Stacks
//// LIFO pattern (last in, first out)
// Some examples of stack usage are:
// - JavaScript's call stack.
// - Managing function invocations in various programming languages.
// - The undo/redo functionality many programs offer.

// Implement it like a list:

// We create a class for each node within the stack
class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value){
        this.value = value
        this.next = null
    }
}

// We create a class for the stack
class Stack {
    // The stack has three properties, the first node, the last node and the stack size
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    // The push method receives a value and adds it to the "top" of the stack
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    // The pop method eliminates the element at the "top" of the stack and returns its value
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const stck = new Stack

stck.push("value1")
stck.push("value2")
stck.push("value3")

console.log(stck.first) /* 
        Node {
        value: 'value3',
        next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
        }
    */
console.log(stck.last) // Node { value: 'value1', next: null }
console.log(stck.size) // 3

stck.push("value4")
console.log(stck.pop()) // value4


///////////////// Trees
//// parent/child relationship
// Some examples of tree usage in programming are:
// - The DOM model.
// - Situation analysis in artificial intelligence.
// - File folders in operating systems.

        // Binary trees
        // maximum of two children.

        // Heaps
        // MaxHeaps and MinHeaps


///////////////// Graphs
// Graphs are data structures often useful for:
// - Social networks
// - Geolocalizaton
// - Recommendation systems

        // Undirected and directed graphs

        // Weighted and unweighted graphs