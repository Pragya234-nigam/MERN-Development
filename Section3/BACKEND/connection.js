const { log } = require('console');
const mongoose=require('mongoose');

const url="mongodb+srv://pragyanigam234:1234@cluster0.53dqq.mongodb.net/mydb1?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)//asynchronous function- promise object when it executed handle it with catch and then

.then((result) => {
    //complete the connection
    console.log('connected to DB')
}).catch((err) => {
    console.log(err);
});

console.log('some other statement');

module.exports=mongoose;
