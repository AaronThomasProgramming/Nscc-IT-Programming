//get input for string
var userInput = prompt("Enter a string", "Hello world!")
//split string into array
var output = userInput.split('');
console.log(output);
//get last character index in array
var arrayLength = output.length - 1;
//if first and last characters not the same ignoring case pop and shift the array
if(output[0].toUpperCase() !== output[arrayLength].toUpperCase()){
    output.shift();
    output.pop();
    console.log("not match");
    console.log(output.join(""));
//if first and last characters are the same ignoring case reverse the string    
} else if(output[0].toUpperCase() === output[arrayLength].toUpperCase()){
    console.log("match");
    console.log(output.reverse().join(""));
}
