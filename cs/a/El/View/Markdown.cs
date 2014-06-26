define ["a/Pi", "lib/markdown"], (P, Markdown) -> class elViewMarkdown extends P
   # props

   text: null

   init: ->
      @text = @e.html()
      @e.html Markdown.toHTML(@text)
      @e.show()