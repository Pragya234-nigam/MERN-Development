const nums=[3,7,5,1,9,34,38];

//WAP to print get an array of squares of all numbers
const sqrNums=nums.map((n)=>{//n gives elements
 return n*n;
});//call back function as a parameter,new array,push not needed

console.log(sqrNums);


const prices=['23.432','245.21','4565','999'];
const Integer=prices.map((n)=>{
    return parseInt(n);
});

console.log(Integer);

const prices1=['23.432','245.21','4565','999'];
const Integer1=prices1.map((n)=>{
    return parseFloat(n);
   
});

console.log(Integer1);

const evenNums=nums.filter((n)=>{

    return n%2===0;
})
console.log(evenNums);



const prices2=[12999,4500,2000,9700,3400,1500];//between 2000 and 5000

 const rate=prices2.filter((n)=>{

      return n>=2000 && n<=5000;
 })

 console.log(rate);

 const brands=['Samsung','Apple','Motorola','Oppo','Nokia','Xiaomi'];

 const searchedBrands= brands.filter((b)=>{
    return b==='Apple'
 });

 console.log(searchedBrands);

 const searchedBrands1= brands.filter((b)=>{
    return b.toLowerCase().includes('pp'); //lowercase locally
 });

 console.log(searchedBrands1);


 //WAP to change all the names into Upper Case

 const upperBrands= brands.map((b)=>{
    return b.toUpperCase();
 })

 console.log(upperBrands);
