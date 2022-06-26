import { configureStore } from "@reduxjs/toolkit";
import addmissionSlice from "./features/addmission/addmissionSlice";

const store=configureStore({
    reducer:{
        admission:addmissionSlice,
    }

})

export default store;