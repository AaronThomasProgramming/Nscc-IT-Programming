(function(tests){

    //MAKE SURE YOU FOLLOW THE STEPS BELOW AND DO THE FOUR(4) STEPS IN THE CORRECT ORDER

    const DATA_URL = "https://prog2700.netlify.app/json/dnaMap.json";
    const DNA_SEQUENCE = "GTGCCAATGTTACTGCTAAATCTCTATATACAGTGGCTTAAGGATGGGGGGCCCAGCAGCGGCCGACCCCCCCCCTCAGTGTGGAATCAACCGGAATTGAGG";
    
    // Function to extract Codons as a JavaScript Array from the DNA Sequence String.
    const extractCodonsFromDNA = function(dnaSequence)
    {
      var codons = []; //DO NOT MODIFY THIS LINE
      // STEP #1: ADD CODE TO COMPLETE THE FUNCTION HERE...
      // You'll get an error notification in the console until 
      // the function is completed correctly. Be sure to check 
      // what the expected result should be and write the function 
      // so that it returns that expected result.
      // The console will notify you when the function is working as expected.
      // |    |     |     |     |      |      |      |      |      |      |
      // V    V     V     V     V      V      V      V      V      V      V

      // Delete this line and write the code here
      
      //codons = DNA_SEQUENCE.match(/.{1,3}/g);
      //console.log(dnaSequence.match(/.{1,3}/g));
      codons = dnaSequence.match(/.{1,3}/g);
      // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
      // |    |     |     |     |      |      |      |      |      |      |
      return codons; //DO NOT MODIFY THIS LINE
    }
    
    const translateCodonsToAminos = function(codons, jsonData) 
    {
      let aminos = []; //DO NOT MODIFY THIS LINE
      // STEP #4: ADD CODE TO COMPLETE THE FUNCTION HERE...
      // For each codon in the 'codons' array, find a match in the 'jsonData'
      // When you've found a match, add the corresponding amino abbreviation to the 'aminos' array.
      // Be sure to check what the expected result is and write the function 
      // so that it returns that expected result.
      // The console will notify you when the function is working as expected.
      // Once you have this step completed, you've completed the Tech Check.
      // |    |     |     |     |      |      |      |      |      |      |
      // V    V     V     V     V      V      V      V      V      V      V

      // console.log("Trans");
      // console.log(jsonData);
            for(i = 0; i < codons.length; i++){
              for(j = 0; j < jsonData.length; j++){              
                for(k = 0; k < jsonData[j].codons.length; k++){              
                  if(codons[i] == jsonData[j].codons[k]){
                    aminos.push(jsonData[j].abbr)
                  }
                }
              }
            }
      // Delete this line and write the code here
      
      // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
      // |    |     |     |     |      |      |      |      |      |      |
      return aminos; //DO NOT MODIFY THIS LINE
    }

    const codons = extractCodonsFromDNA(DNA_SEQUENCE); //DO NOT MODIFY THIS LINE
    let aminos = []; //DO NOT MODIFY THIS LINE
      
    // STEP #2: WRITE CODE TO FETCH DATA USING THE PROVIDED JSON DATA URL.
    // YOU CAN CONFIRM THAT YOU'VE SUCCESSFULLY FETCHED THE DATA BY LOGGING IT TO THE CONSOLE
    // |    |     |     |     |      |      |      |      |      |      |
    // V    V     V     V     V      V      V      V      V      V      V
    fetch(DATA_URL)
    .then(response => response.json())
    .then(json => {
        //DO NOT MODIFY THIS CODE
        aminos = translateCodonsToAminos(codons, json); //DO NOT MODIFY THIS LINE...but you can uncomment and move it when directed to.
        tests.runTests(codons, aminos)
    })
    // WRITE YOUR getPopulation FUNCTION BELOW
    // |           |             |           |
    // V           V             V           V

    // Delete this line and write the code here

    // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
    // |    |     |     |     |      |      |      |      |      |      |

 
    // STEP #3: 
    // ONCE YOU HAVE YOUR API CALL WORKING, LOOK AT THE TWO LINES OF CODE BELOW. 
    // ONE LINE IS COMMENTED OUT (aminos = ...) AND THE OTHER ISN'T (test.runTests...). 
    // UNCOMMENT THE FIRST LINE AND MOVE BOTH LINES INTO THE BODY OF THE
    // CALLBACK FUNCTION YOU WROTE ABOVE IN TODO #2 WHERE YOU'RE ABLE
    // TO ACCESS YOUR JSON DATA FROM YOUR API CALL...
    // |    |     |     |     |      |      |      |      |      |      |
    // V    V     V     V     V      V      V      V      V      V      V

    //aminos = translateCodonsToAminos(codons, json); //DO NOT MODIFY THIS LINE...but you can uncomment and move it when directed to.
    //tests.runTests(codons, aminos) //DO NOT MODIFY THIS LINE...but you can move it when directed to.

    // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
    // |    |     |     |     |      |      |      |      |      |      |

  })(tests);
