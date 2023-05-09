import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/redux/app/store";
import { User } from "@/types";

export const fetchUser = createAsyncThunk<User>(
  "user/getUserById",
  async () => {
    const res = await axios
      .get(`/api/getUserById?id=6453dfb9c8156bf9ee4a6f75`)
      .then((res) => res.data);

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

export const selectUser = (state: RootState) => {
  const { user } = state.user;

  return user;
};
