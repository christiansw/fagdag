describe('Controller', function() {

  var controller, formView, priceView, pageObject;
  var states = booking.pricePage.states;

  beforeEach(function() {
    pageObject = {};
    formView = { init : sinon.stub() };
    priceView = { init : sinon.stub() };
    controller = Object.create(booking.pricePage.controller);
    controller.init(formView, priceView, pageObject);
  });

  
  it('should be namespaced', function() {
    expect(controller).toBeDefined();
  });


  it('should be observable', function () {
    expect(controller.notify).toBeDefined();
    expect(controller.observe).toBeDefined();
  });


  it('should init views and pass in itself and page object', function () {
    controller.init(formView, priceView, pageObject);

    expect(formView.init).toHaveBeenCalledWith(controller, pageObject);
    expect(priceView.init).toHaveBeenCalledWith(controller, pageObject);
  });


  it('should contain fetchPrice method', function () {
    expect(controller.fetchPrice).toBeDefined();
  });


  describe("fetchPrice method success", function() {

    it('should notify observers with priceReady event and DAO result', function () {
      var dummyObserver = sinon.spy();
      controller.observe(states.priceReady, dummyObserver)

      controller.priceDao.getPrice = sinon.spy();

      controller.fetchPrice("10");

      var daoSuccessFn = controller.priceDao.getPrice.getCall(0).args[1];
      var daoResult = { price : 30};
      daoSuccessFn(daoResult); //force success!

      expect(dummyObserver).toHaveBeenCalledWith(daoResult);

    });
  });

});
