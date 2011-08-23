describe('Price View', function() {

  var view, controller, pageObject;
  var states = booking.pricePage.states;


  beforeEach(function() {
    view = Object.create(booking.pricePage.priceView);
    controller = Object.create(booking.pricePage.controller);
    pageObject = {
      priceLabel : $("<span/>")
    };
    view.init(controller, pageObject);
  });


  it('should be namespaced', function() {
    expect(view).toBeDefined();
  });


  it('should show price on priceReady event', function () {
    //precondition:
    expect(pageObject.priceLabel.html()).toBe("");

    controller.notify(states.priceReady, { price : 32});

    expect(pageObject.priceLabel.html()).toBe("32");
  });


});
