import { RootState } from "@/redux/app/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProject } from "../../../../models/project";

export const fetchUserProjects = createAsyncThunk(
  "projects/userProjects",
  async () => {
    return await axios
      .get("/api/getUserProjectsFromDb")
      .then((data) => data.data.projects);
  }
);

const initialState = {
  projects: [],
  loading: false,
  error: "",
  selectedType: "All",
  searchValue: "",
  currentPage: 1,
  perPage: 5,
};

const getUserProjectsSlice = createSlice({
  name: "user-projects",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
      state.currentPage = 1;
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

export const { setType, setSearchValue, setPage, setPerPage } =
  getUserProjectsSlice.actions;

export const selectProjects = (state: RootState) => state.userProjects;

export const selectVisibleProjects = (state: RootState) => {
  const { perPage, currentPage, selectedType, projects, searchValue } =
    state.userProjects;

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const filterType = (item: IProject) =>
    selectedType === "All" || item.propertyType === selectedType;
  const filterSearch = (item: IProject) =>
    searchValue === "" ||
    item.name.toLowerCase().includes(searchValue.toLowerCase());

  const visibleProjects = projects.filter(filterSearch).filter(filterType);
  return visibleProjects.slice(startIndex, endIndex);
};

export const selectTotalPages = (state: RootState) => {
  const { perPage, projects, selectedType, searchValue } = state.userProjects;
  const filterType = (item: IProject) =>
    selectedType === "All" || item.propertyType === selectedType;
  const filterSearch = (item: IProject) =>
    searchValue === "" ||
    item.neighbourhood.toLowerCase().includes(searchValue.toLowerCase());
  const totalItems = projects.filter(filterSearch).filter(filterType).length;

  return Math.ceil(totalItems / perPage);
};
