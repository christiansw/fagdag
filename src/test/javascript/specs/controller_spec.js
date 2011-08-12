describe('Controller', function() {

  var controller;

	beforeEach(function() {
    controller = Object.create(booking.pricePage.controller);
	});
		
	it('should be namespaced',function(){
    expect(controller).toBeDefined();
	});

	it('should be observable',function(){
    expect(controller.observe).toBeDefined();
    expect(controller.notify).toBeDefined();
	});

  it('should init formView with with fetch price callback and pageObject', function(){
    var pageObject = {};
    var formView = {};
    formView.init = sinon.spy();

    controller.init(pageObject, formView);
    
    expect(formView.init).toHaveBeenCalledWith(controller.fetchPrice, pageObject);
  });
});

