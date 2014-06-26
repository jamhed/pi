define ["a/Pi"], (P) -> class acmeEventShow extends P

   attr: -> super.concat ["msg"]

   init: ->
      @sub @a.msg, (ev, data) => @e.append data.xhr.responseText  