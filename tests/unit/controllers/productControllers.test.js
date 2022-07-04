const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
chai.use(chaiAsPromised);

const controller = require('../../../controllers/productControllers');
const service = require('../../../services/productServices');

const productsDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

describe('Testa o retorno de funções da camada CONTROLLER relacionadas aos endpoints /products e /products/:id', () => {


  describe('Função getAllProductsController()', () => {
    beforeEach(sinon.restore);
    it('Deve retornar o STATUS 200 quando a chamada for resolvida', async () => {

      sinon.stub(service, 'getAllProductsService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(),
      };

      await controller.getAllProductsController({}, res);
      chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    });

    // it('Deve retornar o STATUS 404 quando a chamada for rejeitada', async () => {

    //   sinon.stub(service, 'getAllProductsService').rejects();

    //   const res = {
    //     status: sinon.stub().callsFake( () => res),
    //     json: sinon.stub().returns(),
    //   };

    //   await controller.getAllProductsController({}, res);
    //   chai.expect(res.status.getCall(0).args[0]).to.equal(404);
    // });

    it('O json da response deve retornar com todos os produtos', async () => {

      sinon.stub(service, 'getAllProductsService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(productsDB),
      };

      await controller.getAllProductsController({}, res);
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal(productsDB);
    });
  });

  describe('Função getProductsByIdController(1)', () => {
    beforeEach(sinon.restore);
    it('Deve retornar o STATUS 200 quando a chamada for resolvida', async () => {

      sinon.stub(service, 'getProductByIdService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(),
      };

      const req = {
        params: {
          id: 1,
        },
        query: {
          q: null,
        },
      };

      await controller.getProductByIdController(req, res);
      chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    });

    it('Deve retornar todos os produtos quando req.query.q = " " e req.params.id = search', async () => {

      sinon.stub(service, 'getProductByIdService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(productsDB),
      };

      const req = {
        params: {
          id: 'search',
        },
        query: {
          q: '',
        },
      };

      await controller.getProductByIdController(req, res);
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal(productsDB);
    });

    it('Deve retornar um produto específico quando req.query.q = Martelo e req.params.id = search', async () => {

      sinon.stub(service, 'getProductByIdService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(productsDB[0]),
      };

      const req = {
        params: {
          id: 'search',
        },
        query: {
          q: 'Martelo',
        },
      };

      await controller.getProductByIdController(req, res);
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal([productsDB[0]]);
    });

    it('Deve retornar o STATUS 404 quando buscar um produto com id = 999', async () => {

      sinon.stub(service, 'getProductByIdService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(),
      };

      const req = {
        params: {
          id: 999,
        },
        query: {
          q: null,
        },
      };

      await controller.getProductByIdController(req, res);
      chai.expect(res.status.getCall(0).args[0]).to.equal(404);
    });
  });

  describe('Função insertNewProductController()', () => {
    beforeEach(sinon.restore);
    it('Deve retornar o STATUS 201 quando inserir um novo produto', async () => {

      sinon.stub(service, 'insertNewProductService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(),
      };

      const req = {
        body: {
          name: 'Xablau',
        },
      };

      await controller.insertNewProductController(req, res);
      chai.expect(res.status.getCall(0).args[0]).to.equal(201);
    });

    it('O res.json deve conter o produto inserido quando req.body.name = "Xablito"', async () => {

      sinon.stub(service, 'insertNewProductService').resolves();

      const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns({ id: 5, name: 'Xablito' }),
      };

      const req = {
        body: {
          name: 'Xablito',
        },
      };

      await controller.insertNewProductController(req, res);
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal({ id: 5, name: 'Xablito' });
    });
  });
});
