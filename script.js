const randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum);
let attempts = 1;

let guessed = false
while (!guessed) {
    
    const input = window.prompt("Enter a num bw 1 and 100");
    const num = Number(input);
    if(input == null){
        window.alert("Game ended!");
        break;
    }
    if (num == randNum) {
        window.alert(`Guessed correctly in ${attempts} attempt.`);
        guessed = true;
    } else if(num == ""){
        window.alert("Enter a proper number");
    } else if (num > randNum) {
        window.alert("High");
    } else if (num < randNum) {
        window.alert("Low");
    } else {
        window.alert("Number out of range");
    }
    attempts++;
}