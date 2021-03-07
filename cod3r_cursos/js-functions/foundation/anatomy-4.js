// Anonymous function
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
    let x = 3;
    console.log(`Result ${a + b + c}`);  // 6
    console.log(x);                      // 3
})(1, 2, 3);

(function (a, b, c) {
    let x = 300;
    console.log(`Result ${a + b + c}`);  // 6
    console.log(x);                      // 300
})(1, 2, 3);

(function () {
    let x = 300;
    console.log(x);                      // 300
})();

(() => { console.log("arrow #01"); })(); // arrow #01
(() => console.log("arrow #02"))();      // arrow #02