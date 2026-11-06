
// var aVal = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + aVal + "<br>");
// document.write("The value of ++a is: " + (++aVal) + "<br>");
// document.write("Now the value of a is: " + aVal + "<br>");
// document.write("The value of a++ is: " + (aVal++) + "<br>");
// document.write("Now the value of a is: " + aVal + "<br>");
// document.write("The value of --a is: " + (--aVal) + "<br>");
// document.write("Now the value of a is: " + aVal + "<br>");
// document.write("The value of a-- is: " + (aVal--) + "<br>");
// document.write("Now the value of a is: " + aVal + "<br>");

// var aEx2 = 2, bEx2 = 1;
// var resultEx2 = --aEx2 - --bEx2 + ++bEx2 + bEx2--;
// document.write("a is " + aEx2 + "<br>");
// document.write("b is " + bEx2 + "<br>");
// document.write("result is " + resultEx2 + "<br>");

// var userNameInput = prompt("Please enter your name:");
// if(userNameInput) {
//     alert("Hello " + userNameInput + "!");
// }

// var numTableInput = prompt("Enter a number for multiplication table:");
// if(!numTableInput) {
//     numTableInput = 5;
// }
// document.write("Multiplication Table of " + numTableInput + "<br>");
// for(var j = 1; j <= 10; j++) {
//     document.write(numTableInput + " x " + j + " = " + (numTableInput * j) + "<br>");
// }

// var subj1 = prompt("Enter first subject name:");
// var subj2 = prompt("Enter second subject name:");
// var subj3 = prompt("Enter third subject name:");
// var totalEachSubj = 100;
// var obt1 = Number(prompt("Enter obtained marks for " + subj1 + ":"));
// var obt2 = Number(prompt("Enter obtained marks for " + subj2 + ":"));
// var obt3 = Number(prompt("Enter obtained marks for " + subj3 + ":"));
// var totalAllSubj = totalEachSubj * 3;
// var totalObtAll = obt1 + obt2 + obt3;
// var totalPercentage = (totalObtAll / totalAllSubj) * 100;

// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subj1 + "</td><td>" + totalEachSubj + "</td><td>" + obt1 + "</td><td>" + (obt1 / totalEachSubj * 100) + "%</td></tr>");
// document.write("<tr><td>" + subj2 + "</td><td>" + totalEachSubj + "</td><td>" + obt2 + "</td><td>" + (obt2 / totalEachSubj * 100) + "%</td></tr>");
// document.write("<tr><td>" + subj3 + "</td><td>" + totalEachSubj + "</td><td>" + obt3 + "</td><td>" + (obt3 / totalEachSubj * 100) + "%</td></tr>");
// document.write("<tr><td><b>Total</b></td><td><b>" + totalAllSubj + "</b></td><td><b>" + totalObtAll + "</b></td><td><b>" + totalPercentage + "%</b></td></tr>");
// document.write("</table>");