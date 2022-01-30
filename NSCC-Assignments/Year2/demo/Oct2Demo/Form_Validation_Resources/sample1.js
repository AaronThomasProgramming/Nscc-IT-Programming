function checkForm()	
{		
	if(document.forms["myForm"].firstName.value.length ==0)		
	{			
		alert("You must enter a first name");					
	}		
	else if(document.forms["myForm"].lastName.value.length ==0)		
	{			
		alert("You must enter a last name");				
	}		
	else if(document.forms["myForm"].clientTypeList.selectedIndex ==0)		
	{			
		alert("You must choose a client type");					
	}		
	else		
	{			
		alert("The form is valid. Would go to server now.");					
	}	
}