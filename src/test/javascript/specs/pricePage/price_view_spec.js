describe('Price View', function() {

  var view, controller;
  var states = booking.pricePage.states;


  beforeEach(function() {
    view = Object.create(booking.pricePage.priceView);
    controller = Object.create(booking.pricePage.controller);
    pageObject = {
      priceLabel : $("<span/>")
    };
  });
    
  it('should be namespaced', function() {
    expect(view).toBeDefined();
  });
  
  it('should listen for price ready events bound to view', function () {
    view.showPrice = sinon.stub();

    view.init(controller, pageObject);

    controller.notify(states.priceReady);

    expect(view.showPrice).toHaveBeenCalled();
    expect(view.showPrice.calledOn(view)).toBeTruthy();
  });


  it('should show price', function () {
    view.init(controller, pageObject);

    view.showPrice({ price : 32});

    expect(pageObject.priceLabel.html()).toBe("32");
  });


});
