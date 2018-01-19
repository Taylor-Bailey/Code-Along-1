console.log("henlo main.js")

// Identify A Variable
let skyIsBlue = true;
// Set up a conditional based on wether or not the sky is blue
if (skyIsBlue) {
    console.log("Yeah, the sky is blue.");
}else{
    console.log("Hmmm, what color is the sky?");
}
// If (not)skyIsBlue
if (!skyIsBlue) {
    console.log("Yeah, the sky is blue.");
}else{
    console.log("Hmmm, what color is the sky?");
}
// Array
let jedi = ["Skywalker","Yoda","Obi-wan","Qui-Gon","Windu"];
let jediText = "";

// add to end of array
jedi.push("Taylor");
// add to beginning of array
jedi.unshift("Jisie");
// removes from beginning of array
jedi.shift();
// removes from end of array
jedi.pop();

// Find the number of objects in the Array
console.log("howmany jedi", jedi.length);
// x is a counter, it has no relationship to the array
for (let x = 0; x < jedi.length; x++){
    console.log("what x ", x);
    console.log(jedi[x]);
// Print their names out on the DOM
// Concatination Method
    // jediText = "<li> What is this:? " + jedi[x] + "</li>"; 
// or BackTick Method- Temperate Literal String (Will give you the literal evaluation of whatever is inside the backticks)
    jediText += `<li> ${jedi[x]}</li>`;
// += will show all objects in the array
    console.log("jediText", jediText);
// This console log only shows the last object in the array, "Windu"
}

document.getElementById("demo").innerHTML = jediText;

let colors = ["red", "yellow", "blue", "green", "orange", "purple"];
// reverse takes your array and reverses it
let reverseColors = colors.reverse();
console.log("reverse colors", reverseColors);
// sort puts the array in alphabetical order
let sortedArray = colors.sort();
console.log("sorted colors", sortedArray);

// let numbers = [2, 4, 100, 30, 400, 583, 54, 20, 18];
// // let sortedNumbers = numbers.sort();
// // console.log("sorted numbers", sortedNumbers);
// let sortedNumbers = numbers.sort(function(first, second){
// console.log("first:", first, "second:", second);
// console.log("first minus second", first - second);
// console.log("change", numbers);
// return first - second;
// });

let joinedColors = colors.join(": ");
console.log(joinedColors);

// using slice takes the first element in the array (1, and the element before the last listed 3), so the 2nd element and 3rd element
let fruits = ["Peaches", "Oranges", "Lemons", "Bananas", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
console.log("citrus", citrus);
console.log("fruits", fruits);


let evenOdds = ["middle"];

for (let i =  100; i >= 0; i--){
    console.log(("i modulus"), i, i % 3);
    if (i % 2 === 0){
        evenOdds.unshift(i);
    }else{
        evenOdds.push(i);
    }
}

console.log("evenOdds", evenOdds);

















