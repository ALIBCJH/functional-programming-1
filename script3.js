// FUNCTIONAL PROGRAMMING
// PURE FUNCTION
function great (name){
  return "Hi i'm  "  + name;
}
great("Simon Juma");
console.log(great("Simon Juma"));

//IMPURE FUNCTION
function greet (name) {
   return "Hi I'm  "  + name;
}
greet("Engineer Juma");
console.log(greet("Engineer Juma"));

//Normal way of working with functions
let score = 456;
function addBonus(){
    score = score + 45;
    return score;
}
addBonus(score);
console.log(addBonus(score + 45));

//Functional Programming
 let score = 500;
function addBonus (score){
    return score + 45;
}
addBonus("score");
console.log(addBonus(score));