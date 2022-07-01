const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../helpers/connection');
const {
  getAllProductsModel,
  getProductByIdModel,
  insertNewProductModel,
  updateProductNameModel,
} = require('../../../models/productModels');

const productMock = [
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
    sinon.stub(connection, 'execute').returns(productMock);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Função getAllProductsModel', async () => {
    const response = await getAllProductsModel();
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name');
    expect(response).to.have.a.property('id');
  });

  it('Função getProductByIdModel', async () => {
    const response = await getProductByIdModel(1);
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name');
    expect(response).to.have.a.property('id');
  });

  it('Função insertNewProductModel', async () => {
    const response = await insertNewProductModel('Xablau');
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name').to.be.equal('Xablau');
  });

  it('Função updateProductNameModel', async () => {
    const response = await updateProductNameModel(1,'Xablau');
    expect(response).to.be.a('object');
  });
});
