define ["a/Pi", "lib/jquery-ui"], (aPi) -> class aPagerDialog extends aPi

   attr: () -> super.concat ["msg", "prefix", "name"]

   constructor: ->
      super
      @a.name = @a.name || (@a.prefix + "/edit")
      @a.load = @a.prefix + "/edit"
      @a.update = @a.prefix + "/update"
      @a.delete = @a.prefix + "/delete"
      @sub "save",   (ev, data) => @save(data)
      @sub "delete", (ev, data) => @delete(data)

   init: -> @e.click (ev) =>
      ev.preventDefault()
      @load()

   load: () -> @post @a.load, {}, (o) => @set o: o, data: @data
 
   delete: (data) -> @post @a.delete, data, => @pub @a.msg if @a.msg

   save: (data) -> @post @a.update, data.data, => @pub @a.msg if @a.msg

   set: (r) ->  @rt.pi $("<div>").append @rt.source @a.name, r