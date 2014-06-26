define ["a/Pi", "lib/doT", "lib/jquery-ui"], (aPi, doT, jqUI, aDialogSimple) -> class aAjaxError extends aPi

   tmpl:       null
   dialog_e:   null

   init: ->
      @sub "close", () => @dialog_e.remove()

      @tmpl = doT.template @e.html()
      $(document).ajaxError => @onError(arguments...)

   onError: (event, jqXHR, ajaxSettings, thrownError) ->
      try
         blob = $.parseJSON jqXHR.responseText
         server_error = blob.error
      catch e

      dialog = $("<div>").append @tmpl
         error: thrownError,
         uri: ajaxSettings.url,
         method: ajaxSettings.type,
         server_error: server_error,
         responseText: jqXHR.responseText,

      @rt.pi dialog
