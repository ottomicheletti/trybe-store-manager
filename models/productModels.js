const connection = require('../helpers/connection');

const getAllProducts_M = async () => {
  const result = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductById_M = async (id) => {
  const [ result ] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAllProducts_M,
  getProductById_M,
};
