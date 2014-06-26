define ["a/Pi"], (aPi) -> class onMessage extends aPi

   attr: -> super.concat ["init"]

   init: ->
      @sub "set", (ev, data) => @e.html data
      @pub @a.init if @a.init