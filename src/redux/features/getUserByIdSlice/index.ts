import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/app/store";
import { User } from "@/types";

export const fetchUser = createAsyncThunk(
  "user/getUserById",
  async (id: any) => {
    const res = await fetch(`/api/getUserById?id=${id}`).then((res) =>
      res.json()
    );
    return res.user;
  }
);

const defaultUser: User = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  requests: [],
  projects: "",
};

interface State {
  user: User;
  loading: boolean;
  error: string;
}

const initialState: State = {
  user: { ...defaultUser },
  loading: false,
  error: "",
};

const getUserByIdSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default getUserByIdSlice.reducer;

export const selectUser = (state: RootState) => state.user;
