import {checkUser, createUser} from '../../src/helper/db';

export const addUser = (ID, username, email, password, callback) => {
    return async (dispatch) => {
      try {
        const dbResult = await checkUser(ID, username, email, password);
        console.log(dbResult);
        if(dbResult === 'alert'){
          dispatch({type: 'ALERT_TEXT', payload: 'User exist'});
        } else if (dbResult === 'newUser'){
          const dbResult_ = await createUser(ID, username, email, password);
          console.log(dbResult_);
          dispatch({
            type: 'CREATE_USER',
            payload: {ID: ID, Username: username, Email: email, Password: password},
          });
          dispatch({type: 'ALERT_TEXT', payload: 'Registration success'});
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
      callback();
    };
  };