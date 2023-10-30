import authService from "./auth.service";
// import { getUser } from "@/common/utils/users.util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const user = getUser();
const initialState = {
    login: {
        data: {},
        message: "",
        isError: false,
        isLoading: false,
    },
};

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ userData, successCallBack }, thunkAPI) => {
//     try {
//       const response = await authService.login(userData);
//       if (response) {
//         successCallBack(response);
//         return response;
//       }
//       return thunkAPI.rejectWithValue(response);
//     }
//     catch (error) {
//       return thunkAPI.rejectWithValue({ payload: error });
//     }
//   }
// );

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.login = {
                data: {},
                message: "",
                isError: false,
                isLoading: false,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.login.data = {};
                state.login.message = "";
                state.login.isError = false;
                state.login.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.login.isLoading = false;
                state.login.data = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.login.data = {};
                state.login.isError = true;
                state.login.isLoading = false;
                state.login.message = action.payload;
            })
    },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;