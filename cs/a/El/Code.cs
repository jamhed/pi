define ["a/El/Editable", "m/Code/Mirror", "lib/highlight"],
(aElEditable, mCodeMirror, HL) -> class elCode extends aElEditable

   attr: -> super.concat ["syntax"]

   constructor: ->
      super
      @a.syntax ?= "coffeescript"

   get: -> @editor.content()

   set: (@text) ->
      $("<code></code>")
         .addClass(@a.syntax)
         .appendTo(
            $("<pre></pre>")
               .css("line-height", "14px")
               .appendTo(@e.empty())
         )
         .html HL.highlight(@a.syntax, @text).value

   edit: ->
      @e.empty()
      @editor = new mCodeMirror @e, @a.syntax, @text
