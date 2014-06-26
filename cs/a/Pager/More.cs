define ["a/Pi"], (P) -> class aPagerMore extends P

   # props

   page: 0
   filter: null
   sorter: null

   attr: -> super.concat ["prefix", "uri", "row", "msg", "filter"]
   
   constructor: ->
      @filter = []
      @sorter = {}
      super

   init: ->
      @sub "more",            (ev, data) => @load()
      @sub "reload",          (ev, data) => @reload()
      @sub "load",            (ev, data) => @load()
      
      @sub "less",            (ev, data) =>
         if @page > 1
            @page = @page - 1
            @fragmentSet "page", @page
            @reload()
      
      @sub "query",           (ev, data, caller) => caller.msg("set", @r?.page_count)

      @sub "sort", (ev, a) => @onSort a

      @sub "reload",          (ev, data) => @reload()

      @sub "filter", (ev, data) =>
         if data && data.data
            @filter = data?.data?.form || []
            @fragmentSet "filter", JSON.stringify @filter
         @page = 1
         @fragmentSet "page", @page
         @reload()
      
      filter =  @fragmentGet "filter"
      if filter
         @filter = JSON.parse filter
      
      sorter =  @fragmentGet "sorter"
      if sorter
         @sorter = JSON.parse sorter

      if @fragmentGet "page"
         @page = parseInt @fragmentGet "page"
         @reload()
      else
         @page = parseInt 0
         @load()

   onSort: (a) ->
      @sorter[a.name] = a.state
      @fragmentSet "sorter", JSON.stringify @sorter
      @reload()

   load: ->
      return if @r?.page_count == 0
      @post @a.uri, { filter: @filter, sorter: @sorter, page: @page }, (r) =>
         @page = @page + 1
         @fragmentSet "page", @page
         @onData(r)

   reload: ->
      @post @a.uri, { filter: @filter, sorter: @sorter, page: @page, reload: true }, (r) =>
         @e.empty()
         @onData(r)

   onData: (@r) ->
      @appendItems @r.rr
      @pub @a.msg, @r.page_count if @a.msg   
      @pub @a.filter, r.filter if r.filter && r.filter.filter_init && @a.filter

   appendItems: (rr) ->
      tmpl = @rt.source @a.row
      @e.append tmpl o: row for row in rr
      @rt.pi @e
