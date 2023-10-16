import {configureStore} from "@reduxjs/toolkit";
import {spendingApi} from "@shared-stores";

const store = configureStore({
    reducer: {
        [spendingApi.reducerPath]: spendingApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        spendingApi.middleware
    ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
