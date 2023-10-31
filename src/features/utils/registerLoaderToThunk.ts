import {ActionReducerMapBuilder, AsyncThunk, Draft, PayloadAction} from "@reduxjs/toolkit";

type GenericState = {
    isLoading: boolean;
    error?: string | null;
    [key: string]: unknown;
};

export function registerLoaderToThunk<TState extends GenericState, TData extends Draft<TState>[keyof Draft<TState>]>(
    builder: ActionReducerMapBuilder<TState>,
    thunk: AsyncThunk<TData, unknown, unknown>,
    dataKey: keyof TState
) {
    builder
        .addCase(thunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(thunk.fulfilled, (state, action: PayloadAction<unknown>) => {
            state.isLoading = false;
            (state as TState)[dataKey] = action.payload as TState[typeof dataKey]
        })
        .addCase(thunk.rejected, (state, action: PayloadAction<unknown>) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
}