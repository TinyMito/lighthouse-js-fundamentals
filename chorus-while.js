/* 
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 20) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!"); 
*/

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 20) {
  if (repeat === 7) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");