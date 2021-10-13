const initialState = {
    value: 0
}
export const valueReducer = (
    state = initialState, action) => {
        switch(action.type) {
            case 'CHANGE_VALUE':
                console.log('Reducer')
                console.log(action.payload);
                return {...state, value: action.payload};
            default:
                return state;
        }
    }



