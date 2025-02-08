for(let a=40;a<=130;a++){
    let temp=0;
for(let i=2;i<a;i++){
    if(a%i===0){
        temp++;
         break;
    }}
    if(temp===0){
        console.log("Prime Number" + a);
}
}