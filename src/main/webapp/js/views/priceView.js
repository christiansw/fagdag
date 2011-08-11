(function() {

  var views = bekk.namespace("fagdag.views");

  function setPrice(price) {
    $("#price").text(price);
  }

  views.priceView = {
    setPrice: setPrice
  }

})();