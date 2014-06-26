define ["a/El/Editable", "m/Code/Mirror", "lib/textile"],
(aElEditable, mCodeMirror, Textile) -> class elTextile extends aElEditable

   get: ->
      @editor.content()

   set: (@text) ->
      @e.html Textile.convert(@text)

   edit: ->
      @e.empty()
      @editor = new mCodeMirror @e, "", @text||""
