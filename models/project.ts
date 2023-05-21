import mongoose, { Schema, Document } from "mongoose";
import User from "./user";

export interface IProject extends Document {
  mlsNumber: string;
  name: string;
  address: string;
  price: string;
  neighbourhood: string;
  propertyType: string;
  sellingNFT: boolean;
  acceptCrypto: boolean;
  acceptedCurrencies: string;
  size: string;
  poster: string;
  bedrooms: string;
  bathrooms: string;
  yearBuilt: string;
  floors: string;
  description: string;
  agentRemarks: string;
  videoLink: string;
  owner: {
    type: mongoose.Schema.Types.ObjectId;
    ref: any;
  };
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  mlsNumber: String,
  name: String,
  address: String,
  price: String,
  neighbourhood: String,
  propertyType: String,
  sellingNFT: Boolean,
  acceptCrypto: Boolean,
  acceptedCurrencies: String,
  size: String,
  poster: String,
  bedrooms: String,
  bathrooms: String,
  yearBuilt: String,
  floors: String,
  description: String,
  agentRemarks: String,
  videoLink: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  createdAt: Date,
});

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
