import { RootState } from "@/redux/app/store";
import { userProjects } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProject } from "../../../../models/project";

export const fetchUserProjects = createAsyncThunk(
  "projects/userProjects",
  async () => {
    const res = axios
      .get("/api/getUserProjectsFromDb")
      .then((data) => data.data.projects);
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
  const filterType = (item: IProject) =>
    selecteType === "All" || item.propertyType === selecteType;
  const filterSearch = (item: IProject) =>
    searchValue === "" ||
    item.neighbourhood.toLowerCase().includes(searchValue.toLowerCase());
  console.log(searchValue);

  return projects.filter(filterSearch).filter(filterType);
};
