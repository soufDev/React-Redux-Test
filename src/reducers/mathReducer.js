const mathReducer = (state={
    result: 1,
    defaultValues: []
}, action) => {
    switch(action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.defaultValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.defaultValues, action.payload]
            };
            break;
    }
    return state;
};

export default mathReducer;