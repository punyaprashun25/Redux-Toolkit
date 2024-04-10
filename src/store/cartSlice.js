import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : [],
    reducers :{
        addItem(state, action){
            // directly changing state because of redux toolkit
            state.push(action.payload);
        },
        removeItem(state, action){
            // here who's id is not in the action payload that will be retains otherwise filter
            state = state.filter((item)=> item.id!==action.payload)
        },
    },
});

// first we have to expose the method of the store
export const {addItem, removeItem} = cartSlice.actions;

// and also the reducers
export default cartSlice.reducer;