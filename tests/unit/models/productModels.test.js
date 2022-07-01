const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../helpers/connection');
const {
  getAllProductsModel,
  getProductByIdModel,
  insertNewProductModel,
  updateProductNameModel,
  deleteProductModel,
} = require('../../../models/productModels');

const productsDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje do Encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

describe('Testa o retorno de funções da camada MODEL relacionadas aos endpoints /products e /products/:id', () => {
  before(async () => {
    sinon.stub(connection, 'execute').returns(productsDB);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Função getAllProductsModel()', async () => {
    const response = await getAllProductsModel();
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name');
    expect(response).to.have.a.property('id');
  });

  it('Função getProductByIdModel(1)', async () => {
    const response = await getProductByIdModel(1);
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name');
    expect(response).to.have.a.property('id');
  });

  it('Função insertNewProductModel("Xablau")', async () => {
    const response = await insertNewProductModel('Xablau');
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name').to.be.equal('Xablau');
  });

  it('Função updateProductNameModel(1, "Xablau")', async () => {
    const response = await updateProductNameModel(1,'Xablau');
    expect(response).to.be.a('object');
  });

  it('Função deleteProductModel(1)', async () => {
    const [response] = await deleteProductModel(2);
    expect(response).to.be.a('object');
  });
});
