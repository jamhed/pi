define ["a/Pi", "lib/jquery-ui", "conf/datepicker"], (aPi, jQueryUI, Conf) -> class aDatePicker extends aPi

   attr: -> super.concat ["msg"]

   init: ->
      Conf["onSelect"] = (date, o) => @onSelect date, o
      @e.datepicker(Conf)

   onSelect: (date, o) ->
      @pub @a.msg, date if @a.msg
