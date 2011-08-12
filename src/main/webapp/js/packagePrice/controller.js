(function() {

  var pricePage = booking.namespace("pricePage");

  function fetchPrice() {

  }

  function init(pageObject, formView) {
    formView.init(fetchPrice, pageObject);
  }

  pricePage.controller = Object.create(booking.util.observable);
  pricePage.controller.init = init;
  pricePage.controller.fetchPrice = fetchPrice;
  
})();