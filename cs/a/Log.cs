define ["a/Pi"], (aPi) -> class Log extends aPi

   init: ->
      @sub "logger", (msg, str) =>
         @e.append str + "<br>"
