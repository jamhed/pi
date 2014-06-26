define ["a/Pi", "lib/URI/URI"], (aPi, URI) -> class aPost extends aPi

   uri: null

   attr: -> super.concat ["uri", "msg"]

   init: ->
      @uri = URI "#" + @a.uri
      @sub "load", (ev, args = {}) => $.post @uri.fragment(), args, ((r) => @pub @a.msg, r), "json"
