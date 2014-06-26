define ["a/Pi"], (aPi) -> class aPager extends aPi

   # props

   filter: null
   sorter: null
   page: 0

   # methods

   attr: -> super.concat ["prefix", "uri", "row", "msg", "filter"]

   constructor: ->
      @filter = []
      @sorter = {}
      super
   
   onSort: (a) ->
      @sorter[a.name] = a.state
      @globalSet "sorter", JSON.stringify @sorter
      @page = 0
      @load()

   init: ->
      @sub "sort", (ev, a) => @onSort a

      @sub "filter", (ev, data) =>
         if data && data.data
            @filter = data?.data?.form || []
            @globalSet "filter", JSON.stringify @filter
         @page = 0
         @load()

      @sub "forward",         (ev, data) => @forward(data || 1)
      @sub "backward",        (ev, data) => @backward(data || 1)

      @sub "reload",          (ev, data) => @load()

      @sub "init",            (ev, data) => @pub @a.msg, @r if @a.msg

      @a.uri ?= @a.prefix + "/table"
      @a.row ?= @a.prefix + "/row"
      
      filter =  @globalGet "filter"
      if filter
         @filter = JSON.parse filter
      
      sorter =  @globalGet "sorter"
      if sorter
         @sorter = JSON.parse sorter

      @page = @globalGet("page") || 0
      @load()

   load: -> @post @a.uri, filter: @filter, sorter: @sorter, page: @page, (r) => @onData(r)

   forward: (n) ->
      @page = if @page + n >= @r.page_count then @r.page_count-1 else @page + n
      @globalSet "page", @page
      @load()

   backward: (n) ->
      @page = if @page - n < 0 then 0 else @page - n
      @globalSet "page", @page
      @load()

   onData: (@r) ->
      tmpl = @rt.source @a.row
      @e.empty()
      @e.append tmpl o: row for row in r.rr
      @rt.pi @e
      @pub @a.msg, r if @a.msg
      @page = parseInt @r.page
      @globalSet "page", @page
      if r.filter && r.filter.filter_init && @a.filter
         @pub @a.filter, r.filter