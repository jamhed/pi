// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi", "lib/wysi"], function(aPi, wysi) {
  var aElWysihtml5, _ref;
  return aElWysihtml5 = (function(_super) {
    __extends(aElWysihtml5, _super);

    function aElWysihtml5() {
      _ref = aElWysihtml5.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    aElWysihtml5.prototype.init = function() {
      this.rt.injectCSS("js/lib/wysihtml5/dist/bootstrap-wysihtml5-0.0.2.css");
      this.e.wysihtml5({
        html: true,
        stylesheets: ["js/lib/wysihtml5/lib/css/wysiwyg-color.css"]
      });
      return aElWysihtml5.__super__.init.apply(this, arguments);
    };

    return aElWysihtml5;

  })(aPi);
});