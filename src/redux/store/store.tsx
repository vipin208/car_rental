import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carInfoApi } from "../query/CarsQuery";



export const store = configureStore({
    reducer:{
        // groceries:groceryReducer,
        [carInfoApi.reducerPath]:carInfoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carInfoApi.middleware),
})


setupListeners(store.dispatch)