(function() {
//Controller


  function init(formView, priceView, pageObject) {
    this.formView = formView;
    this.priceView = priceView;

    formView.init(this, pageObject);
    priceView.init(this, pageObject);

    this.priceDao = Object.create(booking.helpers.priceDao);
  }

  function fetchPrice(weight) {
    var states = booking.pricePage.states;

    this.priceDao.getPrice(weight, function(result) {
      this.notify(states.priceReady, result);
    }.bind(this));
  }

  booking.namespace("pricePage").controller = booking.extend(
      {
        init : init,
        fetchPrice : fetchPrice
      },
      booking.util.observable);
}());
