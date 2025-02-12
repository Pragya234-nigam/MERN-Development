
const arr=[34,'hello',true,null];
console.log(arr);
console.log(Array.isArray(arr));


const Movies=['SpiderMan','BatMan','BhulBhulaiya','Mr and Mrs Mahi','Pushpa'];
               //also works for Strings
console.log(Movies.length);
//indexing
console.log(Movies[1]);//also works for Strings
console.log(Movies.indexOf('SpiderMan'));//-1
console.log(Movies.at(-2));// also works for Strings

Movies[1]='Interstellar';
console.log(Movies);

 
//Slicing

console.log(Movies.slice()); 

//Adding and removing elements

Movies.push('Hero','Pushpa2');//at end of the Object
Movies.unshift('National');// at first
console.log(Movies);

Movies.pop();//removes last elements
Movies.shift();//removes first elements

console.log(Movies);

// Movies.splice(2,2); //first element , removes element removing elements
// Movies.splice(2,2,'Circus','BatMan2','P');
// console.log(Movies);
// Movies.splice(-3,7);
Movies.splice(2,0,'Get','Post');


console.log(Movies);







