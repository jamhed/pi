// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/File/List", "lib/jquery-ui", "conf/pagersortable"], function(aPager, jqUI, Conf) {
  var aFileListSortable;
  return aFileListSortable = (function(_super) {
    __extends(aFileListSortable, _super);

    function aFileListSortable() {
      var _this = this;
      aFileListSortable.__super__.constructor.apply(this, arguments);
      if (Conf == null) {
        Conf = {};
      }
      Conf.update = function(ev, ui) {
        return _this.onUpdate(ev, ui);
      };
      Conf.helper = function(ev, ui) {
        return ui;
      };
      this.e.sortable(Conf);
    }

    aFileListSortable.prototype.onUpdate = function(ev, ui) {
      var a,
        _this = this;
      a = this.e.sortable("toArray");
      return this.post(this.a.prefix + "/order", a, function(r) {
        return _this.onOrder(r);
      });
    };

    aFileListSortable.prototype.onOrder = function(r) {};

    return aFileListSortable;

  })(aPager);
});
