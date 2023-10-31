import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {Tab, TabsState} from "../app/store.types";

const initialState: TabsState = {
    tabsList: [],
    isLoading: true,
    error: null,
};

export const fetchTabs = createAsyncThunk<Tab[], void, { rejectValue: string }>(
    'tabs/fetchTabs',
    async () => {
        try {
            const response = await fetch('/tabs.json');
            const data: Tab[] = await response.json();

            return data.sort((a, b) => a.order - b.order);
        } catch (error) {
            return Promise.reject('Error fetching tabs');
        }
    }
);

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchTabs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTabs.fulfilled, (state, action: PayloadAction<Tab[]>) => {
                state.isLoading = false;
                state.tabsList = action.payload;
            })
            .addCase(fetchTabs.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload ;
            });
    }
});

export default tabsSlice.reducer;