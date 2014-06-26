define ["a/Pager", "lib/jquery-ui", "conf/pagersortable"], (aPager, jqUI, Conf) -> class aPagerSortable extends aPager

   attr: -> super.concat ["order"]

   constructor: ->
      super
      Conf ?= {}
      Conf.out = (ev, ui) =>
         o = ui.offset
         p = ui.originalPosition
         
         if o.left - p.left > ui.item.width()/5
            @post @a.right, { id: ui.item.attr("id"), page: @page }, (r) => @load() if r.ok
         
         if o.left - p.left < -ui.item.width()/5
            @post @a.left, { id: ui.item.attr("id"), page: @page }, (r) => @load() if r.ok

         if Math.abs(o.top - p.top) > ui.item.height()
            a = @e.sortable "toArray"
            @post @a.order, { index: a, page: (@page || 1) }, (r) => @onOrder(r)            
      
      Conf.helper = (ev, ui) ->
         ui.children().each () -> $(@).width $(@).width()
         return ui

      @sub "disable", (ev, data) => @e.sortable "disable"
      @sub "enable", (ev, data) => @e.sortable "enable"

      @e.sortable Conf

   init: ->
      @a.order  ?= @a.prefix + "/order"
      @a.left   ?= @a.prefix + "/change/left"
      @a.right  ?= @a.prefix + "/change/right"
      super

   onSort: (a) ->

   onOrder: (r) ->