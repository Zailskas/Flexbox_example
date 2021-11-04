import SQLite from 'react-native-sqlite-storage';


export const db = SQLite.openDatabase(
  {
    name: 'Garage',
    location: 'default',
    createFromLocation: '~Garage.db',
  },
  () => {
    console.log('OK veikia');
  },
  (error) => {
    console.log('Error:' + error);
  },
);
export const dropTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
        "DROP TABLE IF EXISTS Car; DROP TABLE IF EXISTS User"
        , [], (tx, result) => {
          console.log('tx', tx);
          console.log('Table are deleted');
        }
    )
})
}
export const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS Car (ID INTEGER PRIMARY KEY AUTOINCREMENT, Make TEXT, Model TEXT); CREATE TABLE IF NOT EXISTS User (ID TEXT PRIMARY KEY, Username TEXT NOT NULL, Email TEXT NOT NULL, Password TEXT NOT NULL);"
            , [], (tx, result) => {
              console.log('tx', tx);
              console.log('Car table is created');
            }
        )
    })
}
export const createUserTable = () => {
  db.transaction((tx) => {
      tx.executeSql(
          "CREATE TABLE IF NOT EXISTS User (ID TEXT PRIMARY KEY, Username TEXT NOT NULL, Email TEXT NOT NULL, Password TEXT NOT NULL);"
          , [], (tx, result) => {
            console.log('tx', tx);
            console.log('User table is created');
          }
      )
  })
}
export const init = () => {
  db;
};

export const insertCar = (make, model) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Car (Make, Model) VALUES (?, ?);',
        [make, model],
        (tx, result) => {
          resolve(result);
        },
        (tx, err) => {
          reject(err);
        },
      );
    });
  })
  return promise;
};

export const createRecord = () => {
    const make = "BMW";
    const model = "M3";
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Car (Make, Model) VALUES (?, ?);',
        [make, model],
        (tx, result) => {
          resolve(result);
        },
        (tx, err) => {
          reject(err);
        },
      );
    });
};

export const fetchCars = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Car', [], (tx, result) => {
          resolve(result);
        },
        (tx, err) => {
          reject(err);
        }
      );
    });
  });
  return promise
}

export const deleteCar = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM Car WHERE id=?', [id], (tx, result) => {
          console.log(result)
          resolve(result);
        },
        (tx, err) => {
          reject(err);
        }
      );
    });
  });
  return promise
}

export const createUser = (ID, username, email, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO User (ID, Username, Email, Password) VALUES (?, ?, ?, ?);',
        [ID, username, email, password],
        (tx, result) => {
          resolve(result);
          console.log(ID, username, email, password)
        },
        (tx, err) => {
          console.log(ID, username, email, password)
          console.log(tx)
          console.log('Kazkas ne taip');
          console.log(err)
          reject(err);
        },
      );
    });
  })
  return promise;
};