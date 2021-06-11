// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns);
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget);
    })
})