// for different datatypes
// not indexing
const user={
    name:'Ramu',
    email:'ramu@mail.com',
    password:'ramu123'
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.address = 'Lucknow';
user.password='123';


console.log(user);

console.log(Object.keys(user));

console.log(Object.values(user));