define ["a/Pi"], (aPi) -> class aImageView extends aPi

   uri_del: null

   init: ->
      @sub "delete", (ev, data) =>
         @post
      @sub "set", (ev, data) =>
         @uri_del = data.delete
         @e.attr "src", data.uri