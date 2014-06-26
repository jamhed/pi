   add_url_map: (match, url, names) -> @urlmap.push match: RegExp(match), names: names, url: url

   url_tr: (url, args = {}) ->
      p = for m in @urlmap when url.match m.match
         do (m) ->
            names = m.names.slice 0 # this is deep copy
            matches = m.match.exec(url).slice 1 # skip original string
            for match in matches
               args[ names.shift() ] = match
            return url: m.url, param: args
      args[pair[0]] = pair[1] for pair in (eq.split "=" for eq in url.replace(/^.*\?/, "").split "&")
      return if p[0] then p[0] else  url: url, param: args
