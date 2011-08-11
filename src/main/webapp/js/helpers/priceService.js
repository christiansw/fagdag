(function() {

  var helpers = bekk.namespace("fagdag.helpers");

  function getPrice(data, successFunction) {
    $.ajax({
        url: "price.jsp",
        data: data,
        dataType : 'json',
        success: function(data){
            successFunction(data);
        },
        error: function(data, status){
            alert(status);
        }
    });
  }

  function init() {
  }

  helpers.priceService = {
    getPrice : getPrice,
    init : init
  };

})();