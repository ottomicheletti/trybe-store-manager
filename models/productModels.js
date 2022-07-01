const connection = require('../helpers/connection');

const getAllProductsModel = async () => {
  const query = await connection.execute('SELECT * FROM StoreManager.products');
  return query;
};

const getProductByIdModel = async (id) => {
  const [query] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return query;
};

const insertNewProductModel = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );

  const newProduct = {
    id: insertId,
    name,
  };
  return newProduct;
};

const updateProductNameModel = async (id, name) => {
  const [query] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return query;
};

const deleteProductModel = async (id) => {
  const query = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return query;
};

module.exports = {
  getAllProductsModel,
  getProductByIdModel,
  insertNewProductModel,
  updateProductNameModel,
  deleteProductModel,
};
