import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    city: "kathmandu",
    province: 3,
}

export const addressSlice = createSlice({
    //give unique name
    name: 'address',
    initialState: initialStateValue,
    reducers: {
        changeCity: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.city = action.payload
        },
        changeProvince: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.province = action.payload
        }
    },
})

export const {changeCity,changeProvince} = addressSlice.actions;

export default addressSlice.reducer