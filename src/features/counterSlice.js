import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "nitan",
    age: 29,
    address: "Lalitpur",
    isMarried: false,
}




export const counterSlice = createSlice({
    //give unique name
    name: 'infoSlice',
    initialState: initialStateValue,
    reducers: {
        changeName: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.name = action.payload
        },
        changeAge: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.age = action.payload
        },
        changeAddress: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.address = action.payload
        }
    },
})

export const {changeName,changeAge,changeAddress} = counterSlice.actions;

export default counterSlice.reducer