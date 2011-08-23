(function() {
//PriceView

  function init(controller, pageObject) {
    this.pageObject = pageObject;

    var states = booking.pricePage.states;
    controller.observe(states.priceReady, this.showPrice.bind(this));
  }

  function showPrice(result) {
    this.pageObject.priceLabel.html(result.price);
  }
  

  booking.namespace("pricePage").priceView = {
    init : init,
    showPrice : showPrice
  };
  
}());
