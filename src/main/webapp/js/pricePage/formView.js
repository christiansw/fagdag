(function() {
//FormView

  function handleButtonClick(event) {
    this.controller.fetchPrice(this.weight.val());
    event.preventDefault();
  }
  
  function init(controller, pageObject) {
    this.controller = controller;
    this.weight = pageObject.weight;
    
    pageObject.button.click(this.handleButtonClick.bind(this));

  }

  booking.namespace("pricePage").formView = {
    init : init,
    handleButtonClick : handleButtonClick
  };

}());