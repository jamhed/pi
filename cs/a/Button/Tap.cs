define ["a/Pi"], (aPi) -> class aTap extends aPi

   attr: -> super.concat ["msg", "click"]

   init: ->
      @e.click (ev) =>
         ev.preventDefault()
         return false

      @e.bind "touchstart", (ev) =>
         ev.stopPropagation()
         @pub @a.msg, @e.data()