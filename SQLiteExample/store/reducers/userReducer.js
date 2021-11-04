const initialState = {
    user: [],
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            const newUser = {
                ID: action.payload.ID,
                Username: action.payload.Username,
                Email: action.payload.Email,
                Password: action.payload.Password
            }
            console.log(newUser);
            return {
                state,
            }
        default: 
            return state;
    }
}