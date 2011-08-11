describe('Controller', function() {

  var controller;

	beforeEach(function() {
	});
		
	it('should be namespaced',function(){
    controller = Object.create(bekk.fagdag.controller);
    expect(controller).toBeDefined();
	});

});

