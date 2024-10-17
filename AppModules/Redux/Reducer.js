import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    data: [],
};
const homeReducer = createSlice({
    name:'homeReducer',
    initialState:INITIAL_STATE,
    reducers:{
        addData : (state,action) => {
            if(state.data.length === 0) {
                state.data = action.payload;
            } else {
                state.data = [...state.data,...action.payload];
            }
        },
    },
});
export const {addData} = homeReducer.actions;
export default homeReducer.reducer;
