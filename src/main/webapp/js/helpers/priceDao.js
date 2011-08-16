(function() {

  var helpers = booking.namespace("helpers");

  function getPrice(weight, successFunction) {
    if (!weight) {
      throw new TypeError("Weight must be set");
    }

    if (!successFunction) {
      throw new TypeError("Success function must be set");
    }

    var params = { "weight" : weight };

    $.ajax({
        url: "price.jsp",
        data: params,
        type : "GET",
        dataType : 'json',
        success: function(data){
            successFunction(data);
        },
        error: function(data, status){
            alert(status);
        }
    });
  }
  
  helpers.priceDao = {
    getPrice : getPrice
  };

})();
