(function(testFunction){
    /*
    * PHONEWORDS
    * Write a function that will take a phone word (vanity number) and return the correct telephone number.
    * The number pad looks like the following:
    * https://en.wikipedia.org/wiki/Telephone_keypad#/media/File:Telephone-keypad2.svg
    *
    * RULES
    * Given a phoneword:
    * 1. Ignore any non-alphanumeric characters (), -, etc.
    * 2. Keep any existing digits
    * 3. Resolve a letter to a number according to the keypad image
    * 4. All your code must be contained inside the 'convertPhoneWord' function shown below
    * 5. Your ultimate solution must work for ANY phoneword and not simply be implemented to cause the provided tests to pass.
    */


    var buttons = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"] //DO NOT MODIFY


    // YOU CAN ADD TO AND MODIFY THE CODE BELOW THIS LINE
    //   |
    //   V

var convertPhoneWord = function(phoneWord) {

        //Enter your code in this function body
    var input = phoneWord;
    //convert word to number if input is not null   
    if(input != null || input != undefined){
        var inputlength = input.length;
        input = input.toLowerCase();
        var phoneOutput = "";
        var inputArray = input.split('');
        for (i = 0; i < inputlength; i++) {
                var convertPhoneWord = inputArray[i];
                switch(convertPhoneWord) {
                case '0': phoneOutput+="0";break;
                case '1': phoneOutput+="1";break;
                case '2': phoneOutput+="2";break;
                case '3': phoneOutput+="3";break;
                case '4': phoneOutput+="4";break;
                case '5': phoneOutput+="5";break;
                case '6': phoneOutput+="6";break;
                case '7': phoneOutput+="7";break;
                case '8': phoneOutput+="8";break;
                case '9': phoneOutput+="9";break;
                case '-': phoneOutput+="";break;
                case  'a': case 'b': case 'c': phoneOutput+="2";break;
                case  'd': case 'e': case 'f': phoneOutput+="3";break;
                case  'g': case 'h': case 'i': phoneOutput+="4";break;
                case  'j': case 'k': case 'l': phoneOutput+="5";break;
                case  'm': case 'n': case 'o': phoneOutput+="6";break;
                case  'p': case 'q': case 'r': case 's': phoneOutput+="7";break;
                case  't': case 'u': case 'v': phoneOutput+="8";break;
                case  'w': case 'x': case 'y': case 'z': phoneOutput+="9";break;
            }
        }
        //if null or undefined return empty string
    } else if(input == null || input == undefined){
        phoneOutput = "";
    }
        //console.log(phoneOutput)
        return phoneOutput;
}

    //    ^
    //    |
    //YOU CAN ADD TO OR MODIFY THE CODE ABOVE THIS LINE

    //convertPhoneWord("1-800-HOLIDAY");



    // DO NOT CHANGE ANY CODE AFTER THIS LINE.
    //     |
    //     |
    //     V


    //helper functions...do not modify, but you can use them in your code if you wish.

    var isDigit = function(convertPhoneWord) {
        return "0123456789".indexOf(convertPhoneWord) !== -1;
    }

    var isLetter = function(convertPhoneWord) {
        convertPhoneWord = convertPhoneWord.toUpperCase();    
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(convertPhoneWord) !== -1;
    }

    //Run tests on the function
    testFunction(convertPhoneWord); //DO NOT MODIFY

    
})(testFunction);
