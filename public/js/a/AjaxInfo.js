// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi"], function(aPi) {
  var aAjaxInfo, _ref;
  return aAjaxInfo = (function(_super) {
    __extends(aAjaxInfo, _super);

    function aAjaxInfo() {
      _ref = aAjaxInfo.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aAjaxInfo.prototype.init = function() {
      var _this = this;
      $(document).ajaxStart(function() {
        return _this.e.show();
      });
      return $(document).ajaxStop(function() {
        return _this.e.hide();
      });
    };

    return aAjaxInfo;

  })(aPi);
});