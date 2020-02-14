const conn = require("../config/db");

/**
 * Will execute a query.
 * @param {*} sql
 * @param {*} data
 * returns the data of the query.
 */
function queryFunction(sql, data) {
  return new Promise((resolve, reject) => {
    try {
      let result = conn.query(sql, [data]);

      resolve(result); // Yay! Everything went well!
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = queryFunction;
