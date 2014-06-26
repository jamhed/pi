// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/El/Editable", "m/Code/Mirror", "lib/markdown"], function(aElEditable, mCodeMirror, Markdown) {
  var elMarkdown, _ref;
  return elMarkdown = (function(_super) {
    __extends(elMarkdown, _super);

    function elMarkdown() {
      _ref = elMarkdown.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    elMarkdown.prototype.get = function() {
      return this.editor.content();
    };

    elMarkdown.prototype.set = function(text) {
      this.text = text;
      return this.e.html(Markdown.toHTML(this.text));
    };

    elMarkdown.prototype.edit = function() {
      this.e.empty();
      return this.editor = new mCodeMirror(this.e, "markdown", this.text || "");
    };

    return elMarkdown;

  })(aElEditable);
});
