/*
var names = ['Emily', 'Adam', 'Pepper', 'Nina'];

names.forEach(function(name) {
  console.log('forEach', name);
})

names.forEach((name) => console.log('arrowFunc', name))
*/
function add(a, b) {
  return a+b;
}

console.log(add(1,3));
console.log(add(9,0));

//addStatement

var addStatement = (a,b) => {a+b}

//addExpression
var addExpression = (a,b) => a+b
