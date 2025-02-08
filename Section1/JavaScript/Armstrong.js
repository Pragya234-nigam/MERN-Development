 // ArmStrong
 let num=120;
 let rem=0;
 let result=0;
 let q;
 q=num;
 while(q!=0){
     rem=q%10; // Last Value
   result=(rem*rem*rem)+result;
   q=parseInt(q/10);
 }
 if(num===result){
     console.log("Armstrong");
 }
 else{
     console.log("Not Armstrong");
 }