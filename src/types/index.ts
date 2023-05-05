export interface Project {
  id?: number;
  mlsNumber: string;
  address: string;
  price: number;
  neighborhood: string;
  propertyType: string;
  photos: string[]; // an array of photo URLs
  owner: string;
  features: {
    acceptedCurrencies: string[];
    size: number; // in square feet
    bedrooms: number;
    bathrooms: number;
    yearBuilt: number;
    floors: number;
  };
  ownerInfo?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  description: string;
  agentRemarks: string;
  videoLink: string;
}

export interface ApartmentRequest {
  name: string;
  type: string;
  status: string;
  text: string;
  data: string;
  user: string;
}

export interface userProjects {
  id: number;
  image: string;
  name: string;
  type: "Apartment" | "Town House";
  size: number;
  price: string;
  creationData: string;
}
