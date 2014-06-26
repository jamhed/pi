define({
   catchError: true,
   paths: {
      "lib/URI":        "lib/uri-js/src",
      "lib/ace":        "lib/ace/src-min/ace",
      "lib/jquery":     "lib/jquery",
      "lib/jquery-ui":  "lib/jquery-ui/js/jquery-ui-1.10.3.custom.min",
      "lib/markdown":   "lib/markdown/lib/markdown",
      "lib/highlight":  "lib/highlight/highlight.pack",
      "lib/doT":        "lib/doT",
      "lib/codemirror": "lib/code-mirror",
      "lib/bootstrap":  "lib/bootstrap/js/bootstrap",
      "lib/upload":     "lib/file-upload/js/jquery.fileupload",
      "lib/jcrop":      "lib/jcrop/js/jquery.Jcrop.min",
      "lib/wysi":       "lib/wysihtml5/dist/bootstrap-wysihtml5-0.0.2",
      "lib/imgarea":    "lib/imgarea/scripts/jquery.imgareaselect.min",
      "lib/time-picker": "lib/timepicker/dist/jquery-ui-timepicker-addon"
   },
   shim: {
      "lib/jquery": {
         exports: "jQuery"
      },
      "lib/jquery-ui": {
         deps: ["lib/jquery"]
      },
      "lib/bootstrap": {
         deps: ["lib/jquery"]
      },
      "lib/jcrop": {
         deps: ["lib/jquery"]
      },
      "lib/markdown": {
         exports: "markdown"
      },
      "lib/ace": {
         exports: "ace"
      },
      "lib/highlight": {
         exports: "hljs"
      },
      "lib/codemirror/lib/codemirror": {
         exports: "CodeMirror"
      },
      "lib/upload": {
         deps: ["lib/file-upload/js/vendor/jquery.ui.widget"]
      },
      "lib/wysi": {
         deps: ["lib/jquery", "lib/bootstrap", "lib/wysihtml5/lib/js/wysihtml5-0.3.0"],
      },
      "lib/ckeditor/adapters/jquery": {
         deps: ["lib/jquery", "lib/ckeditor/ckeditor"]
      },
      "lib/imgarea": {
         deps: ["lib/jquery"]
      },
      "lib/codemirror/mode/apl/apl": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/asterisk/asterisk": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/clike/clike": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/clojure/clojure": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/cobol/cobol": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/coffeescript/coffeescript": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/commonlisp/commonlisp": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/css/css": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/d/d": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/diff/diff": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/ecl/ecl": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/erlang/erlang": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/gas/gas": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/gfm/gfm": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/go/go": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/groovy/groovy": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/haml/haml": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/haskell/haskell": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/haxe/haxe": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/htmlembedded/htmlembedded": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/htmlmixed/htmlmixed": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/http/http": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/jade/jade": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/javascript/javascript": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/jinja2/jinja2": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/less/less": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/livescript/livescript": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/lua/lua": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/markdown/markdown": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/meta.js/meta.js": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/mirc/mirc": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/ntriples/ntriples": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/ocaml/ocaml": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/pascal/pascal": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/perl/perl": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/php/php": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/pig/pig": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/properties/properties": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/python/python": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/q/q": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/r/r": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/rpm/rpm": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/rst/rst": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/ruby/ruby": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/rust/rust": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/sass/sass": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/scheme/scheme": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/shell/shell": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/sieve/sieve": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/smalltalk/smalltalk": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/smarty/smarty": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/sparql/sparql": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/sql/sql": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/stex/stex": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/tcl/tcl": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/tiddlywiki/tiddlywiki": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/tiki/tiki": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/turtle/turtle": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/vb/vb": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/vbscript/vbscript": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/velocity/velocity": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/verilog/verilog": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/xml/xml": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/xquery/xquery": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/yaml/yaml": { deps: ["lib/codemirror/lib/codemirror"] },
      "lib/codemirror/mode/z80/z80": { deps: ["lib/codemirror/lib/codemirror"] }
   }
});
