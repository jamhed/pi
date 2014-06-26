// Generated by CoffeeScript 1.6.2
({
  add_url_map: function(match, url, names) {
    return this.urlmap.push({
      match: RegExp(match),
      names: names,
      url: url
    });
  },
  url_tr: function(url, args) {
    var eq, m, p, pair, _i, _len, _ref;
    if (args == null) {
      args = {};
    }
    p = (function() {
      var _i, _len, _ref, _results;
      _ref = this.urlmap;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        m = _ref[_i];
        if (url.match(m.match)) {
          _results.push((function(m) {
            var match, matches, names, _j, _len1;
            names = m.names.slice(0);
            matches = m.match.exec(url).slice(1);
            for (_j = 0, _len1 = matches.length; _j < _len1; _j++) {
              match = matches[_j];
              args[names.shift()] = match;
            }
            return {
              url: m.url,
              param: args
            };
          })(m));
        }
      }
      return _results;
    }).call(this);
    _ref = (function() {
      var _j, _len, _ref, _results;
      _ref = url.replace(/^.*\?/, "").split("&");
      _results = [];
      for (_j = 0, _len = _ref.length; _j < _len; _j++) {
        eq = _ref[_j];
        _results.push(eq.split("="));
      }
      return _results;
    })();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      pair = _ref[_i];
      args[pair[0]] = pair[1];
    }
    if (p[0]) {
      return p[0];
    } else {
      return {
        url: url,
        param: args
      };
    }
  }
});