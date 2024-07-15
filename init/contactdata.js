const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/contactSchema.js");

const Mongo_URL = "mongodb://127.0.0.1:27017/Music-Own";
main()
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect((Mongo_URL));
}

 const initdb = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data is initiallized");
}
initdb();