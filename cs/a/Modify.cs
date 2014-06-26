define ["a/Pi"], (aPi) -> class aModify extends aPi

   init: ->
      @e.click () =>
         @rt.uri.setSearch "hello", "mars"
         @rt.set_uri()
