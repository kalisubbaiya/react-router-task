export const initialState ={
    product: [],
    isPriority: false,
    isCompleted: false
};

export const stateReducer = (state, action) =>{
    console.log("state", state, "action", action);
    switch (action.type){
        case "ADD_TASK" :
            return{
                ...state,
                product: action.payload,
            };
        default: return state;
    }    
}