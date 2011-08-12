(function() {

  var fagdag = bekk.namespace("fagdag");

  function getPrice(data) {
    this.priceService.getPrice(data, this.setPrice.bind(this));
  }

  function setPrice(data) {
    this.priceView.setPrice(data.price);    
  }

  function init() {
    this.priceService = Object.create(bekk.fagdag.helpers.priceService);
    this.priceService.init();

    this.formView = Object.create(bekk.fagdag.views.formView);
    this.formView.init(getPrice.bind(this));

    this.priceView = Object.create(bekk.fagdag.views.priceView);
  }

  fagdag.controller = bekk.extend(
    {
      init: init,
      setPrice: setPrice,
      getPrice: getPrice
    },
    bekk.util.observable);
})();