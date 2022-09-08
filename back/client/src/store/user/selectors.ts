import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const baseState = (state: RootState) => state.user;

export const email = createSelector(baseState, state => state.email);
export const role = createSelector(baseState, state => state.role);
export const token = createSelector(baseState, state => state.token);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);
export const allUsers = createSelector(baseState, state => state.allUsers);