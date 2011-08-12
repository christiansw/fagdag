(function() {
//PriceView


  function showPrice(result) {
    this.priceLabel.html(result.price);
  }
  
  function init(controller, pageObject) {
    this.priceLabel = pageObject.priceLabel;

    var states = booking.pricePage.states;
    controller.observe(states.priceReady, this.showPrice.bind(this));
  }

  booking.namespace("pricePage").priceView = {
    init : init,
    showPrice : showPrice
  };
  
}());