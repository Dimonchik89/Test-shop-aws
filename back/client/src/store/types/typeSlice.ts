import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IType } from "../../types/types";
import useHttp from "../../hooks/useHttp";

interface ITypeState {
    types: IType[];
    loading: boolean;
    error: boolean;
}

const initialState: ITypeState = {
    types: [],
    loading: false,
    error: false
}

export const fetchTypes = createAsyncThunk<IType[], string>(
    "type/fetchTypes",
    async (url) => {
        const { getData } = useHttp();
        return await getData(url)
    }
)

const typeSlice = createSlice({
    name: "type",
    initialState,
    reducers: {
        deleteType: (state, action) => {
            state.types = state.types.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTypes.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchTypes.fulfilled, (state, action) => {
                state.loading = false;
                state.types = action.payload;
            })
            .addCase(fetchTypes.rejected, state => {
                state.loading = false;
                state.error = true;
            })
    }
})

const { reducer, actions } = typeSlice;
export const { deleteType } = actions;
export default reducer