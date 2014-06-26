define ["a/El", "lib/URI/URI", "lib/jquery-ui"], (aPi, URI) -> class aDialog extends aPi

   dialog_e: null

   attr: () -> super.concat ["name", "msg"]

   constructor: ->
      super
      @sub "close", () => @dialog_e.remove()
      @sub "save", (ev, data) => @save(data)

   init: ->
      @uri = URI "#" + @a.uri # for uri.fragment() method
      @e.click () => @load()

   save: (data) ->
      @post @uri.fragment(), data.data, () =>
         @pub @a.msg, data if @a.msg
         @dialog_e.remove()

   set: (r) -> 
      dialog = $(@rt.source @a.name, r)
      options = dialog.data()
      @dialog_e = dialog.dialog
         close: (ev, ui) => @dialog_e.remove()
         draggable: true
         width: options.width || 500

      @rt.pi @dialog_e, () =>
