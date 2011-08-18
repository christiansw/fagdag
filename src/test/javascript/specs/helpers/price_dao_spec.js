describe('Price DAO', function () {

  var dao;
  var ajaxSpy;

  beforeEach(function () {
    dao = Object.create(booking.helpers.priceDao);
    ajaxSpy = sinon.spy();
    this.oldAjax = $.ajax;
    $.ajax = ajaxSpy;

    ajaxSpy.callArgument = function() {
        return this.getCall(0).args[0];
    };
  });

  afterEach(function() {
    $.ajax = this.oldAjax;
  });


  it('should be namespaced', function() {
    expect(dao).toBeDefined();
  });
  

  it('should reject empty weight', function () {
    expect(function() { dao.getPrice(); }).toThrow(new TypeError("Weight must be set"))
  });


  it('should require successfunction', function () {
    expect(function() { dao.getPrice(3); }).toThrow(new TypeError("Success function must be set"))
  });


  it('should invoke ajax with GET', function () {
    dao.getPrice(3, function(){});

    expect(ajaxSpy).toHaveBeenCalled();

    var ajaxRequestType = ajaxSpy.callArgument().type;
    expect(ajaxRequestType).toEqual("GET");
  });


  it('should invoke ajax with weight as request parameter', function () {
    var weight = 3;
    dao.getPrice(weight, function() {});

    expect(ajaxSpy).toHaveBeenCalled();
    
    var ajaxRequestParams = ajaxSpy.callArgument().data;
    expect(ajaxRequestParams).toEqual({ "weight": weight });
  });


  it('should invoke successfunction with data from remote service', function () {
    var successFunction = sinon.spy();

    dao.getPrice(3, successFunction);
    
    var jQuerySuccessFn = ajaxSpy.callArgument().success;
    var remoteData = { "price" : 9 };
    jQuerySuccessFn(remoteData); //simulate jQuery success

    expect(successFunction).toHaveBeenCalledWith(remoteData);
  });
});
