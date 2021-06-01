var promise1 = Promise.resolve(3)
var promise2 = Promise.resolve(4)
var promise3 = Promise.resolve(4)

Promise.all([promise1, promise2, promise3])
.then(function(values){
    return console.log(values);
})

Promise.race([promise1, promise2, promise3])
.then(function(values){
    return console.log(values);
})