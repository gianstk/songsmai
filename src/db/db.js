import mongoose from 'mongoose';


// mongoose.Promise = global.Promise;

const connectToDB = async () => {
  let dbHost = "127.0.0.1";
  let dbPort = "2717"
  let dbName = "songsmai";

  try {
    mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`Connected to ${dbName} database at port ${dbPort}`);
  }
  catch (err) {
    console.log("Cannot connect to the databse!");
  }
}

export default connectToDB;