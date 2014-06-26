// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/El"], function(aEl) {
  var aTemplate, _ref;
  return aTemplate = (function(_super) {
    __extends(aTemplate, _super);

    function aTemplate() {
      _ref = aTemplate.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aTemplate.prototype.attr = function() {
      return aTemplate.__super__.attr.apply(this, arguments).concat(["name", "replace"]);
    };

    aTemplate.prototype.set = function(r) {
      var tmpl,
        _this = this;
      tmpl = this.rt.source(this.a.name);
      if (tmpl) {
        return this.real_set(r, tmpl);
      } else {
        return this.wait((function() {
          return _this.rt.source(_this.a.name);
        }), function() {
          tmpl = _this.rt.source(_this.a.name);
          return _this.real_set(r, tmpl);
        });
      }
    };

    aTemplate.prototype.real_set = function(r, tmpl) {
      if (this.a.replace === "") {
        this.ee = $(tmpl({
          r: r,
          o: this
        }));
        this.e.replaceWith(this.ee);
        return this.rt.pi(this.ee);
      } else {
        this.e.html(tmpl({
          r: r,
          o: this
        }));
        return this.rt.pi(this.e);
      }
    };

    return aTemplate;

  })(aEl);
});
