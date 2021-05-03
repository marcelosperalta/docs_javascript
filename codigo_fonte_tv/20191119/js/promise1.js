let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p
.then((message) => {
    console.log("This is in the then " + message);
})
.catch((err) => {
    console.log("This is the catch " + err);
})