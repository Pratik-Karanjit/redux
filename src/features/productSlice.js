import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "Apple",
    price: 100,
    quantity: 10
}


export const productSlice = createSlice({
    //give unique name
    name: 'product',
    initialState: initialStateValue,
    reducers: {
        
        changeProductName: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.name = action.payload
        },
        changePrice: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.price = action.payload
        },
        changeQuantity: (state,action) => {       //action is passed so that the name given inside of dispatch in Project file gets called
            state.quantity = action.payload
        }
    },
})

export const {changeProductName,changePrice,changeQuantity} = productSlice.actions;

export default productSlice.reducer