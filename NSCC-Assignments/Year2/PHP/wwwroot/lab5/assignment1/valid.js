function confirmDelete(form) {
    if(confirm("Want to delete?")) {
        form.submit();
    }
    else {
        alert("You decided to not submit the form!");
    }

}

function valid(){

    var fName = document.getElementById('eFName').value[0].toUpperCase();

    var birthDate =document.getElementById('eBirth').value;
    var dateRegex = /(\d{4})[-\/](\d{2})[-\/](\d{2})/.exec(birthDate);

    var hireDate =document.getElementById('eHire').value;
    var birthResult = dateRegex.test(birthDate);
    var hireResult = dateRegex.test(hireDate);



    if(document.forms["updateEmp"].eFName.value.length === 0 || document.forms["updateEmp"].eFName.value.length === 1|| document.forms["updateEmp"].eFName.value.length === 2)
    {
        var theSpan = document.getElementById("errorFName")
        theSpan.innerText = "Name length must be greater than or equal to 2";
        alert(fName);
        document.getElementById('eFName').style.border ="1px solid red";
        return false;
    }

    else if(document.getElementById('eFName').value[0] !== document.getElementById('eFName').value[0].toUpperCase()){
        var theSpan = document.getElementById("errorFName")
        theSpan.innerText = fName;
        alert("You must enter a good name");
        document.getElementById('eFName').style.border ="1px solid red";
        return false;
    }
    // else if (dateRegex === false){
    //     alert("birth False");
    //     return false;
    // }
    // else if (!hireResult === false){
    //     alert("hire False");
    //     return false;
    // }

}







































function isValidDate(dateString)
{

    var regEx = /^[(]{0,1}[0-9]{4}[)]{0,1}[-\s\.]{0,1}[0-9]{2}[-\s\.]{0,1}[0-9]{2}$/;
    if(dateString.match(regEx) != null) {
        var theSpan = document.getElementById("errorText")
        theSpan.innerText = "ksssssssssssjdf";
            return false;
    }
    else {
        var theSpan = document.getElementById("errorText")
        theSpan.innerText = "kasdjfkasjdf";
        return true;
    }




    // return dateString.match(regEx) != null;



    // var matches = /(\d{4})[-\/](\d{2})[-\/](\d{2})/.exec(date);
    // if (matches == null)
    //
    //
    //     // var theSpan = document.getElementById("errorText")
    //     // theSpan.innerText = "kasdjfkasjdf";
    //     return false;
    // var year = matches[3];
    // var month = matches[1] - 1;
    // var day = matches[2];
    // var composedDate = new Date(year, month, day);
    // return composedDate.getDate() === day &&
    //     composedDate.getMonth() === month &&
    //     composedDate.getFullYear() === year;




    // https://jymden.com/javasscript-validate-date-in-format-yyyy-mm-dd/
    // Date format: YYYY-MM-DD

    // var datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    //
    // // Check if the date string format is a match
    // var matchArray = dateString.match(datePattern);
    // if (matchArray == null) {
    //     return false;
    // }
    //
    // // Remove any non digit characters
    // var cleanDateString = dateString.replace(/\D/g, '');
    //
    // // Parse integer values from date string
    // var year = parseInt(cleanDateString.substr(0, 4));
    // var month = parseInt(cleanDateString.substr(4, 2));
    // var day = parseInt(cleanDateString.substr(6, 2));
    //
    // // Define number of days per month
    // var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //
    // // Adjust for leap years
    // if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    //     daysInMonth[1] = 29;
    // }
    //
    // // check month and day range
    // if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
    //     var theSpan = document.getElementById("errorText")
    //     theSpan.innerText = "kasdjfkasjdf";
    //     return false;
    // }
    //
    // // You made it through!
    // return true;

}