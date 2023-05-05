export interface Project {
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
