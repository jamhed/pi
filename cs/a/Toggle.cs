define ["a/Pi"], (aPi) -> class aToggle extends aPi
   
   # props

   state:   "face"

   # methods

   attr: -> super.concat ["target", "face", "back", "alter"]

   constructor: ->
      @state = "face"
      super
      @face_e = @e.html()

      @sub "face",         (ev, r) => @face(r)
      @sub "back",         (ev, r) => @back(r)
      @sub "cancel",       (ev, r) => @cancel(r)
      @sub "hash/change",  (ev, r) => @cancel(r)

   cancel: (r) ->
      # return if @state == "face"
      @pub @a.target + "@cancel", r
      @state = "face"
      @e.html @face_e
      @rt.pi @e
 
   face: (r) ->
      @pub @a.target + "@" + @a[@state], r
      @state = "face"
      @e.html @face_e
      @rt.pi @e
   
   back: (r) ->
      @pub @a.target + "@" + @a[@state], r
      @state = "back"
      @back_e ?= @rt.source @a.alter
      @e.html @back_e
      @rt.pi @e