// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/El"], function(aEl) {
  var aInclude, _ref;
  return aInclude = (function(_super) {
    __extends(aInclude, _super);

    function aInclude() {
      _ref = aInclude.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aInclude.prototype.set = function(text) {
      var div;
      div = $("<div style=\"display: none\">").appendTo($("body"));
      div.html(text);
      this.rt.pi(div);
      return div.remove();
    };

    return aInclude;

  })(aEl);
});