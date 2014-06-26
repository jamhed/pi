define ["a/Pi"], (aPi) -> class aFileList extends aPi

   r: null

   attr: -> super.concat ["prefix", "row", "msg"]

   constructor: ->
      super
      @sub "file/upload",          (ev, data) => @onUpload(data.data)
      @sub "file/delete",          (ev, data) => @delete(ev, data)
      @sub "update",               (ev, data) => @load @timestamp()

   timestamp: -> new Date().getTime()

   delete: (ev, data) ->
      @post @a.prefix+"/delete", data, () => @load()

   init: ->
      @source = @rt.source @a.row
      @load()

   load: (ts) ->
      @post @a.prefix+"/list", @data, (r) => @onData(r, ts)

   onUpload: (data) ->
      @e.append @source o: data
      @rt.pi @e

   onData: (@r, ts) ->
      @e.empty()
      i = 0
      @e.append @source o: row, ts: ts, i: (i=i+1) for row in r.rr
      @rt.pi @e