define ["a/Pi"], (aPi) -> class aForm extends aPi

   attr: -> super.concat ["el", "msg"]

   constructor: ->
      super
      @sub "init", (ev, data) =>
         @deserialize $(@a.el), (name: k, value: v for k,v of data)
      
      @sub "reset", (ev, data) =>
         @reset $(@a.el)
         @pub @a.msg, data: {} if @a.msg

   serialize: (inputs) ->
      ret = {}
      for _i in inputs
         do (i = $ _i) ->
            group = i.data("group") || "form"
            ret[group] = [] if ! ret[group]
            if i.attr("type") == "checkbox"
               if i.prop("checked")
                  ret[group].push { name: i.attr("name"), value: true, class: i.attr("class") }
               else
                  ret[group].push { name: i.attr("name"), value: false, class: i.attr("class") }
            else if i.attr("type") == "radio"
               if i.prop("checked")
                  ret[group].push { name: i.attr("name"), value: i.attr("value"), class: i.attr("class") }
            else
               tmp = i.serializeArray()
               if i.attr "item_map"
                  item_val = i.attr "item_val"
                  ret[group].push { name: i.attr("item_map"), class: i.attr("class"), value: if item_val == "null" then null else item_val }
               
               ret[group].push tmp[0]
      return ret

   deserialize: (inputs, data) ->
      hdata = {}
      hdata[d.name] = d for d in data
      for _i in inputs
         do (i = $ _i) ->
            if i.attr("type") == "checkbox" && hdata[i.attr("name")]
               i.attr("checked", 1)
            else
               if f = hdata[i.attr "name"]
                  i.val f.value
                  i.attr "item_val", f["item_val"] if f["item_val"]

   reset: (inputs) ->
      for _i in inputs
         do (i = $ _i) ->
            if i.attr("type") == "checkbox"
               i.removeAttr "checked"
            else
               if i.attr "item_map"
                  i.attr "item_val", ""
               i.val "" 

   init: ->
      @e.click (ev) => @onClick ev

   onClick: (ev) ->
      ev.preventDefault()
      data = @serialize $(@a.el)
      @pub @a.msg, data: data, ev: ev
      return data
