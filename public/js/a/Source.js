// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/El", "m/Source"], function(aEl, mSource) {
  var aSource, _ref;
  return aSource = (function(_super) {
    __extends(aSource, _super);

    function aSource() {
      _ref = aSource.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aSource.prototype.attr = function() {
      return aSource.__super__.attr.apply(this, arguments).concat(["name"]);
    };

    aSource.prototype.set = function(text) {
      this.debug("a/Source", this.a.name);
      return new mSource(this.a.name, text);
    };

    return aSource;

  })(aEl);
});
