define ["a/File/List", "lib/jquery-ui", "conf/pagersortable"], (aPager, jqUI, Conf) -> class aFileListSortable extends aPager

   constructor: ->
      super
      Conf ?= {}
      Conf.update = (ev, ui) => @onUpdate ev, ui
      Conf.helper = (ev, ui) ->
         # ui.children().each () -> $(@).width $(@).width()
         return ui

      @e.sortable Conf

   onUpdate: (ev, ui) ->
      a = @e.sortable "toArray"
      @post @a.prefix + "/order", a, (r) => @onOrder(r)

   onOrder: (r) ->