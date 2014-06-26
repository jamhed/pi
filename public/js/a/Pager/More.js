// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["a/Pi"], function(P) {
  var aPagerMore;
  return aPagerMore = (function(_super) {
    __extends(aPagerMore, _super);

    aPagerMore.prototype.page = 0;

    aPagerMore.prototype.filter = null;

    aPagerMore.prototype.sorter = null;

    aPagerMore.prototype.attr = function() {
      return aPagerMore.__super__.attr.apply(this, arguments).concat(["prefix", "uri", "row", "msg", "filter"]);
    };

    function aPagerMore() {
      this.filter = [];
      this.sorter = {};
      aPagerMore.__super__.constructor.apply(this, arguments);
    }

    aPagerMore.prototype.init = function() {
      var filter, sorter,
        _this = this;
      this.sub("more", function(ev, data) {
        return _this.load();
      });
      this.sub("reload", function(ev, data) {
        return _this.reload();
      });
      this.sub("load", function(ev, data) {
        return _this.load();
      });
      this.sub("less", function(ev, data) {
        if (_this.page > 1) {
          _this.page = _this.page - 1;
          _this.fragmentSet("page", _this.page);
          return _this.reload();
        }
      });
      this.sub("query", function(ev, data, caller) {
        var _ref;
        return caller.msg("set", (_ref = _this.r) != null ? _ref.page_count : void 0);
      });
      this.sub("sort", function(ev, a) {
        return _this.onSort(a);
      });
      this.sub("reload", function(ev, data) {
        return _this.reload();
      });
      this.sub("filter", function(ev, data) {
        var _ref;
        if (data && data.data) {
          _this.filter = (data != null ? (_ref = data.data) != null ? _ref.form : void 0 : void 0) || [];
          _this.fragmentSet("filter", JSON.stringify(_this.filter));
        }
        _this.page = 1;
        _this.fragmentSet("page", _this.page);
        return _this.reload();
      });
      filter = this.fragmentGet("filter");
      if (filter) {
        this.filter = JSON.parse(filter);
      }
      sorter = this.fragmentGet("sorter");
      if (sorter) {
        this.sorter = JSON.parse(sorter);
      }
      if (this.fragmentGet("page")) {
        this.page = parseInt(this.fragmentGet("page"));
        return this.reload();
      } else {
        this.page = parseInt(0);
        return this.load();
      }
    };

    aPagerMore.prototype.onSort = function(a) {
      this.sorter[a.name] = a.state;
      this.fragmentSet("sorter", JSON.stringify(this.sorter));
      return this.reload();
    };

    aPagerMore.prototype.load = function() {
      var _ref,
        _this = this;
      if (((_ref = this.r) != null ? _ref.page_count : void 0) === 0) {
        return;
      }
      return this.post(this.a.uri, {
        filter: this.filter,
        sorter: this.sorter,
        page: this.page
      }, function(r) {
        _this.page = _this.page + 1;
        _this.fragmentSet("page", _this.page);
        return _this.onData(r);
      });
    };

    aPagerMore.prototype.reload = function() {
      var _this = this;
      return this.post(this.a.uri, {
        filter: this.filter,
        sorter: this.sorter,
        page: this.page,
        reload: true
      }, function(r) {
        _this.e.empty();
        return _this.onData(r);
      });
    };

    aPagerMore.prototype.onData = function(r) {
      this.r = r;
      this.appendItems(this.r.rr);
      if (this.a.msg) {
        this.pub(this.a.msg, this.r.page_count);
      }
      if (r.filter && r.filter.filter_init && this.a.filter) {
        return this.pub(this.a.filter, r.filter);
      }
    };

    aPagerMore.prototype.appendItems = function(rr) {
      var row, tmpl, _i, _len;
      tmpl = this.rt.source(this.a.row);
      for (_i = 0, _len = rr.length; _i < _len; _i++) {
        row = rr[_i];
        this.e.append(tmpl({
          o: row
        }));
      }
      return this.rt.pi(this.e);
    };

    return aPagerMore;

  })(P);
});
