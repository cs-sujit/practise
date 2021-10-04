
const initialState = 0;

const changeTheNumber=(state=initialState,action)=>{
    switch(action.type){
        case "INREMENT": return state+1;
        case "DECREMENT": return state-1;
        default : return state;
    }
}

export default changeTheNumber;