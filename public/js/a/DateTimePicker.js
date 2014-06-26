// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi", "lib/jquery-ui", "lib/time-picker", "conf/datetimepicker"], function(P, ui, Picker, Conf) {
  var DateTimePicker, _ref;
  return DateTimePicker = (function(_super) {
    __extends(DateTimePicker, _super);

    function DateTimePicker() {
      _ref = DateTimePicker.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    DateTimePicker.prototype.attr = function() {
      return DateTimePicker.__super__.attr.apply(this, arguments).concat(["msg"]);
    };

    DateTimePicker.prototype.init = function() {
      var _this = this;
      Conf["onSelect"] = function(date, o) {
        return _this.onSelect(date, o);
      };
      return this.e.datetimepicker(Conf);
    };

    DateTimePicker.prototype.onSelect = function(date, o) {
      if (this.a.msg) {
        return this.pub(this.a.msg, date);
      }
    };

    return DateTimePicker;

  })(P);
});