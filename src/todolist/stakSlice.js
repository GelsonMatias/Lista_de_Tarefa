import { createSlice } from "@reduxjs/toolkit";

// Estado Inicial
const initialState = [
    {id: '1', name: 'Consumir uma Biblioteca', tool: 'JSON'},
];

const stakSlice = createSlice({
    name: 'staks',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            // console.log(action);
            state.push(action.payload);
        },

        editStak: (state, action) => {
            const {id, name, tool} = action.payload;
            const existSatk = state.find(stak => stak.id === id);
            if(existSatk)
            {
                existSatk.name = name;
                existSatk.tool = tool;
            }
        },

        deleteStak: (state, action) =>{
            const{id} = action.payload;
            const existSatk = state.find(stak => stak.id === id);
            if(existSatk)
            {
                return state.filter(stak => stak.id !== id);
            }
        }
    }
});

export const { addTodo, editStak, deleteStak } = stakSlice.actions;
export default stakSlice.reducer;