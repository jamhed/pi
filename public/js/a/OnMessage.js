// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi"], function(aPi) {
  var onMessage, _ref;
  return onMessage = (function(_super) {
    __extends(onMessage, _super);

    function onMessage() {
      _ref = onMessage.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    onMessage.prototype.attr = function() {
      return onMessage.__super__.attr.apply(this, arguments).concat(["init"]);
    };

    onMessage.prototype.init = function() {
      var _this = this;
      this.sub("set", function(ev, data) {
        return _this.e.html(data);
      });
      if (this.a.init) {
        return this.pub(this.a.init);
      }
    };

    return onMessage;

  })(aPi);
});