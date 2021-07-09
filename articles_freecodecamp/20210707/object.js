// An object is a collection of 
// data 
// or 
// key value pairs
// which consist of variables 
// and functions that you can access using dot notation.

// object:
        {
        //   Key: Value // Key + Value = Property
            name: John
             age: 20
        }

const phone = {
    brand: ['Samsung', 'Apple', 'Google'],
    quantity: [1, 2, 3],
    howManyGooglePhones: function(){
        alert("There are " + this.quantity[1] + ' ' + this.brand[2] + " phones available.");
    }
}
//   Dot notation
phone.howManyGooglePhones();
// Dot notation is where we can call 
// that key value pair (which is known as a property) 
// and pulls that information.