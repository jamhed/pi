define ["a/El"], (P) -> class aElTmpl extends P

   attr: -> super.concat ["tmpl"]

   init: ->
      @tmpl = @rt.source @a.tmpl
      super

   set: (@text) ->
      @e.html @tmpl @text
      @rt.pi @e