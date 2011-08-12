describe('Controller', function() {

  var controller, formView, priceView, pageObject;
  var states = booking.pricePage.states;

  beforeEach(function() {
    controller = Object.create(booking.pricePage.controller);
    formView = { init : sinon.spy() };
    priceView = { init : sinon.spy() };
    pageObject = {};
  });

  it('should be namespaced', function() {
    expect(controller).toBeDefined();
  });


  it('should be observable', function () {
    expect(controller.notify).toBeDefined();
    expect(controller.observe).toBeDefined();
  });


  it('should create formView', function () {
    controller.init(formView, priceView, pageObject);

    expect(controller.formView).toBeDefined();
  });


  it('should init formView and pass in itself and page object', function () {
    controller.init(formView, priceView, pageObject);

    expect(formView.init).toHaveBeenCalledWith(controller, pageObject);
  });

  it('should init priceView and pass in itself and page object', function () {
    controller.init(formView, priceView, pageObject);

    expect(priceView.init).toHaveBeenCalledWith(controller, pageObject);
  });


  it('should contain fetchPrice method', function () {
    expect(controller.fetchPrice).toBeDefined();
  });


  it('should multiply weight by three on fetchPrice and notify price ready with price argument', function () {
    var observer = sinon.spy();
    controller.observe(states.priceReady, observer)

    controller.fetchPrice("10");

    expect(observer).toHaveBeenCalledWith({ price : 30});
    
  });

});
