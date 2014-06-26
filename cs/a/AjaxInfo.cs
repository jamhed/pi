define ["a/Pi"], (aPi) -> class aAjaxInfo extends aPi

   init: ->
      $(document).ajaxStart => @e.show()
      $(document).ajaxStop => @e.hide()