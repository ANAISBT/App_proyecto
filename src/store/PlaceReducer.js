import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
    places:[],
}

const placeSlice=createSlice({
    name:"place",
    initialState,
    reducers:{}
});

export default placeSlice.reducer;