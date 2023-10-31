import { configureStore } from '@reduxjs/toolkit';
import tabsSlice from "../features/tabsSlice";


export const store = configureStore({
    reducer: {
        tabs: tabsSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
