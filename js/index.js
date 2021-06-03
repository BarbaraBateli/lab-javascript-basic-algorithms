console.log("Estou pronto!");
let hacker1 = "Barbara";
console.log(hacker1);
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Alexandre";
console.log(`"The navigator's name is ${hacker2}"`);

switch(hacker1.length > hacker2.length) {
  case true:
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  break;

  case false:
  if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
  }
  break;

  default: 
  console.log("Erro");
  break;
}

console.log("\nIteration 3: Loops\n3.1")

let hacker1Upper = hacker1.toUpperCase();

let hacker1Final = "";

for(let i=0; i < hacker1Upper.length; i++){
  hacker1Final = hacker1Final + hacker1Upper[i] + " ";
}
console.log(hacker1Final);
 
let hacker2final = "";

for(let j=(hacker2.length - 1); j>=0; j--){
  hacker2final = hacker2final + hacker2[j];
}
//==>solução
Estou pronto!
Barbara
"The driver's name is Barbara"
"The navigator's name is Alexandre"
It seems that the navigator has the longest name, it has 9 characters.

Iteration 3: Loops
3.1
B A R B A R A 
erdnaxelA
 