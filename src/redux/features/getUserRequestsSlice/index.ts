import { RootState } from "@/redux/app/store";
import { ApartmentRequest } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface State {
  currentPage: number;
  perPage: number;
  totalItems: number;
  loading: boolean;
  error: string;
  selectedStatus: string;
  selectedType: string;
  requests: ApartmentRequest[];
}

const initialState: State = {
	currentPage: 1,
	perPage: 10,
	totalItems: 0,
	loading: false,
	error: "",
	selectedStatus: "All",
	selectedType: "All",
	requests: [],
};

export const fetchUserRequests = createAsyncThunk(
	"requests/getUserRequests",
	async () => {
		const res = await fetch("/api/getUserRequests");
		const data = await res.json();
		return {
			req: data,
			totalItems: data.length,
		};
	}
);

const getUserRequestsSlice = createSlice({
	name: "user-requests",
	initialState,
	reducers: {
		setPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setPerPage: (state, action) => {
			state.perPage = action.payload;
			state.currentPage = 1;
		},
		setStatus: (state, action) => {
			state.selectedStatus = action.payload;
		},
		setTypes: (state, action) => {
			state.selectedType = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserRequests.fulfilled, (state, action) => {
			state.loading = false;
			state.requests = action.payload.req;
			state.totalItems = action.payload.totalItems;
		});
		builder.addCase(fetchUserRequests.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error as string;
		});
		builder.addCase(fetchUserRequests.pending, (state) => {
			state.loading = true;
		});
	},
});
export default getUserRequestsSlice.reducer;

export const { setPage, setPerPage, setStatus, setTypes } =
  getUserRequestsSlice.actions;

export const selectUserRequests = (state: RootState) => state.userRequests;

export const selectVisibleRequests = (state: RootState) => {
	const { currentPage, perPage, requests, selectedStatus, selectedType } =
    state.userRequests;

	const startIndex = (currentPage - 1) * perPage;
	const endIndex = startIndex + perPage;

	const filterByStatus = (item: ApartmentRequest) =>
		selectedStatus === "All" || item.status === selectedStatus;

	const filterByType = (item: ApartmentRequest) =>
		selectedType === "All" || item.type === selectedType;

	const filteredRequests = requests.filter(filterByStatus).filter(filterByType);

	return filteredRequests.slice(startIndex, endIndex);
};

export const selectTotalPages = (state: RootState) => {
	const { perPage, requests, selectedStatus, selectedType } =
    state.userRequests;
	const filteredRequests = requests
		.filter(
			(item: ApartmentRequest) =>
				selectedStatus === "All" || item.status === selectedStatus
		)
		.filter(
			(item: ApartmentRequest) =>
				selectedType === "All" || item.type === selectedType
		);

	const totalItems = filteredRequests.length;

	return Math.ceil(totalItems / perPage);
};
