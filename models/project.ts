import { Schema, model, Document, Types } from "mongoose";

interface IProject extends Document {
  mlsNumber: string;
  address: string;
  price: number;
  neighbourhood: string;
  projectType: string;
  acceptedCurrencies: string[];
  size: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  floors: number;
  description: string;
  agentRemarks: string;
  videoLink: string;
  owner: Types.ObjectId;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  mlsNumber: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  neighbourhood: { type: String, required: true },
  projectType: { type: String, required: true },
  acceptedCurrencies: { type: [String], required: true },
  size: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  yearBuilt: { type: Number, required: true },
  floors: { type: Number, required: true },
  description: { type: String, required: true },
  agentRemarks: { type: String, required: true },
  videoLink: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IProject>("Project", ProjectSchema);
