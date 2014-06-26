define ["a/Pi"], (P) -> class Pass extends P

   attr: -> super.concat ["uri", "link"]

   init: ->
      @e.click (ev, data) => @post @a.uri, {}, (r) => @rt.set_hash @a.link + "?id=" + r.id 