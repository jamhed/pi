define ["a/Pi", "lib/jquery-ui", "conf/pagersortable"], (aPi, jqUI, Conf) -> class aTableSortable extends aPi

   # props
   tmpl: null

   attr: -> super.concat ["table", "sub", "row"]
   
   constructor: ->

      @Conf = if Conf then Conf else {}
      @Conf.out = (ev, ui) =>
         o = ui.offset
         p = ui.originalPosition
         
         if o.left - p.left > ui.item.width()/5
            @pub "#{@a.table}@order/right", id: ui.item.attr("id")
         
         if o.left - p.left < -ui.item.width()/5
            @pub "#{@a.table}@order/left", id: ui.item.attr("id")

         if Math.abs(o.top - p.top) > ui.item.height()
            a = @e.sortable "toArray"
            @pub "#{@a.table}@order", index: a            
      
      @Conf.helper = (ev, ui) ->
         ui.children().each () -> $(@).width $(@).width()
         return ui

      super

   init: ->
      @sub @a.sub, (ev, args, caller) => @onData args.rr
      @sub "disable", (ev, data) => @e.sortable "disable"
      @sub "enable", (ev, data) => @e.sortable "enable"

      @tmpl = @rt.source @a.row

      @pub "#{@a.table}@content/check", callback: (r) => @onData(r.rr)

   onData: (rr) ->
      @e.empty()
      @e.append @tmpl o: row for row in rr
      @rt.pi @e
      @e.sortable @Conf