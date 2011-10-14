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


  it('should contain fetchPrice method', function () {
    expect(controller.fetchPrice).toBeDefined();
  });


  describe("fetchPrice method success", function() {

    it('should notify observers with priceReady event and DAO result', function () {
      var priceReadyObserver = sinon.spy();
      controller.observe(states.priceReady, priceReadyObserver)

      var daoResult = { price : "30"};
      controller.priceDao.getPrice = function(weight, callback) {
        expect(weight).toBe("10");
        callback(daoResult);
      }

      //snurr film:
      controller.fetchPrice("10");

      expect(priceReadyObserver).toHaveBeenCalledWith(daoResult);

    });
  });

});
