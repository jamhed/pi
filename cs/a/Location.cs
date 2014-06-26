define ["a/Pi"], (aPi) -> class aLocation extends aPi

   attr: -> super.concat ["uri"]

   init: ->
      @sub "set", (ev, data) =>
         @pub "#content@cache/clear"
         window.location.hash = "#"
