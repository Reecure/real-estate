import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Project } from "@/types";
import { RootState } from "@/redux/app/store";

export const fetchProjectById = createAsyncThunk(
  "project/getProjectById",
  async (id: any) => {
    const data = await fetch(`/api/getProject?id=${id}`).then((data) =>
      data.json()
    );
    return data.project;
  }
);

interface State {
  data: Project | {};
  loading: boolean;
  error: null | string;
}
const initialState: State = {
  data: {},
  loading: false,
  error: null,
};

const getProjectByIdSlice = createSlice({
  name: "getProjevtById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectById.fulfilled, (state, action) => {
      (state.data = action.payload), (state.loading = false);
    });
    builder.addCase(fetchProjectById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProjectById.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message as string);
    });
  },
});

export default getProjectByIdSlice.reducer;

export const selectProject = (state: RootState) => state.project;
