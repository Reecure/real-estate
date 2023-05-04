import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(
    "mongodb+srv://ogogan45:dXmu7YN5iLb9WDiv@cluster0.v1nwizm.mongodb.net/real-estate"
  );
};

export default dbConnect;
