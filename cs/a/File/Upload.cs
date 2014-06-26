define ["a/Pi", "lib/upload"], (aPi, FileUpload) -> class aFileUpload extends aPi

   queue: 1

   attr: -> super.concat ["uri", "msg", "notify"]

   done: (e, data) ->
      @queue = if @queue > 0 then @queue - 1 else 0
      @doneFile(e, data)
   
   doneFile: (e, data) -> @pub @a.notify, e: e, data: data if @a.notify
   doneAll: (e) -> @pub @a.msg, e: e if @a.msg
   
   start: ->

   stop: (e) -> @doneAll(e)

   init: ->
      @e.fileupload
         url: @a.uri
         dataType: "json"
         sequentialUploads: true
         done: (e, data) => @done e, data
         start: (e) => @start e
         stop: (e) => @stop e
         fail: @queue = @queue - 1
         send: (e, data) =>
            @queue = @queue + 1
            return true
         formData: packet: JSON.stringify( query: @rt.uri.query(true), data: @data )
