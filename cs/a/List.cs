define ["a/Pi"], (aPi) -> class aList extends aPi

   attr: -> super.concat ["uri", "row", "msg", "hash"]

   constructor: ->
      super
      @sub "reload", (ev, data) => @load(data)

   init: ->
      return @debug "no uri attr", @e[0] if ! @a.uri
      return @debug "no row attr", @e[0] if ! @a.row
      @load()

   load: (data) ->
      @post @a.uri, data, (r) => @onData(r)

   onData: (@r) ->
      @e.empty()
      for row in r.rr
         @pub @a.msg, row if @a.msg
         @e.append @rt.source(@a.row, if @a.hash=="" then row else o: row, data: @data)
      @rt.pi @e