const initialState = {
    cars: [],
}

export const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CAR':
            console.log(action.payload.id);
            const newCar = {
                id: action.payload.id,
                make: action.payload.make,
                model: action.payload.model
            }
            return {
                cars: state.cars.concat(newCar),
            }
        case 'SHOW_ALL': 
            return {
                cars: [...state.cars]
            }
        case 'DELETE_CAR':
            const index = state.cars.findIndex((car) => car.id === action.id);
            return {
                cars: [...state.cars.slice(0, index), ...state.cars.slice(index+1)]
            }
        default: 
            return state;
    }
}