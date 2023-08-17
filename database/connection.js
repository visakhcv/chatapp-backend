const mongoose=require('mongoose')

const db= mongoose.connect(process.env.MONGO_URL).then((result)=>{
    console.log('connected db');
}).catch((err)=>{
    console.log('db connection err');
})


module.exports= db