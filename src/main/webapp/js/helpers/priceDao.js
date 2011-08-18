(function() {

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
        success: successFunction,
        error: function(data, status){
            alert(status);
        }
    });
  }

  var helpers = booking.namespace("helpers");

  helpers.priceDao = {
    getPrice : getPrice
  };

})();
