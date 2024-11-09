import {configureStore} from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authSlice.reducer";
import travelBookingSliceReducer from "./Slices/travelBookingSlice.reducer";


const store = configureStore({
    reducer :{
        auth : authSliceReducer,
        booking : travelBookingSliceReducer,
    },

    devTools:true
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
