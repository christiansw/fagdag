describe('Price DAO', function () {

  var dao;

  beforeEach(function () {
    dao = Object.create(booking.helpers.priceDao);
    this.oldAjax = $.ajax;
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
    var invoked = false;
    $.ajax = function(options) {
      expect(options.type).toBe("GET");
      invoked = true;
    }

    dao.getPrice(3, function(){});

    expect(invoked).toBeTruthy();

  });


  it('should invoke ajax with weight as request parameter', function () {
    var weight = 3;

    var invoked = false;
    $.ajax = function(options) {
      expect(options.data).toEqual({ "weight": weight });
      invoked = true;
    }

    dao.getPrice(weight, function() {});

    expect(invoked).toBeTruthy();
  });


  it('should invoke successfunction with data from remote service', function () {
    var remoteData = { "price" : 9 };
    $.ajax = function(options) {
      options.success(remoteData); //simulate jquery ajax success
    }

    var invoked = false;
    dao.getPrice(3, function(result) {
      expect(result).toBe(remoteData);
      invoked = true;
    });

    expect(invoked).toBeTruthy();
  });
});
