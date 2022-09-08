import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "../../types/types";
import useHttp from "../../hooks/useHttp";

interface ICategoryState {
    category: ICategory[];
    loading: boolean;
    error: boolean;
}

const initialState: ICategoryState = {
    category: [],
    loading: false,
    error: false
}

export const fetchCategory = createAsyncThunk<ICategory[], string>(
    "category/fetchCategory",
    async (url) => {
        const { getData } = useHttp();
        return await getData(url)
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        deleteCategory: (state, action) => {
            state.category = state.category.filter(item => item.id !== action.payload)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategory.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
            })
            .addCase(fetchCategory.rejected, state => {
                state.loading = false;
                state.error = true
            })
    }
})

const { reducer, actions} = categorySlice;

export const { deleteCategory } = actions;
export default reducer;