const smartphone= {
    brand:'Samsung',
    model: 'Galaxy',
    price: 14999,
    colors: ['blue','white','black']
};
console.log(smartphone);
console.log(smartphone.brand);

//access price of the phone
//change model of the phone to 'Galaxy M32'
//add new key ram and assign 6GB value

console.log(smartphone.price);

smartphone.model='Galaxy M32';
console.log(smartphone.model);

smartphone.ram='6GB';
console.log(smartphone.ram);
console.log(smartphone);

const smartphoneList=[
    {
        brand:'Samsung',
        model:'Galaxy M31',
        price:14999,
        color:['blue','white','black']
    },
    {
        brand:'Oppo',
        model:'Oppo f17',
        price:34000,
        color:['blue','white','black','Green']
    },
    {
        brand:'I phone',
        model:'Iphone 14',
        price:32000,
        color:['blue','white','black','Green']
    },
    {
        brand:'Motorola',
        model:'Oppo f17',
        price:32000,
        color:['blue','white','black','Green']
    },
    {
        brand:'RealMe',
        model:'RealMe 7',
        price:34000,
        color:['blue','white','black','Green']
    }
];

console.log(smartphoneList.length);
console.log(smartphoneList[1].price);
console.log(smartphoneList[1].brand);
console.log(smartphoneList.at(-1).color[2][3]);
console.log(smartphoneList.at(-1).color.unshift('Green'));
console.log(smartphoneList.at(-1));
const brands=smartphoneList.map((phone)=>{return phone.brand});

console.log(brands);
//Map Me elements change ho jata hai
//filter object return kar deta


const budgetPhones=smartphoneList.filter((phone)=>{ return phone.price<=40000});

console.log(budgetPhones);

//WAP to get prices of all brands
const getprices=smartphoneList.map((phone)=>{ return phone.price;});
console.log(getprices);

console.log(['green','black'].includes('black'));

const getBlackPhones= smartphoneList.filter((phone=>{
    return phone.brand.includes('Samsung');
}));
console.log(getBlackPhones);

const search='sam';

const serachResult= smartphoneList.filter((phone)=>{
    return phone.brand.toLowerCase().includes(search.toLowerCase());
});

console.log(serachResult);

const getSamsungAnother= smartphoneList.filter((phone)=>{
 return phone.brand==='Samsung';
});

console.log(getSamsungAnother);