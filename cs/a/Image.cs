define ["a/Pi", "lib/imgarea"], (aPi, imgarea) -> class aImage extends aPi

   crop:    null
   api:     null
   path:    null
   id:      null
   img:     null

   attr: -> super.concat ["uri", "save", "new"]

   timestamp: -> new Date().getTime()

   init: ->

      @sub "crop", (ev, args) =>
         @e.imgAreaSelect
            handles: true
            parent: @e.closest(".ui-dialog")
            onSelectEnd: (img, c) => @crop = c

      @sub "cancel", (ev, args) =>
         @e.imgAreaSelect remove: true

      @sub "save", (ev, args) =>
         @post @a.uri, id: @data.id, crop: @crop, new: args?.new, () =>
            @e.imgAreaSelect remove: true
            @pub @a.save, @id if @a.save

      @sub "save/new", (ev, args) =>
         @post @a.uri, id: @data.id, crop: @crop, new: true, () =>
            @pub @a.new, @id if @a.new

      @e.click (ev) =>
         ev.preventDefault()
