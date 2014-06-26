define ["a/Pi"], (aPi) -> class aPagerSorter extends aPi

   # props

   state: null

   # methods

   attr: -> super.concat ["name", "pager"]

   init: ->
      @a.pager ?= "closest(table) tbody@sort"

      @state = @globalGet @a.name
      @render() if @state

      @e.click (ev) =>
         switch @state
            when "asc" then @state = "desc"
            when "desc" then @state = ""
            else @state = "asc"

         @globalSet @a.name, @state
         @render()
         
   render: ->
      @e.removeClass("asc desc")
      @e.addClass(@state) if @state
      @pub @a.pager, name: @a.name, state: @state