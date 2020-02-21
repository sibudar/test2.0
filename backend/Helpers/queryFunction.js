const conn = require ('../config/db');
const bcrypt = require("bcryptjs");

/**
 * Executes a query.
 * @param {*} sql
 * @param {*} data
 * @returns the data executed from a query.
 */
function queryFunction (sql, data) {
  return new Promise ((resolve, reject) => {
    try {
      let result = conn.query (sql, [data]);
      resolve (result); // Yay! Everything went well!
    } catch (error) {
      reject (error);
    }
  });
}

module.exports = queryFunction;