import {spendingApi} from "@shared-stores";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [spendingApi.reducerPath]: spendingApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spendingApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
