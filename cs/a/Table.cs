define ["a/Pi"], (aPi) -> class aTable extends aPi

   attr: -> super.concat ["prefix", "uri", "load", "update", "delete", "page"]

   constructor: ->
      @filter = []
      @sorter = {}
      @page = 0
      super

   # methods
   
   init: ->
      @a.uri    ?= @a.prefix + "/table"
      @a.edit   ?= @a.prefix + "/edit"
      @a.update ?= @a.prefix + "/update"
      @a.delete ?= @a.prefix + "/delete"
      @a.page   ?= @a.prefix + "/page"
      @a.filter ?= @a.prefix + "/filter"

      @a.order  ?= @a.prefix + "/order"
      @a.left   ?= @a.prefix + "/change/left"
      @a.right  ?= @a.prefix + "/change/right"

      @page = @fragmentGet @a.page
      @filter = JSON.parse(@fragmentGet(@a.filter) || "[]")

      @sub "load", (ev, args, caller) => @load(args.args, args.onData)
      @sub "page", (ev, args, caller) =>
         @page = args
         @fragmentSet @a.page, parseInt(@page)
         @load()

      @sub "filter/set", (ev, args) =>
         @filter = if args.ev then args.data.form else args
         @fragmentSet @a.filter, JSON.stringify(@filter)
         @load()

      @sub "filter/get", (ev, args) =>
         return if ! @filter[0]
         args.callback(f.value) for f in @filter when f.name == args.name

      @sub "filter/clear", (ev, args) =>
         @filter = []
         @fragmentSet @a.filter, @filter
         @load()

      @sub "edit", (ev, args, caller)   => @post @a.edit, args.args,    (r) => args.onData(r)
      @sub "save", (ev, args, caller)   => @post @a.update, args.data,  (r) => @load()
      @sub "delete", (ev, args, caller) => @post @a.delete, args,       (r) => @load()

      @sub "order", (ev, args, caller)  =>
         args.page = @page
         @post @a.order, args

      @sub "order/left", (ev, args, caller)  =>
         args.page = @page
         @post @a.left, args

      @sub "order/right", (ev, args, caller)  =>
         args.page = @page
         @post @a.right, args

      @sub "content/check", (ev, args) => args.callback @r if @r

      @load()

   load: (args, onData) ->
      @post @a.uri, filter: @filter, sorter: @sorter, page: @page, args: args, (@r) =>
         @msg "content", r
