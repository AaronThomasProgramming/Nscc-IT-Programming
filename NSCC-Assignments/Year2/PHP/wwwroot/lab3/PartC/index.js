function checkForm(fieldID)
{

    var checkBox = document.getElementById("term");

    if(document.forms["myForm"].fName.value.length ==0)
    {
        alert("You must enter a first name");
        document.getElementById('fName').style.border ="1px solid red";
        return false;
    }
    else if(document.forms["myForm"].lName.value.length ==0)
    {
        alert("You must enter a last name");
        document.getElementById('lName').style.border ="1px solid red";
        return false;
    }
    else if(document.forms["myForm"].address1.value.length == 0)
    {
        alert("You must enter address1");
        document.getElementById('address1').style.border ="1px solid red";
        return false;
    }
    else if(document.forms["myForm"].address2.value.length == 0)
    {
        alert("You must enter address1");
        document.getElementById('address2').style.border ="1px solid red";
        return false;
    }
    else if(document.forms["myForm"].email.value.length == 0)
    {
        alert("You must enter valid email");
        document.getElementById('email').style.border ="1px solid red";
        return false;
    }
    else if(checkBox.checked == false)
    {
        alert('You must agree to the terms first.');
        // checkBox.style.display = "block";

        var theSpan = document.getElementById("errorText")
        theSpan.innerText = "kasdjfkasjdf";

        return false;
    }
    else
    {
        alert("The form is valid. Would go to server now.");
        return true;
    }
}

function italicText(fieldID)
{
    var myFormItem = document.getElementById(fieldID);


    var label = myFormItem.parentNode;

    if(myFormItem != null)
    {
        myFormItem.style.fontStyle= "italic";
        // label.style.textDecoration = "underline";
        myFormItem.style.backgroundColor= "yellow";
        // myFormItem.style.borderColor = "red"
        // myFormItem.style.textDecoration = ""
    }
}


function normalText(fieldID)
{
    var myFormItem = document.getElementById(fieldID);
    var label = myFormItem.parentNode;
    if(myFormItem != null)
    {
        myFormItem.style.fontStyle = "normal";
        myFormItem.style.backgroundColor= "";
        // myFormItem.style.textDecoration = "underline"


    }
}

function checkTerms() {
    var checkBox = document.getElementById("term");
    if(checkBox.checked == false)
    {
        alert('You must agree to the terms first.');
        // checkBox.style.display = "block";
        return false;
    }
}


function underLineLabel(fieldID)
{
    var myFormItem = document.getElementById(fieldID);
    if(myFormItem != null)
    {
        myFormItem.style.textDecoration = "underline"


    }
}