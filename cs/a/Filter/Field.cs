define ["a/Pi"], (P) -> class FilterField extends P

   attr: -> super.concat ["msg", "name"]

   init: ->
      @sub "clear", (ev, data) => @e.val ""
      @pub @a.msg, name: @a.name, callback: (r) => @set(r)

   set: (r) -> @e.val r
