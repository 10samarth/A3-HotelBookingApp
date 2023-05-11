const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
    const conn = await mongoose.connect("mongodb+srv://pmkk0625:I2VXUl9UbJ1QA4sD@cluster0.mompqib.mongodb.net/?retryWrites=true&w=majority");
    
    console.log('mongodb connected');
    }
    catch(error){
        console.error("error");
        process.exit();

    }
};
module.exports = connectDB;