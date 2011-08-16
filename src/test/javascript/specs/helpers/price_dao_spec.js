describe('Price DAO', function () {

  var dao;
  var ajaxSpy;

  beforeEach(function () {
    dao = Object.create(booking.helpers.priceDao);
    ajaxSpy = sinon.spy();
    this.oldAjax = $.ajax;
    $.ajax = ajaxSpy;
  });

  afterEach(function() {
    $.ajax = this.oldAjax;
  });


  it('should reject empty weight', function () {
    expect(function(){ dao.getPrice(); }).toThrow(new TypeError("Weight must be set"))
  });


  it('should require successfunction', function () {
    expect(function(){ dao.getPrice(3); }).toThrow(new TypeError("Success function must be set"))
  });


  it('should invoke ajax with weight as request parameter', function () {
    var weight = 3;
    dao.getPrice(weight, function() {});

    expect(ajaxSpy.called).toBeTruthy();
    expect(ajaxSpy.getCall(0).args[0].data).toEqual({ "weight": weight});
  });


  it('should invoke ajax with GET', function () {
    dao.getPrice({}, function(){});

    expect(ajaxSpy.called).toBeTruthy();
    expect(ajaxSpy.getCall(0).args[0].type).toEqual("GET");
  });


  it('should invoke successfunction with result data from remote service', function () {
    var remoteData = { "price" : 9 };

    var successFunction = sinon.spy();

    dao.getPrice(3, successFunction);
    ajaxSpy.getCall(0).args[0].success(remoteData); //force success!

    expect(successFunction).toHaveBeenCalledWith(remoteData);
  });


});
