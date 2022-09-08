import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";
import { TSignArgs, ITokenDecod, IUserDecod } from "../../types/types";
import jwtDecode, { JwtPayload } from "jwt-decode";

export interface IUser {
    email: string | null;
    role: string | null;
    token: string | null;
    loading: boolean;
    error: boolean;
    allUsers: IUserDecod[];
}


// export const fetchData = createAsyncThunk<IUserRes, string>(
//     "user/fetchUser",
//     async (url) => {
//         const {getData} = useHttp();
//         return await getData(url)
//     }
// )

export const fetchUser = createAsyncThunk<{token: string}, TSignArgs>(
    "user/fetchUser",
    async ({url, email, password}) => {
        const {signInUser} = useHttp();
        return await signInUser({url, email, password})
    }
)

export const fetchAllUser = createAsyncThunk<IUserDecod[], string>(
    "user/fetchAllUser",
    async (url) => {
        const { getData } = useHttp();
        return await getData(url);
    }
)

export const checkActualUser = createAsyncThunk<{token: string}, string>(
    "user/checkUser",
    async (url) => {
        const {checkUser} = useHttp();
        return await checkUser(url)
    }
)

const initialState: IUser = {
    email: null,
    role: null,
    token: null,
    loading: false,
    error: false,
    allUsers: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetUser: (state) => {
            state.token = null;
            state.email = null;
            state.role = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                const decode = jwtDecode<ITokenDecod>(action.payload.token)
                state.loading = false;
                state.token = action.payload?.token;
                state.email = decode.email;
                state.role = decode.role;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(checkActualUser.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(checkActualUser.fulfilled, (state, action) => {
                const decode = jwtDecode<ITokenDecod>(action.payload.token)
                state.loading = false;
                state.token = action.payload?.token;
                state.email = decode.email;
                state.role = decode.role;
            })
            .addCase(checkActualUser.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(fetchAllUser.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {
                state.loading = false;
                state.allUsers = action.payload;
            })
            .addCase(fetchAllUser.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
    
})

const { reducer, actions } = userSlice;
export const { resetUser } = actions;
export default reducer;
