const num=19;
let temp=0;
for(let i=2;i<=num;i++){
    if(num%i==0){
        temp++;
         break;
    }}
    if(temp===0){
        console.log("Prime Number" + num);

    }

    else{

        console.log("Not Prime Number" + num);

    }


