define ["a/El/Editable", "m/Code/Mirror"], (P, mCodeMirror) -> class elContentEditable extends P

   attr: -> super.concat ["mode"]

   constructor: ->
      super
      @cache = {}

      @sub "cache/clear", (ev, args) =>
         if args?.k
            @cache[args.k] = {}
         else
            @cache = {}

      @sub "router@hash/change", (ev, args) =>
         @active args.uri
         k = args.ev.oldURL
         kk = args.ev.newURL

         @cache[k] = {} if ! @cache[k]
         @cache[k].ee = @ee.detach()
         @cache[k].text = @text
         @cache[k].uri = @uri

         if @cache[kk]
            @ee = @cache[kk].ee
            @text = @cache[kk].text
            @uri = @cache[kk].uri
            @ee.appendTo @e.empty()
         else
            @load()
   
   active: (uri)  ->
      $(".navbar li").removeClass "active"
      $(".navbar a[href=\"#{uri.hash()}\"]").parent().addClass "active"
 
   load: ->
      @uri = @rt.uri
      @active @uri
      super

   set: (@text) ->
      @e.empty()
      @ee = $("<div></div>").html(@text).appendTo(@e)
      @rt.pi @ee
   
   get: ->
      @editor.content()

   cancel: ->
      @ee.appendTo @e.empty()

   edit: ->
      @ee.detach()
      @editor = new mCodeMirror @e, @a.mode, @text