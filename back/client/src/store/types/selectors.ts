import { createSelector } from "reselect";
import { RootState } from "../store";

const baseState = (state: RootState) => state.types;

export const types = createSelector(baseState, state => state.types);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);