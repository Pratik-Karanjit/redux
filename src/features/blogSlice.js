import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    title: "",
    description: "",
}

export const blogSlice = createSlice({
    //give unique name
    name: 'blog',
    initialState: initialStateValue,
    reducers: {
        
        changeTitle: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.title = action.payload
        },
        changeDescription: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.description = action.payload
        }
    },
})

export const {changeTitle,changeDescription} = blogSlice.actions;

export default blogSlice.reducer