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