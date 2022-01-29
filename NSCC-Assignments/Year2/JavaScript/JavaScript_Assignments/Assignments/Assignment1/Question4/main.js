//empty array declared
let randomArray = new Array(10);
//insert random numbers between 1 - 100 into the array
for(let i = 0; i < randomArray.length; i++){
    randomArray[i] = Math.floor(Math.random() * 100) + 1;
    //call function to check if random number is prime or not
    prime(randomArray[i]);
}
//check if number is prime or not
// https://www.factmonster.com/math-science/mathematics/prime-numbers-facts-examples-table-of-all-up-to-1000#:~:text=To%20prove%20whether%20a%20number,number%20(see%20table%20below).
function prime(num) {
    for(var i = 2; i < num; i++)
    //check if num not prime
      if(num % i === 0){ 
          return console.log(num,"No");
          //num is prime
        }else{
            return console.log(num,"Yes");
        }
  }