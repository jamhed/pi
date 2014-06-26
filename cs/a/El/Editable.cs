define ["a/El", "lib/URI/URI"], (aEl, URI) -> class aElEditable extends aEl

   attr: -> super.concat ["cms"]

   constructor: ->
      super
      @sub "edit", () => @edit()
      @sub "save", () => @save()
      @sub "cancel", () => @cancel()

   timestamp: -> new Date().getTime()

   cancel: -> @set @text

   save: ->
      $.post @a.cms, name: @uri.fragment(), content: @get(), (r) =>
         @set r.content
         @uri.setQuery "rev", @timestamp()
    
   get: ->
      @e.html()

   edit: ->
