define ["a/Pi", "lib/jquery-ui", "lib/time-picker", "conf/datetimepicker"], (P, ui, Picker, Conf) -> class DateTimePicker extends P

   attr: -> super.concat ["msg"]

   init: ->
      Conf["onSelect"] = (date, o) => @onSelect date, o
      @e.datetimepicker(Conf)

   onSelect: (date, o) ->
      @pub @a.msg, date if @a.msg
