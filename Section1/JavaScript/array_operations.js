const nums=[324,28,1,82,47,9,47];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
//for of Loop
for(let i of nums){
    console.log(i);
}

//for Each Function


console.log("New Approach")
nums.forEach((n,a,i,k1)=>{console.log(n,a,i,k1);});

for(let j of nums){
    if(j%2===0){
        console.log(j)
    }
}
console.log("New")
nums.forEach((n)=>{
    if(n%2===0){
        console.log(n);
    }});

//WAP to Print each element by 2
console.log("New 1");
const nums2=[];

nums.forEach((n)=>{
    
        nums2.push(n*2);
    });

    console.log(nums2);

    //WAP to store all odd numbers on new array

    console.log("New 2");
    const nums3=[];
    
    nums.forEach((n)=>{

        if(n%2!=0){
            nums3.push(n);
        }
            
        });
    
        console.log(nums3);