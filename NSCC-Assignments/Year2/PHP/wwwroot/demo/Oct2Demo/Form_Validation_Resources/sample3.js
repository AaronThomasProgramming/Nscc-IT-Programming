function checkForm()	
{		
	if(document.forms["myForm"].firstName.value.length ==0)		
	{			
		alert("You must enter a first name");
		return false;		
	}		
	else if(document.forms["myForm"].lastName.value.length ==0)		
	{			
		alert("You must enter a last name");
		return false;		
	}		
	else if(document.forms["myForm"].clientTypeList.selectedIndex ==0)		
	{			
		alert("You must choose a client type");
		return false;		
	}		
	else		
	{			
		alert("The form is valid. Would go to server now.");			
		return true;		
	}	
}

function boldText(fieldID)
{
	var myFormItem = document.getElementById(fieldID);
	if(myFormItem != null)
	{
		myFormItem.style.fontStyle= "italic";
	}
}

function normalText(fieldID)
{
	var myFormItem = document.getElementById(fieldID);
	if(myFormItem != null)
	{
		myFormItem.style.fontStyle = "normal";
	}
}