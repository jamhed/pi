define ["a/Pi", "lib/doT", "lib/URI/URI"], (aPi, doT, URI) -> class aInplace extends aPi

   # props

   tmpl: null
   ee: null
   e: null

   attr: -> super.concat ["uri"]

   constructor: ->
      super
      @sub "update", (ev, data) =>
         @append()

   append: ->
      if @a.uri == undefined
         return @ee.html @tmpl @rt.uri.query(true)
      
      if @a.uri == ""
         @post @rt.uri.fragment(), {}, (r) =>
            @ee.html @tmpl r
            @rt.pi @ee
      else
         @post @a.uri, {}, (r) =>
            @ee.html @tmpl r
            @rt.pi @ee

   init: ->
      @tmpl = doT.template @e.html()
      @ee = $("<div/>").insertAfter @e
      @append()