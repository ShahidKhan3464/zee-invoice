import authService from "./auth.service";
// import { getUser } from "@/common/utils/users.util";
import SweetAlert from "@/common/components/sweet-alert";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const user = getUser();
const initialState = {
    signup: {
        data: {},
        message: "",
        isError: false,
        isLoading: false,
    },
    login: {
        data: {},
        message: "",
        isError: false,
        isLoading: false,
    },
    loginWithOAuthGoogle: {
        data: {},
        message: "",
        isError: false,
        isLoading: false,
    },
    signupWithOAuthGoogle: {
        data: {},
        message: "",
        isError: false,
        isLoading: false,
    }
};

export const signup = createAsyncThunk(
    "auth/signup",
    async ({ userData, successCallBack }, thunkAPI) => {
        try {
            const response = await authService.signup(userData);
            if (response) {
                successCallBack && successCallBack(response?.data?.email)
                return response;
            }
            return thunkAPI.rejectWithValue(response);
        }
        catch (err) {
            if (err.response) {
                SweetAlert('warning', 'Warning!', 'Email already exists')
                return thunkAPI.rejectWithValue(err.response.data.message);
            }
            else {
                SweetAlert('error', 'Error!', 'Something went wrong. Please try again')
                return thunkAPI.rejectWithValue(err.message);
            }
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ userData, successCallBack }, thunkAPI) => {
        try {
            const response = await authService.login(userData);
            if (response) {
                // successCallBack && successCallBack(response);
                SweetAlert('success', 'Success', 'Successfully logged in')
                return response;
            }
            return thunkAPI.rejectWithValue(response);
        }
        catch (err) {
            if (err.response) {
                if (
                    err.response.data.message === "INVALID_PASSWORD" ||
                    err.response.data.message === "The password must contain at least one uppercase letter."
                ) {
                    SweetAlert('warning', 'Warning!', 'Invalid password')
                }
                else if (err.response.data.message === "EMAIL_NOT_FOUND") {
                    SweetAlert('warning', 'Warning!', 'Invalid email')
                }
                return thunkAPI.rejectWithValue(err.response.data.message);
            }
            else {
                SweetAlert('error', 'Error!', 'Something went wrong. Please try again')
                return thunkAPI.rejectWithValue(err.message);
            }
        }
    }
);

export const loginWithOAuthGoogle = createAsyncThunk(
    "auth/loginWithOAuthGoogle",
    async (access_token, thunkAPI) => {
        try {
            const response = await authService.loginWithOAuthGoogle(access_token);
            if (response) {
                SweetAlert('success', 'Success', 'Successfully logged in')
                return response;
            }
            return thunkAPI.rejectWithValue(response);
        }
        catch (err) {
            if (err.response) {
                SweetAlert('warning', 'Warning!', err.response.data.message)
                return thunkAPI.rejectWithValue(err.response.data.message);
            }
            else {
                SweetAlert('error', 'Error!', 'Something went wrong. Please try again')
                return thunkAPI.rejectWithValue(err.message);
            }
        }
    }
);

export const signupWithOAuthGoogle = createAsyncThunk(
    "auth/signupWithOAuthGoogle",
    async (access_token, thunkAPI) => {
        try {
            const response = await authService.signupWithOAuthGoogle(access_token);
            if (response) {
                SweetAlert('success', 'Success', 'Successfully logged in')
                return response;
            }
            return thunkAPI.rejectWithValue(response);
        }
        catch (err) {
            if (err.response) {
                SweetAlert('warning', 'Warning!', err.response.data.message)
                return thunkAPI.rejectWithValue(err.response.data.message);
            }
            else {
                SweetAlert('error', 'Error!', 'Something went wrong. Please try again')
                return thunkAPI.rejectWithValue(err.message);
            }
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.signup = {
                data: {},
                message: "",
                isError: false,
                isLoading: false,
            };
            state.login = {
                data: {},
                message: "",
                isError: false,
                isLoading: false,
            };
            state.loginWithOAuthGoogle = {
                data: {},
                message: "",
                isError: false,
                isLoading: false,
            };
            state.signupWithOAuthGoogle = {
                data: {},
                message: "",
                isError: false,
                isLoading: false,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.signup.data = {};
                state.signup.message = "";
                state.signup.isError = false;
                state.signup.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.signup.isLoading = false;
                state.signup.data = action.payload.data;
                state.signup.message = action.payload.message;
            })
            .addCase(signup.rejected, (state, action) => {
                state.signup.data = {};
                state.signup.isError = true;
                state.signup.isLoading = false;
                state.signup.message = action.payload;
            })
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
            .addCase(loginWithOAuthGoogle.pending, (state) => {
                state.loginWithOAuthGoogle.data = {};
                state.loginWithOAuthGoogle.message = "";
                state.loginWithOAuthGoogle.isError = false;
                state.loginWithOAuthGoogle.isLoading = true;
            })
            .addCase(loginWithOAuthGoogle.fulfilled, (state, action) => {
                state.loginWithOAuthGoogle.isLoading = false;
                state.loginWithOAuthGoogle.data = action.payload;
            })
            .addCase(loginWithOAuthGoogle.rejected, (state, action) => {
                state.loginWithOAuthGoogle.data = {};
                state.loginWithOAuthGoogle.isError = true;
                state.loginWithOAuthGoogle.isLoading = false;
                state.loginWithOAuthGoogle.message = action.payload;
            })
            .addCase(signupWithOAuthGoogle.pending, (state) => {
                state.signupWithOAuthGoogle.data = {};
                state.signupWithOAuthGoogle.message = "";
                state.signupWithOAuthGoogle.isError = false;
                state.signupWithOAuthGoogle.isLoading = true;
            })
            .addCase(signupWithOAuthGoogle.fulfilled, (state, action) => {
                state.signupWithOAuthGoogle.isLoading = false;
                state.signupWithOAuthGoogle.data = action.payload;
            })
            .addCase(signupWithOAuthGoogle.rejected, (state, action) => {
                state.signupWithOAuthGoogle.data = {};
                state.signupWithOAuthGoogle.isError = true;
                state.signupWithOAuthGoogle.isLoading = false;
                state.signupWithOAuthGoogle.message = action.payload;
            })
    },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;