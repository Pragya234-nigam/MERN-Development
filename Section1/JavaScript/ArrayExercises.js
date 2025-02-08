const fruits=['apple','orange','banana','k','mango',];

// access 2nd,3rd and 4th elements

// fruits.splice(2,5);

// add 2 fruits after apple
fruits.splice(1,0,'Papaya','Cherry');
console.log(fruits);

//removes second last element

fruits.splice(-2,1);
console.log(fruits);
//remove Orange and Banana and Insert Pineapple 
fruits.splice(-3,2,'Pineapple');
console.log(fruits);
fruits.splice(1,2,'Pineapple');
console.log(fruits);