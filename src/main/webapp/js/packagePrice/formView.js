(function() {

  var pricePage = booking.namespace("pricePage");

  function init(getPriceCallback, pageObject) {
    this.pageObject = pageObject;
    pageObject.fetchPriceButton.click(getPriceCallback);
  }

  function getWeight() {
    return this.pageObject.weight.val();
  }

  pricePage.formView = {
    init: init,
    getWeight: getWeight
  };

}());