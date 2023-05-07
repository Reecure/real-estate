import { RootState } from "@/redux/app/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApartments = createAsyncThunk(
  "getAllprojects/apartmets",
  async () => {
    const res = await axios
      .get("/api/getAllProjects")
      .then((data) => data.data);
    return res.projects;
  }
);

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const getAllApartmentsSlice = createSlice({
  name: "all-apartment",
  initialState,
  reducers: {},
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
export const selectAllApartment = (state: RootState) => state.allApartments;

export const selectAllVisibleApartments = (state: RootState) => {
  const { data } = state.allApartments;

  return data;
};
