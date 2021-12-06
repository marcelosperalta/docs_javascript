const top_programm_lang = ["JavaScript", "Python", "PHP"];
const favor_programm_lang = top_programm_lang[0];
console.log(favor_programm_lang); // JavaScript

// destructuring
const top_programm_lang = ["JavaScript", "Python", "PHP"];
const [favor_programm_lang] = top_programm_lang;
console.log(favor_programm_lang); // JavaScript

const top_programm_lang = ["JavaScript", "Python", "PHP"];
const [,,favor_programm_lang] = top_programm_lang;
console.log(favor_programm_lang); // PHP

// swapping
const top_programm_lang = ["JavaScript", "Python", "PHP"];
let [favor_programm_lang1, favor_programm_lang2] = top_programm_lang;
console.log(favor_programm_lang1); // JavaScript
console.log(favor_programm_lang2); // Python
[favor_programm_lang1, favor_programm_lang2] = [favor_programm_lang2, favor_programm_lang1];
console.log(favor_programm_lang1); // Python
console.log(favor_programm_lang2); // JavaScript
