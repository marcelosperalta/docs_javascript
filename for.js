for (let index = 0; index < 5; index++) {
    console.log(index);
}
// expected output: 0
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// expected output: 5

console.log("-----");

for (let index = 0; index < 10; index++) {
    if (index == 3) {
        console.log("3");
    }
}
// expected output: 3