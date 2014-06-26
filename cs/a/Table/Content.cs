define ["a/Pi"], (aPi) -> class aTableContent extends aPi

   # props
   tmpl: null

   attr: -> super.concat ["sub", "row"]
   
   init: ->
      @sub @a.sub, (ev, args, caller) => @onData args.rr
      @tmpl = @rt.source @a.row

      # check content is already loaded in case we late to subscribe
      table = RegExp("^(.+)\@").exec(@a.sub)[1]
      if table
         @pub "#{table}@content/check", callback: (r) => @onData(r.rr)

   onData: (rr) ->
      @e.empty()
      @e.append @tmpl o: row for row in rr
      @rt.pi @e