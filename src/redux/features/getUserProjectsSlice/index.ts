import { RootState } from "@/redux/app/store";
import { userProjects } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserProjects = createAsyncThunk(
  "projects/userProjects",
  async () => {
    const res = fetch("/api/getUserProjects").then((data) => data.json());
    return res;
  }
);

const initialState = {
  projects: [],
  loading: false,
  error: "",
  selecteType: "All",
  searchValue: "",
};

const getUserProjectsSlice = createSlice({
  name: "user-projects",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.selecteType = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserProjects.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
    builder.addCase(fetchUserProjects.pending, (state) => {
      state.loading = true;
    });
  },
});

export default getUserProjectsSlice.reducer;

export const { setType, setSearchValue } = getUserProjectsSlice.actions;

export const selectProjects = (state: RootState) => state.userProjects;

export const selectVisibleProjects = (state: RootState) => {
  const { selecteType, projects, searchValue } = state.userProjects;
  const filterType = (item: userProjects) =>
    selecteType === "All" || item.type === selecteType;
  const filterSearch = (item: userProjects) =>
    searchValue === "" ||
    item.name.toLowerCase().includes(searchValue.toLowerCase());
  console.log(searchValue);

  return projects.filter(filterSearch).filter(filterType);
};
