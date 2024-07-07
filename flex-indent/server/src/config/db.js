//FILENAME : db.js

const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://21a91a04d0:27kfXsQgKJR4D4Qk@cluster0.kpfafze.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";


const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;