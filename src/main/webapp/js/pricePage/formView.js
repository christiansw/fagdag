(function() {
//FormView

  function init(controller, pageObject) {
    this.controller = controller;
    this.pageObject = pageObject;

    pageObject.button.click(this.handleButtonClick.bind(this));
  }

  function handleButtonClick(event) {
    this.controller.fetchPrice(this.pageObject.weight.val());
    event.preventDefault();
  }
  
  booking.namespace("pricePage").formView = {
    init : init,
    handleButtonClick : handleButtonClick
  };

}());