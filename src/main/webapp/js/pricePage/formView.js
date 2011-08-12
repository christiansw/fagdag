(function() {
//FormView

  function handleButtonClick(event) {
    console.log(event);
    this.controller.fetchPrice(this.weight.val());
    event.preventDefault();
    console.log(event.isDefaultPrevented);
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