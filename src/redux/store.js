import { configureStore } from "@reduxjs/toolkit";
import tableReducer from './slice'
import teacherSlice from "./teacherSlice";

export const store = configureStore({
    reducer:{
        table:tableReducer,
        teacherSlice:teacherSlice
    },
})