define ["a/El/Editable", "m/Code/Mirror", "lib/markdown"],
(aElEditable, mCodeMirror, Markdown) -> class elMarkdown extends aElEditable

   get: ->
      @editor.content()

   set: (@text) ->
      @e.html Markdown.toHTML(@text)

   edit: ->
      @e.empty()
      @editor = new mCodeMirror @e, "markdown", @text||""
