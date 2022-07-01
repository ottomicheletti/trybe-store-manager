const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../helpers/connection');

const {
  getAllProductsService,
  getProductByIdService,
  insertNewProductService,
  updateProductNameService,
  // deleteProductService,
  // queryProductService,
} = require('../../../services/productServices');

const {
  getAllProductsController,
  getProductByIdController,
  insertNewProductController,
  // updateProductNameController,
  // deleteProductController,
} = require('../../../controllers/productControllers');

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

describe('Testa o retorno de funções da camada CONTROLLER relacionadas aos endpoints /products e /products/:id', () => {

  it('Função getAllProductsController()', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(connection, 'execute').returns(productMock);

    await getAllProductsController(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);

    connection.execute.restore();
  });

})
