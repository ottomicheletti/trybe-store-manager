const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../helpers/connection');

const {
  getAllProductsService,
  getProductByIdService,
  insertNewProductService,
  updateProductNameService,
  deleteProductService,
  // queryProductService,
} = require('../../../services/productServices');

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

describe('Testa o retorno de funções da camada SERVICES relacionadas aos endpoints /products e /products/:id', () => {
  before(async () => {
    sinon.stub(connection, 'execute').returns(productsDB);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Função getAllProductsServices()', async () => {
    const response = await getAllProductsService();
    expect(response).to.be.a('object');
  });

  it('Função getProductByIdService(1)', async () => {
    const response = await getProductByIdService(1);
    expect(response).to.have.all.keys('name', 'id');
  });

  it('Função insertNewProductService("Xablau")', async () => {
    const response = await insertNewProductService('Xablau');
    expect(response).to.be.a('object');
    expect(response).to.have.a.property('name').to.be.equal('Xablau');
  });

  it('Função updateProductNameService(1, "Xablau")', async () => {
    const response = await updateProductNameService(1,'Xablau');
    expect(response).to.be.a('object');
  });

  it('Função deleteProductService(1)', async () => {
    const [response] = await deleteProductService(2);
    expect(response).to.be.a('object');
  });
});
