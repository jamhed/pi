// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/El/Editable", "lib/ckeditor/adapters/jquery"], function(aElEditable, ck) {
  var aEdCK;
  return aEdCK = (function(_super) {
    __extends(aEdCK, _super);

    aEdCK.prototype.editor = null;

    aEdCK.prototype.wrap = null;

    function aEdCK() {
      var _this = this;
      aEdCK.__super__.constructor.apply(this, arguments);
      this.sub("image/select", function(ev, data) {
        return _this.editor.editor.insertHtml("<img src=\"" + data.uri + "\">", "unfiltered_html");
      });
      this.sub("hash/change", function(ev, data) {
        return _this.cancel();
      });
    }

    aEdCK.prototype.get = function() {
      return this.wrap.val();
    };

    aEdCK.prototype.set = function(text) {
      this.text = text;
      return this.e.html(this.text);
    };

    aEdCK.prototype.edit = function() {
      this.e.empty();
      this.wrap = $("<textarea></textarea>").appendTo(this.e);
      this.editor = this.wrap.ckeditor();
      return this.wrap.val(this.text);
    };

    return aEdCK;

  })(aElEditable);
});
