import {createUser} from '../../src/helper/db';

export const addUser = (ID, username, email, password) => {
    return async (dispatch) => {
      try {
        const dbResult = await createUser(ID, username, email, password);
        console.log(dbResult);
        dispatch({
          type: 'CREATE_USER',
          payload: {ID: ID, Username: username, Email: email, Password: password},
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };