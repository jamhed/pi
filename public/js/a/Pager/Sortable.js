// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pager", "lib/jquery-ui", "conf/pagersortable"], function(aPager, jqUI, Conf) {
  var aPagerSortable;
  return aPagerSortable = (function(_super) {
    __extends(aPagerSortable, _super);

    aPagerSortable.prototype.attr = function() {
      return aPagerSortable.__super__.attr.apply(this, arguments).concat(["order"]);
    };

    function aPagerSortable() {
      var _this = this;
      aPagerSortable.__super__.constructor.apply(this, arguments);
      if (Conf == null) {
        Conf = {};
      }
      Conf.out = function(ev, ui) {
        var a, o, p;
        o = ui.offset;
        p = ui.originalPosition;
        if (o.left - p.left > ui.item.width() / 5) {
          _this.post(_this.a.right, {
            id: ui.item.attr("id"),
            page: _this.page
          }, function(r) {
            if (r.ok) {
              return _this.load();
            }
          });
        }
        if (o.left - p.left < -ui.item.width() / 5) {
          _this.post(_this.a.left, {
            id: ui.item.attr("id"),
            page: _this.page
          }, function(r) {
            if (r.ok) {
              return _this.load();
            }
          });
        }
        if (Math.abs(o.top - p.top) > ui.item.height()) {
          a = _this.e.sortable("toArray");
          return _this.post(_this.a.order, {
            index: a,
            page: _this.page || 1
          }, function(r) {
            return _this.onOrder(r);
          });
        }
      };
      Conf.helper = function(ev, ui) {
        ui.children().each(function() {
          return $(this).width($(this).width());
        });
        return ui;
      };
      this.sub("disable", function(ev, data) {
        return _this.e.sortable("disable");
      });
      this.sub("enable", function(ev, data) {
        return _this.e.sortable("enable");
      });
      this.e.sortable(Conf);
    }

    aPagerSortable.prototype.init = function() {
      var _base, _base1, _base2;
      if ((_base = this.a).order == null) {
        _base.order = this.a.prefix + "/order";
      }
      if ((_base1 = this.a).left == null) {
        _base1.left = this.a.prefix + "/change/left";
      }
      if ((_base2 = this.a).right == null) {
        _base2.right = this.a.prefix + "/change/right";
      }
      return aPagerSortable.__super__.init.apply(this, arguments);
    };

    aPagerSortable.prototype.onSort = function(a) {};

    aPagerSortable.prototype.onOrder = function(r) {};

    return aPagerSortable;

  })(aPager);
});