const connection = require('../helpers/connection');

const getAllProductsModel = async () => {
  const result = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getProductByIdModel = async (id) => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAllProductsModel,
  getProductByIdModel,
};
