let myName = prompt("Please enter your name");

let myFamily = ["Dean", "Fleur", "Lia", "Sophie"];

myFamily.push("Freddy");
myFamily.push(myName);
allToFamily(myName);
let popped = myFamily.pop();
alert(popped);
myFamily.unshift("Ranaldo");
console.log(myFamily);
myFamily.shift();

myFamily.familyName = "Tsaltas";

console.log(myFamily);

console.log(typeof(myName));

alert('hi there ' + myName);
console.log('hi there ' + myName);

for(let i = 0; i < myFamily.length; i++){
    console.log(myFamily[i]);
}

for(let i in myFamily){
    console.log(i);
    console.log(myFamily[i]);
}
console.log("==================");
for(let i of myFamily){
    console.log(i);
    console.log(myFamily[i]);
}

function allToFamily(fromMember){
    if(myFamily[i].includes('e')){
        console.log(i);
    }
    myFamily.push(fromMember);
}

function addGoal(){
    //alert('in add goal');
    let newGoal = document.querySelector("#newGoal").value;
    let goalList = document.querySelector("#goalList").value;
    alert(newGoal);
    let listItem = document.createElement("li");
    goalList.appendChild(listItem);

}

function myFunction() {
    var row = document.querySelector("#myRow");
    var x = row.insertCell(0);
    x.innerHTML = "New cell";
  }

function addTableRow(){
    let tbl = document.querySelector("#myTable");
    let tableRow = document.createElement("tr");
    let tableCell = document.createElement("td");
    tableCell.innerText = 'bob'

    tableRow.appendChild(tableCell);
    tbl.appendChild(tableRow);
    
    alert(tbl);
}
// function addRow(){
//     // Find a <table> element with id="myTable":
// var table = document.getElementById("myTable");

// // Create an empty <tr> element and add it to the 1st position of the table:
// var row = table.insertRow(0);

// // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);

// // Add some text to the new cells:
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";c
// }
// = int(input("Please enter a string"))
// parseInt() <= string