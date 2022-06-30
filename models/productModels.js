const connection = require('../helpers/connection');

const getAllProductsModel = async () => {
  const result = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getProductByIdModel = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result;
};

const insertNewProductModel = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );

  const newProduct = {
    id: result.insertId,
    name,
  };
  return newProduct;
};

module.exports = {
  getAllProductsModel,
  getProductByIdModel,
  insertNewProductModel,
};
