import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  requests: {
    project: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    status: "new" | "inProgress" | "closed";
    date: Date;
  }[];
  projects: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  requests: [
    {
      project: {
        type: mongoose.Types.ObjectId,
        ref: "Project",
      },
      userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      status: {
        type: String,
        enum: ["new", "inProgress", "closed"],
        default: "new",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  projects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
  ],
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
