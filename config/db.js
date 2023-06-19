const { default: mongoose } = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongo_url =
  "mongodb+srv://cosocialAPI:LhORDmipTHO1m0IL@cosocialdatabase.2izobdy.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(mongo_url, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: false,
//   },
// });

// const connectDB = async () => {
//   try {
//     await client.connect();

//     await client.db("cosocial").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     await client.close();
//   }
// };

// connectDB().catch(console.dir);
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
