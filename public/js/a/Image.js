// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi", "lib/imgarea"], function(aPi, imgarea) {
  var aImage, _ref;
  return aImage = (function(_super) {
    __extends(aImage, _super);

    function aImage() {
      _ref = aImage.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aImage.prototype.crop = null;

    aImage.prototype.api = null;

    aImage.prototype.path = null;

    aImage.prototype.id = null;

    aImage.prototype.img = null;

    aImage.prototype.attr = function() {
      return aImage.__super__.attr.apply(this, arguments).concat(["uri", "save", "new"]);
    };

    aImage.prototype.timestamp = function() {
      return new Date().getTime();
    };

    aImage.prototype.init = function() {
      var _this = this;
      this.sub("crop", function(ev, args) {
        return _this.e.imgAreaSelect({
          handles: true,
          parent: _this.e.closest(".ui-dialog"),
          onSelectEnd: function(img, c) {
            return _this.crop = c;
          }
        });
      });
      this.sub("cancel", function(ev, args) {
        return _this.e.imgAreaSelect({
          remove: true
        });
      });
      this.sub("save", function(ev, args) {
        return _this.post(_this.a.uri, {
          id: _this.data.id,
          crop: _this.crop,
          "new": args != null ? args["new"] : void 0
        }, function() {
          _this.e.imgAreaSelect({
            remove: true
          });
          if (_this.a.save) {
            return _this.pub(_this.a.save, _this.id);
          }
        });
      });
      this.sub("save/new", function(ev, args) {
        return _this.post(_this.a.uri, {
          id: _this.data.id,
          crop: _this.crop,
          "new": true
        }, function() {
          if (_this.a["new"]) {
            return _this.pub(_this.a["new"], _this.id);
          }
        });
      });
      return this.e.click(function(ev) {
        return ev.preventDefault();
      });
    };

    return aImage;

  })(aPi);
});
