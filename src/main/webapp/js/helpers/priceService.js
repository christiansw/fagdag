(function() {

  var helpers = booking.namespace("helpers");

  function getPrice(weight, successFunction) {
    data = { "weight" : weight };

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
  
  helpers.priceService = {
    getPrice : getPrice
  };

})();
