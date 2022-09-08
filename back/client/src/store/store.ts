import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import user from "./user/userSlice";
import types from "./types/typeSlice";
import categories from "./category/categorySlice";

const store = configureStore({
    reducer: {
        user,
        types,
        categories
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;