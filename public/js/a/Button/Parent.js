// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi"], function(aPi) {
  var aButtonParent, _ref;
  return aButtonParent = (function(_super) {
    __extends(aButtonParent, _super);

    function aButtonParent() {
      _ref = aButtonParent.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aButtonParent.prototype.attr = function() {
      return aButtonParent.__super__.attr.apply(this, arguments).concat(["msg"]);
    };

    aButtonParent.prototype.init = function() {
      var _this = this;
      return this.e.click(function(ev) {
        var _ref1;
        return _this.pub((_ref1 = _this.parent) != null ? _ref1.e : void 0, _this.a.msg, {
          ev: ev
        });
      });
    };

    return aButtonParent;

  })(aPi);
});