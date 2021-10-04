import { ActionTypes } from "../contants/action-types"

const initialState = {
    products:[{
        id:1,
        tittle:"Dipesh",
        categroy:"Programmer"
    }]
}
export const product=(state,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};