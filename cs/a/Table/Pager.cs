define ["a/Pi"], (aPi) -> class aTablePager extends aPi

   # props
   tmpl: null
   page: 0
   page_count: 0

   attr: -> super.concat ["table", "name"]
   
   init: ->
      @sub "#{@a.table}@content", (ev, args, caller) => @onData args.page, args.page_count
      @tmpl = @rt.source @a.name

   forward: (n) ->
      @page = if @page + n >= @page_count then @page_count-1 else @page + n
      @pub "#{@a.table}@page", @page

   backward: (n) ->
      @page = if @page - n < 0 then 0 else @page - n
      @pub "#{@a.table}@page", @page

   onData: (@page, @page_count) ->
      @e.empty().html @tmpl page: @page+1, page_count: @page_count
      $("[name=forward]", @e).click       => @forward 1
      $("[name=fast-forward]", @e).click  => @forward 10
      $("[name=back]", @e).click          => @backward 1
      $("[name=fast-back]", @e).click     => @backward 10