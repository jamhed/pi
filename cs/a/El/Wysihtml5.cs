define ["a/Pi", "lib/wysi"], (aPi, wysi) -> class aElWysihtml5 extends aPi

   init: ->
      @rt.injectCSS "js/lib/wysihtml5/dist/bootstrap-wysihtml5-0.0.2.css"
      @e.wysihtml5 html: true, stylesheets: ["js/lib/wysihtml5/lib/css/wysiwyg-color.css"]
      super
