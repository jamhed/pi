define ["a/Pi"], (aPi) -> class aPagerNav extends aPi

   load: 0

   attr: -> super.concat ["name", "target"]

   constructor: ->
      super
      @sub "pager/load", (ev, data) =>
         @load = 1
         if data?.page >= 0
            @e.html @rt.source @a.name, page: data.page+1, page_count: data.page_count
            $("[name=forward]", @e).click       => @pub @a.target + "@forward",  1
            $("[name=fast-forward]", @e).click  => @pub @a.target + "@forward",  10
            $("[name=back]", @e).click          => @pub @a.target + "@backward", 1
            $("[name=fast-back]", @e).click     => @pub @a.target + "@backward", 10

      if ! @load
         @pub @a.target + "@init"

   init: ->
