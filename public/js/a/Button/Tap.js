// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi"], function(aPi) {
  var aTap, _ref;
  return aTap = (function(_super) {
    __extends(aTap, _super);

    function aTap() {
      _ref = aTap.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aTap.prototype.attr = function() {
      return aTap.__super__.attr.apply(this, arguments).concat(["msg", "click"]);
    };

    aTap.prototype.init = function() {
      var _this = this;
      this.e.click(function(ev) {
        ev.preventDefault();
        return false;
      });
      return this.e.bind("touchstart", function(ev) {
        ev.stopPropagation();
        return _this.pub(_this.a.msg, _this.e.data());
      });
    };

    return aTap;

  })(aPi);
});
