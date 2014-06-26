define ["a/Pi"], (aPi) -> class aTableEdit extends aPi

   # props
   tmpl: null

   attr: -> super.concat ["pub", "name"]
   
   init: ->
      @tmpl = @rt.source @a.name

      @e.click (ev) =>
         ev.preventDefault()
         @pub @a.pub, args: @e.data(), onData: (r) => @rt.pi $("<div>").append @tmpl o: r