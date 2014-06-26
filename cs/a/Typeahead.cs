define ["a/Pi", "lib/jquery-ui"], (aPi, jQueryUI) -> class Typeahead extends aPi
   
   attr: -> super.concat ["uri", "msg"]

   init: ->
      @bindKeys()
      
      args = {}
      args.minLength = 0

      args.source = (request, response) =>
         $.ajax
            url: @a.uri
            dataType: "json"
            type: "POST"
            data: packet: JSON.stringify(args: { term: request.term }, data: @data, query: @rt.uri.query(true))
            success: (data) -> response data

      args.search = (ev, ui) ->
         return true if ($(@).attr("keyCode") == "39")
         term = @value.split(/,\s*/).pop()
         return false if (term.length < 3)
         
      args.focus = () -> return false

      args.select = (ev, ui) ->
         terms = @value.split /,\s*/
         terms.pop()
         terms.push ui.item.value
         @value = terms.join ", "
         return false

      args.close = (ev,ui) => @pub @a.msg if @a.msg
      
      @e.autocomplete args

   bindKeys: () ->
      @e.bind "keydown", (ev) ->
         $(@).attr "keyCode", ev.keyCode
         if (ev.keyCode == $.ui.keyCode.TAB && $(@).data("autocomplete")?.menu?.active)
            ev.preventDefault()
         if (ev.keyCode == $.ui.keyCode.RIGHT)
            $(@).autocomplete "search"
