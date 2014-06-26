define ["a/Pi"], (aPi) -> class aButtonToggle extends aPi

   state: "face"

   attr: -> super.concat ["target", "face", "back", "alter"]

   constructor: ->
      super
      @text = @e.html()

   face: ->
      @e.removeClass "btn-danger"
      @e.html @text
      @state = "face"
   
   back: ->
      @e.html @a.alter
      @e.addClass "btn-danger"
      @state = "back"

   init: -> @e.click (ev) =>
      @pub @a.target + "@" + @a[@state]
      if @state == "face"
         @back()
      else
         @face()
