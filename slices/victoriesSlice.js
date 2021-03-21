import {createSlice} from '@reduxjs/toolkit';

export const victoriesSlice = createSlice({
    name: 'victories',
    initialState: {
        value: null
    },
    reducers: {
        updateVictories: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {updateVictories} = victoriesSlice.actions

export default victoriesSlice.reducer