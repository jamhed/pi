define ["a/El/Editable", "conf/ck", "lib/ckeditor/adapters/jquery"], (aElEditable, conf, ck) -> class aElCK extends aElEditable

   editor: null
   wrap: null

   constructor: ->
      super
      @sub "image/select", (ev, data) =>
         @editor.editor.insertHtml "<img src=\"#{data.uri}\">", "unfiltered_html"

      @sub "hash/change", (ev, data) => @cancel()

   get: ->
      @wrap.val()

   set: (@text) ->
      @e.html @text

   edit: ->
      @e.empty()
      @wrap = $("<textarea></textarea>").appendTo @e
      @editor = @wrap.ckeditor conf
 
      @wrap.val @text