
//WAP to print all numbers from 50 to 320 which are divisible by 7 and 11

for(let i=50;i<=320;i++){
    if(i%7===0 && i%11===0){
        console.log(i);
    }
}
//WAP to Reverse a number

let n=12345;
let rem=0;
let result=0;
while(n!=0){
    rem=n%10; // Last Value
  result=result*10+rem;
  n=parseInt(n/10);
}
    console.log(result);
    // Palindrome 
    let num=646;
    let remm=0;
    let results=0;
    let q;
    q=num;
    while(q!=0){
        remm=q%10; // Last Value
      results=results*10+remm;
      q=parseInt(q/10);
    }
    if(num===results){
        console.log("Palindrome");
    }
    else{
        console.log("Not Palindrome");
    }
        
        