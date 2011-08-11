(function() {

  var views = bekk.namespace("fagdag.views");

  function getData() {
      return {
        weight: $("#weight").val()
      };
  }

  function init(clickCallback) {

    $("#fetchPrice").click(
      function(event){
        clickCallback(getData());
        event.preventDefault();
      }
    );
  }

  views.formView = {
    init : init
  }

})();