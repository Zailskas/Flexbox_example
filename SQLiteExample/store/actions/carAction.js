import {insertCar, fetchCars, deleteCar} from '../../src/helper/db';
/*export function addCar(make, model, id) {
    return { type: 'ADD_CAR', make: make, model: model, id: id }
}*/

export function showAll() {
    return {type: 'SHOW_ALL'}
}

/*export function deleteCar(id) {
    return {type: 'DELETE_CAR', id: id}
}*/

export const addCar = (make, model) => {
    return async (dispatch) => {
      try {
        const dbResult = await insertCar(make, model);
        console.log(dbResult);
        dispatch({
          type: 'ADD_CAR',
          payload: {id: dbResult.insertId, make: make, model: model},
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };