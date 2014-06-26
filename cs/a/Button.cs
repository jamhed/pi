define ["a/Pi"], (aPi) -> class aButton extends aPi

   attr: -> super.concat ["msg", "click"]

   init: ->
      @pub @a.msg, @e.data() if @a.click
      @e.click (ev) =>
         ev.preventDefault()
         @pub @a.msg, @e.data()