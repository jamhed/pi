define ["a/Pi"], (P) -> class aPagerCreate extends P

   attr: -> super.concat ["uri", "link", "args"]

   init: ->
      args = {}
      args = @rt.uri.query(true) if @a.args
      @e.click (ev, data) => @_post @a.uri, args: args, (r) => @rt.set_hash @a.link + "?id=" + r.id 
