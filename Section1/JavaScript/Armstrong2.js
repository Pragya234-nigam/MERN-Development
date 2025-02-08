for(let i=40;i<=130;i++){
 let rem=0;
 let result=0;
 let q;
 q=i;
 while(q!=0){
     rem=q%10; // Last Value
   result=(rem*rem*rem)+result;
   q=parseInt(q/10);
 }
 if(i===result){
     console.log("Armstrong" + i);
 }}
