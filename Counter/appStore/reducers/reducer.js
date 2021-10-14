const initialState = {
    value: 0, 
    text: 'Hello'
}
export const valueReducer = (
    state = initialState, action) => {
        switch(action.type) {
            case 'CHANGE_VALUE':
                return {...state, value: action.payload};
            default:
                return state;
        }
    }



