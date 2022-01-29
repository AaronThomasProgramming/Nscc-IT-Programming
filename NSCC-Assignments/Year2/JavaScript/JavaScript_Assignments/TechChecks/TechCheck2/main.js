// Using the data retrieved from the API Endpoint, 
// write a function called 'getPopulation' that returns the total population
// for all countries that BOTH border China
// and list English as one of their official languages

//NOTE: You are NOT permitted to use FOR, FOREACH, FOR OF or WHILE loops of any kind.
//      You must leverage the available JavaScript Array Iteration Functions to accomplish your goal.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// MARKING
// 10/10 - Function is completed to spec and submitted within class time
//  8/10 - Function is completed to spec and submitted within grace period of twelve hours of end of class time
//  6/10 - Function is completed to spec and submitted after twelve-hour grace period
//  0/10 - Function is not completed


(function(test){

    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(json => {
            //DO NOT MODIFY THIS CODE
            document.write(`The total population of countries that border China and list English as an official language is ${getPopulation(json)}`)
            test.run(getPopulation(json)) // will output test result to browser console
        })

    // WRITE YOUR getPopulation FUNCTION BELOW
    // |           |             |           |
    // V           V             V           V
	function getPopulation(json) { 

        var arr = json;
        let sss = arr.filter(obj => obj.languages.some(cat => cat.name === "English"))
        .filter(g=>g.borders.includes("CHN")).map(c=>c.population);
        console.log(sss);
        function addEm(acc, currentValue){
			return(acc + currentValue);
		}
		return(sss.reduce(addEm,0));

	}




})(test);
