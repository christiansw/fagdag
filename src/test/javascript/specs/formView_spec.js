describe('FormView', function() {

  var formView;

  var pageObject = {
    fetchPriceButton : $({}),
    weight : $("<input/>")
  };

	beforeEach(function() {
    formView = Object.create(booking.pricePage.formView);
	});
		
	it('should be namespaced', function(){
    expect(formView).toBeDefined();
	});


	it('should invoke getPrice callback on button press', function(){
    var getPriceCallBack = sinon.spy();

    formView.init(getPriceCallBack, pageObject);
    pageObject.fetchPriceButton.click();

    expect(getPriceCallBack.called).toBeTruthy();
	});

  it('should fetch form data on getWeight', function(){
    formView.init(sinon.stub(), pageObject);

    var weight = '10';
    pageObject.weight.val('10');

    expect(formView.getWeight()).toBe(weight);
  });
});

