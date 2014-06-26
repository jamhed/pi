define ["a/Pi", "lib/jquery-ui"], (aPi, jqUI) -> class aDialogSimple extends aPi

   attr: () -> super.concat ["parent"]

   init: ->
      @sub "close", (ev, data) =>
         @pub @a.parent + "@" + ev.type, data if @a.parent 
         @e.remove()

      @sub "cancel", (ev, data) =>
         @pub @a.parent + "@" + ev.type, data if @a.parent 
         @e.remove()

      @sub "save", (ev, data) =>
         @pub @a.parent + "@" + ev.type, data if @a.parent 
         @e.remove()

      @sub "delete", (ev, data) =>
         @pub @a.parent + "@" + ev.type, data if @a.parent 
         @e.remove()

      @e.dialog
         close: (ev, ui) => @e.remove()
         draggable: true
         width: @data.width || 500
         height: @data.height || "auto"
         position: @data.position || "center"