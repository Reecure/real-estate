import { Paths } from "@/constants/paths";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  requests: {
    project: string;
    userId: string;
    status: "New" | "In Progress" | "Closed";
    date: Date;
  }[];
  projects: string;
}

export interface Project {
  _id: string;
  mlsNumber: string;
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
    user: User;
  };
  createdAt: Date;
}

export interface ApartmentRequest {
  name: string;
  type: string;
  status: string;
  text: string;
  data: string;
  user: string;
}

export interface IUserProjects {
  id: number;
  image: string;
  name: string;
  type: "Apartment" | "Town House";
  size: number;
  price: string;
  creationData: string;
}

export interface ITab {
  name: string;
  path: Paths;
}

export interface IField {
  as?: string;
  value: string;
  type: string;
  id: string;
  name: string;
}
