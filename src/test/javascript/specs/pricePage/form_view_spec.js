describe('Form View', function() {

  var view, controller, pageObject;

  beforeEach(function() {
    view = Object.create(booking.pricePage.formView);
    controller = Object.create(booking.pricePage.controller);
    pageObject = {
      button : $("<button/>"),
      weight : $("<input/>")
    };
    view.init(controller, pageObject);
  });


  it('should be namespaced', function() {
    expect(view).toBeDefined();
  });


  it('should contain init and handleButtonClick methods', function () {
    expect(view.init).toBeDefined();
    expect(view.handleButtonClick).toBeDefined();
  });



  it('should invoke controller on button click', function () {
    controller.fetchPrice = sinon.spy();

    pageObject.weight.val("10");
    pageObject.button.click();

    expect(controller.fetchPrice).toHaveBeenCalledWith("10");
  });


  it('should prevent default action on button click', function () {
    controller.fetchPrice = sinon.stub();

    var event = jQuery.Event("click");
    event.preventDefault = sinon.spy();

    pageObject.button.trigger(event);

    expect(event.preventDefault).toHaveBeenCalled();
  });

});
