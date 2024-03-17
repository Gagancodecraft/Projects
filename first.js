//we gonna learn some operators

//conditional statement 
/*let num = 16 ;

if( num%2 === 0){
    console.log("even");
} else{
    console.log("odd");
}*/

/*let age = 25;*/

/*let num = prompt("Enter a number");

if(num%5===0){
    console.log(num,"is divisible of 5");
}else{
    console.log("lund lele");
}*/

//let i = 1;

//for(i; i<=5 ; i++) {
//    console.log("jai shree ram")
///}

//caculate sum of n numbers

/*let sum = 0;

for(i=1;i<=20;i++){
    sum = sum + i;
}
console.log(sum);*/
//for of loop
/*let str = "Gagan sharma";

for(let i of str){
    console.log("i =",i);
}*/

//for on loop and all about objects.

/*let student =  {
    Name: "Gagan sharma",
    class: 12,
    cgpa: 6.7,
    sports: "cricket",
};

for( let key in student){
    console.log("key =",key, "value =",student[key]);
}*/
//print all even number between 1 to 100
/*let i = 0;

for(i=0;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}*/

//game of guessing a number

/*let num = 36;

let username = prompt("Guess the number ");

while(num!= username){
    username = prompt("Wrong number hai chuttiye dubara guess kar");

}
 console.log("Bsdk itti der mai sahi pehchaan paya h tu thuu hai tere lie");
*/

//prompt user name 

/*let fullname = prompt("Enter your user name without spaces");

let username = "@" + fullname + "12";

console.log(username);
*/


/*let str = "Gagan sharma";
console.log(str.charAt(str.length-1));

*/

//ARRAYS

/*let array = [67,76,87,57,86];

console.log(array);
*/

/*let heroes = ["Gagan", "supperman","thor","ironman","ragnar"];

for(let idx=0; idx<heroes.length; idx++){
    console.log(heroes[idx]);
}*/

/*let heroes = ["gagan", "havdha","jksdbkj","nsdbjk"];

for( let el of heroes){
    console.log(el);
}*/
// to calculate average
/*let marks = [85,97,44,37,76,60];

let sum = 0;
for(let val of marks){
    sum+= val;

}

let average = sum/marks.length;
console.log(average);*/
//for giving discount om items
/*let items =  [250,645,300,900,50];

let i = 0;
for ( let val of items){
    let offer = val/10;
    items[i] = val - offer;
    console.log(`value of item after discount = ${items[i]}`);
    i++; 
}*/

// ALL ABOUT FUNCTONS

/*function myFunction(){
    console.log(" meine neime ist Gagan ");
    console.log(" meine familienneime ist sharma");


}


 myFunction();*/


 // arrow function = it is a way to write a function in compact way.

 /*const makesum = (a,b)=>{
    return a+b;
 }

 console.log(makesum);*/
//count vowels in string 
 /*function countvowels(str) {
   let count=0;
   for( let char of str){
    if(char==="a"||char==="i"||char==="o"||char==="e"||char==="u"){
        count++;
    }
   }
   console.log(count);
 } */

 // count vowels by arrow function method

 /*const countvowels=(str)=>{
    let count=0;
    for(let char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++
        }
    }
    return count;
 }*/

 // USES OF FOREACH FUNCTION 

/*let arr= [1,2,3,4,5,6,7,8,9];

arr.forEach((val)=> {
    console.log(val);
});*/

// print square of given all number

/*let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val**2);
});*/

// use of filter array

/*let arr = [1,2,3,4,5];
 let newarr = arr.filter((val)=>{
    return val%2===0;
 });
  console.log(newarr);*/

  // print the largest num in array by reduce method

  let arr = [5,9,8,10,87,98,3];

const output = arr.reduce((pre,curr)=>{
    return pre>curr? pre: curr;
});

console.log(output);