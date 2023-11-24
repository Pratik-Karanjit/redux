import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    CourseName: "Database",
    module: "abc123",
}

export const courseSlice = createSlice({
    //give unique name
    name: 'course',
    initialState: initialStateValue,
    reducers: {
        changeCourse: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.CourseName = action.payload
        },
        changeModule: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.module = action.payload
        }
    },
})

export const {changeCourse,changeModule} = courseSlice.actions;

export default courseSlice.reducer