var elResultHeading = document.querySelector(".heading");

var IELTS = Number(prompt("IELTS score?", 0));
var mathResult = Number(prompt("Mathematics score?", 0));
var hasTank = prompt("Tanish Bilish? Yes/No", "No");

if (hasTank == "Yes") {
  hasTank = true;
} else {
  hasTank = false;
}

console.log(IELTS);
console.log(mathResult);
console.log(hasTank);

//anti magic numbers
var minIELTS = 5.5;
var minMath = 40;

var hasPassedExam = IELTS >= minIELTS && mathResult >= minMath;

// V.1
// if (IELTS >= minIELTS && mathResult >= minMath) {
//   console.log("Tabriklations, student!");
// } else if (hasTank) {
//   console.log("Tabriklations, student! Grant!");
// } else {
//   console.log("Super kontrakt muborak!");
// }

// V.2
// if ((IELTS >= minIELTS && mathResult >= minMath) || hasTank) {
//   console.log("Tabriklations, student!");
// } else {
//   console.log("Super kontrakt muborak!");
// }

if (hasPassedExam || hasTank) {
  elResultHeading.textContent = "Tabriklations, student!";
} else {
  elResultHeading.textContent = "Super kontrakt muborak!";
}
