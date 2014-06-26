define ["a/Form"], (aForm) -> class aFormLocal extends aForm

   init: ->
      super

      data_str = @globalGet @a.el
      if data_str
         data = JSON.parse data_str
         @deserialize $(@a.el), data

      @sub "reset", (ev, data) =>
         @reset $(@a.el)
         @pub @a.msg, data: {} if @a.msg

   reset: ->
      super
      @globalSet @a.el, JSON.stringify []         
      
   onClick: (ev) ->
      data = super
      @globalSet @a.el, JSON.stringify data?.form || []
