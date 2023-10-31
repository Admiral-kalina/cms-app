import {createAsyncThunk, createSlice,} from '@reduxjs/toolkit';

import {Tab, TabsState} from "../app/store.types";

import {registerLoaderToThunk} from "./utils/registerLoaderToThunk";

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
        registerLoaderToThunk<TabsState, Tab[]>(builder, fetchTabs, 'tabsList')
    }
});

export default tabsSlice.reducer;