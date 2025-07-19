// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://arnobhasanice:MC5Amepw0nMKiSMX@c1.o3aqgyj.mongodb.net/?retryWrites=true&w=majority&appName=c1");
//     console.log("MONGODB CONNECTED SUCCESSFULLY!");
//   } catch (error) {
//     console.error("Error connecting to MONGODB", error);
//     process.exit(1); // exit with failure
//   }
// };


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://arnobhasanice:MC5Amepw0nMKiSMX@c1.o3aqgyj.mongodb.net/?retryWrites=true&w=majority&appName=c1");
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); // exit with failure
  }
};