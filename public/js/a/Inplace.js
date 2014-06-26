// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi", "lib/doT", "lib/URI/URI"], function(aPi, doT, URI) {
  var aInplace;
  return aInplace = (function(_super) {
    __extends(aInplace, _super);

    aInplace.prototype.tmpl = null;

    aInplace.prototype.ee = null;

    aInplace.prototype.e = null;

    aInplace.prototype.attr = function() {
      return aInplace.__super__.attr.apply(this, arguments).concat(["uri"]);
    };

    function aInplace() {
      var _this = this;
      aInplace.__super__.constructor.apply(this, arguments);
      this.sub("update", function(ev, data) {
        return _this.append();
      });
    }

    aInplace.prototype.append = function() {
      var _this = this;
      if (this.a.uri === void 0) {
        return this.ee.html(this.tmpl(this.rt.uri.query(true)));
      }
      if (this.a.uri === "") {
        return this.post(this.rt.uri.fragment(), {}, function(r) {
          _this.ee.html(_this.tmpl(r));
          return _this.rt.pi(_this.ee);
        });
      } else {
        return this.post(this.a.uri, {}, function(r) {
          _this.ee.html(_this.tmpl(r));
          return _this.rt.pi(_this.ee);
        });
      }
    };

    aInplace.prototype.init = function() {
      this.tmpl = doT.template(this.e.html());
      this.ee = $("<div/>").insertAfter(this.e);
      return this.append();
    };

    return aInplace;

  })(aPi);
});
