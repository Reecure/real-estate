import { RootState } from "@/redux/app/store";
import {
	createAsyncThunk,
	createSlice,
	Draft,
	PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { IProject } from "../../../../models/project";
import {Project} from "@/types";

export const fetchApartments = createAsyncThunk(
	"getAllprojects/apartmets",
	async () => {
		const res = await axios
			.get("/api/getAllProjects")
			.then((data) => data.data);
		return res.projects;
	}
);
interface PaymentState {
  currncy: string;
  acceptCrypto: boolean;
  sellingNFT: boolean;
}

interface HousePropertiesState {
  size: number;
   bathrooms: number;
  bedrooms: number;
  floors: number;
  yearBuilt: number;
}

interface State {
  data: Project[];
  loading: boolean;
  error: string;
  perPage: number;
  currentPage: number;
  payment: PaymentState;
  houseProperties: HousePropertiesState;
  price: number;
  sorting: {
    byPriceASC: null;
    byPriceDES: null;
    yearBuiltASC: null;
    yearBuiltDES: null;
  };
}
interface UpdateHousePropertyPayload {
  name: keyof HousePropertiesState;
  value: number;
}

const initialState = {
	data: [],
	loading: false,
	error: "",
	perPage: 20,
	currentPage: 1,
	payment: {
		currncy: "",
		acceptCrypto: false,
		sellingNFT: false,
	},
	houseProperties: {
		size: null,
		bathrooms: null,
		bedrooms: null,
		floors: null,
		yearBuilt: 0,
	},
	price: 0,
	sorting: {
		byPriceASC: null,
		byPriceDES: null,
		yearBuiltASC: null,
		yearBuiltDES: null,
	},
};

const getAllApartmentsSlice = createSlice({
	name: "all-apartment",
	initialState,
	reducers: {
		setAcceptCrypto: (state, action) => {
			state.payment.acceptCrypto = action.payload;
		},
		setSellingNFT: (state, action) => {
			state.payment.sellingNFT = action.payload;
		},
		setSize: (state, action) => {
			state.houseProperties.size = action.payload;
		},
		setBathrooms: (state, action) => {
			state.houseProperties.bathrooms = action.payload;
		},
		setBedrooms: (state, action) => {
			state.houseProperties.bedrooms = action.payload;
		},
		setFloors: (state, action) => {
			state.houseProperties.floors = action.payload;
		},
		setYearBuilt: (state, action) => {
			state.houseProperties.yearBuilt = action.payload;
		},
		setPrice: (state, action) => {
			state.price = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchApartments.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchApartments.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchApartments.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message as string;
		});
	},
});

export default getAllApartmentsSlice.reducer;

export const {
	setSellingNFT,
	setAcceptCrypto,
	setSize,
	setBathrooms,
	setBedrooms,
	setFloors,
	setYearBuilt,
	setPrice,
} = getAllApartmentsSlice.actions;

export const selectAllApartment = (state: RootState) => state.allApartments;

export const selectAllVisibleApartments = (state: RootState) => {
	const { data, houseProperties, price, payment } = state.allApartments;

	const filterProperties = (item: IProject) => {
		console.log(houseProperties.size);

		return (
			(houseProperties.size === null ||
        Number(item.size) >= houseProperties.size) &&
      (houseProperties.bathrooms === null ||
        Number(item.bathrooms) >= houseProperties.bathrooms) &&
      (houseProperties.bedrooms === null ||
        Number(item.bedrooms) >= houseProperties.bedrooms) &&
      (houseProperties.floors === null ||
        Number(item.floors) >= houseProperties.floors) &&
      (houseProperties.yearBuilt === null ||
        Number(item.yearBuilt) >= houseProperties.yearBuilt)
		);
	};
	const filterByPayment = (item: IProject) => {
		return (
			(payment.sellingNFT === false ||
        item.sellingNFT === payment.sellingNFT) &&
      (payment.acceptCrypto === false ||
        item.acceptCrypto === payment.acceptCrypto)
		);
	};
	const filterByPrice = (item: IProject) => {
		return price === 0 || Number(item.price) >= price;
	};

	return data
		.filter(filterProperties)
		.filter(filterByPayment)
		.filter(filterByPrice);
};
