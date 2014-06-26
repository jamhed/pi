// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi"], function(aPi) {
  var aToggle;
  return aToggle = (function(_super) {
    __extends(aToggle, _super);

    aToggle.prototype.state = "face";

    aToggle.prototype.attr = function() {
      return aToggle.__super__.attr.apply(this, arguments).concat(["target", "face", "back", "alter"]);
    };

    function aToggle() {
      var _this = this;
      this.state = "face";
      aToggle.__super__.constructor.apply(this, arguments);
      this.face_e = this.e.html();
      this.sub("face", function(ev, r) {
        return _this.face(r);
      });
      this.sub("back", function(ev, r) {
        return _this.back(r);
      });
      this.sub("cancel", function(ev, r) {
        return _this.cancel(r);
      });
      this.sub("hash/change", function(ev, r) {
        return _this.cancel(r);
      });
    }

    aToggle.prototype.cancel = function(r) {
      this.pub(this.a.target + "@cancel", r);
      this.state = "face";
      this.e.html(this.face_e);
      return this.rt.pi(this.e);
    };

    aToggle.prototype.face = function(r) {
      this.pub(this.a.target + "@" + this.a[this.state], r);
      this.state = "face";
      this.e.html(this.face_e);
      return this.rt.pi(this.e);
    };

    aToggle.prototype.back = function(r) {
      this.pub(this.a.target + "@" + this.a[this.state], r);
      this.state = "back";
      if (this.back_e == null) {
        this.back_e = this.rt.source(this.a.alter);
      }
      this.e.html(this.back_e);
      return this.rt.pi(this.e);
    };

    return aToggle;

  })(aPi);
});