(function() {
//Controller


  function init(formView, priceView, pageObject) {
    this.formView = formView;
    this.priceView = priceView;

    formView.init(this, pageObject);
    priceView.init(this, pageObject);

  }

  function fetchPrice(weight) {
    var states = booking.pricePage.states;
    var price = weight * 3;
    this.notify(states.priceReady, { price : price });
  }


  booking.namespace("pricePage").controller = booking.extend(
      {
        init : init,
        fetchPrice : fetchPrice
      },
      booking.util.observable);
}());
