// Iteration 1: Names and Input
let hacker1 = "Pedro";
console.log(`The drive's name is ${hacker1}`);
let hacker2 = "Fernanda";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${driverLength} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}
// Iteration 3: Loops

//3.1 
let formattedName = ""
for (let i = 0; i < hacker1.length; i++) {
    formattedName += hacker1[i].toUpperCase();
    // Add a space after each character except the last one
    if (i < hacker1.length - 1) {
        formattedName += ' ';
    }
}
console.log(formattedName)



//3.2 
let reversedName = "";
for (let i = hacker1.length - 1; i >= 0; i--){
    const char = hacker1[i];
    reversedName += char;
}
console.log(reversedName);

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
}
else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}

//BONUS 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus ex, efficitur eget gravida interdum, iaculis rhoncus nibh. Etiam suscipit quam ut mauris rutrum fermentum. Mauris tincidunt odio enim, sed varius magna interdum eu. Vivamus elit justo, fringilla vitae pulvinar eu, pretium sed quam. Cras elementum felis velit, non convallis augue interdum non. Maecenas purus est, scelerisque sed posuere ac, posuere convallis ipsum. Maecenas quis diam et nisi pulvinar congue id vel tortor. Phasellus tellus ex, ullamcorper quis sagittis at, rhoncus et elit. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non neque at ex semper euismod. Vivamus laoreet nulla eu mi faucibus tempor. Nunc molestie nisl sit amet quam rutrum aliquam. Cras elementum sem tincidunt tortor ullamcorper condimentum. Phasellus volutpat lacinia risus quis congue. Nulla eu nulla vitae arcu suscipit aliquam. Aliquam non consectetur quam, eu iaculis ligula. Nullam efficitur elementum magna quis pretium. Vestibulum ultrices dolor sit amet urna vehicula posuere. Duis ligula sem, euismod ac ultricies id, tempus ac quam. Ut quis ex quam. Mauris consectetur augue quis risus cursus ultrices. Vestibulum malesuada id enim viverra volutpat. Vivamus luctus turpis quis ipsum bibendum pulvinar. Proin nisi est, pharetra ut dolor vel, molestie vestibulum quam. Etiam varius pretium erat a tincidunt. Vivamus aliquet turpis sed elit viverra dapibus. Curabitur lobortis massa bibendum nibh posuere lobortis. Nam hendrerit maximus vehicula. Cras ac est rhoncus, sagittis massa eget, molestie enim. Ut mattis metus sit amet orci semper varius. Proin sit amet tristique nulla. Donec ut ex lobortis, interdum lorem nec, efficitur diam. In scelerisque lorem vel ipsum luctus, vitae iaculis est facilisis.`

const spaceCount = longText.split(" ").length;
console.log(spaceCount); 

const textArray = longText.split(/[,. \n]/);
console.log(textArray);

let count = 0;

for (let i = 0; i < textArray.length; i++) {
  if (textArray[i] === "et") {
    count++;
  }
}

console.log(count);

//BONUS 2
let phraseToCheck = "step on no pets";
let cleanString = ""; 
    for (let i = 0; i < phraseToCheck.length; i++) {
        const char = phraseToCheck[i]

    if (phraseToCheck[i] !== "," && phraseToCheck !== " " && phraseToCheck !== ".") {
        cleanString += char
    }
    }
let reversedString = "";
for (i = cleanString.length - 1; i >=0; i--){
    const char2 = cleanString[i]; 
    reversedString += char2;
}
console.log(reversedString);
console.log(cleanString === reversedString)
