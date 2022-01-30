<!-- url http://localhost/lab3/PartC/index.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Java Script</title>
    <script src="index.js" type="text/javascript"></script>
</head>
<body>
<h1>php version</h1>
<form id="myForm" name="myForm" method="post" action="sampleTargetPage.html" onsubmit="return checkForm()">
    <p><label>First Name <input type="text" name="fName" id="fName" onFocus="italicText(this.id)" onBlur="normalText(this.id)"/></label></p>
    <p><label>Last Name  <input type="text" name="lName" id="lName" onFocus="italicText(this.id)" onBlur="normalText(this.id)"/></label></p>
    <p><label>Address 1  <input type="text" name="address1" id="address1" onFocus="italicText(this.id)" onBlur="normalText(this.id)"/></label></p>
    <p><label>Address 2  <input type="text" name="address2" id="address2" onFocus="italicText(this.id)" onBlur="normalText(this.id)"/></label></p>
    <p><label>Email  <input type="text" name="email" id="email" onFocus="italicText(this.id)" onBlur="normalText(this.id)"/></label></p>
    <p><label>Accept Terms and Conditions <input type="checkbox" name="term" id="term"></label><span id="errorText"></span></p>
    <p><label><input type="hidden" name="term" id="term2"  value=""></label></p>
    <p><label>Submit <input type="submit" name="submit1" id="submit1"></label></p>
</form>
</body>
</html>

<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<head>-->
<!--    <title>Java Script</title>-->
<!--    <script src="index.js" type="text/javascript"></script>-->
<!--</head>-->
<!--<body>-->
<!--<h1>php version</h1>-->
<!--<form id="myForm" name="myForm" method="post" action="sampleTargetPage.html" onsubmit="return checkForm()">-->
<!--    <p><label>First Name <input type="text" name="fName" id="fName" /></label></p>-->
<!--    <p><label>Last Name  <input type="text" name="lName" id="lName" /></label></p>-->
<!--    <p><label>Address 1  <input type="text" name="address1" id="address1" /></label></p>-->
<!--    <p><label>Address 2  <input type="text" name="address2" id="address2"/></label></p>-->
<!--    <p><label>Email  <input type="text" name="email" id="email" /></label></p>-->
<!--    <p><label>Accept Terms and Conditions <input type="checkbox" name="term" id="term"></label><span id="errorText"></span></p>-->
<!--    <p><label><input type="hidden" name="term" id="term2"  value=""></label></p>-->
<!--    <p><label>Submit <input type="submit" name="submit1" id="submit1"></label></p>-->
<!--</form>-->
<!---->
<!--</body>-->
<!--</html>-->