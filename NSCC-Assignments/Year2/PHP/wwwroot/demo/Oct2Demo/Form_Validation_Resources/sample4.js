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

function anyText(field,messageText,target)	
{	
	var targetSpan = document.getElementById(target);
	if(targetSpan != null)
	{
		if(field.value.length ==0)		
		{			
			targetSpan.innerHTML = messageText;
			return false;		
		}	 	 	
		else		
		{	
			targetSpan.innerHTML = "Hey, at least you entered something!";		
			return true;		
		}
	}	
	
}