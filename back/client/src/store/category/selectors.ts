import { createSelector } from "reselect";
import { RootState } from "../store";

const baseState = (state: RootState) => state.categories;

export const category = createSelector(baseState, state => state.category);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);