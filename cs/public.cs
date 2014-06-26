require ["conf/requirejs"], (Conf) ->
   require.config Conf

   require ["router", "lib/bootstrap"], (Router, Bootstrap) -> 
      $.ajaxPrefilter (options, originalOptions, jqXHR) ->
         return options

      router = new Router
