define [
   "lib/codemirror/lib/codemirror"
   "lib/codemirror/mode/javascript/javascript"
   "lib/codemirror/mode/coffeescript/coffeescript"
   "lib/codemirror/mode/markdown/markdown"
   "lib/codemirror/mode/xml/xml"
   "lib/codemirror/mode/sql/sql"
   "lib/codemirror/mode/css/css"
   "lib/codemirror/mode/htmlmixed/htmlmixed"
   "lib/codemirror/mode/perl/perl"
], (CodeMirror) -> class mCodeMirror

   constructor: (node, mode, text) ->
      @editor = new CodeMirror node[0], value: text, mode: mode, lineNumbers: true

   content: -> @editor.getValue()
