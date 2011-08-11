describe('Controller', function() {

  var controller;

	beforeEach(function() {
    controller = Object.create(bekk.fagdag.controller);
	});
		
	it('should be namespaced',function(){
    expect(controller).toBeDefined();
	});

	it('should be observable',function(){
    expect(controller.observe).toBeDefined();
    expect(controller.notify).toBeDefined();
	});

});

