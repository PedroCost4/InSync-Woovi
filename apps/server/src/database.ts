import mongoose from "mongoose";

export const connectDb = async () => {
  mongoose.set("strictQuery", true);
  console.log("Connecting to database...")
  await mongoose.connect(process.env.DATABASE_URL);
};
