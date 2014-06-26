define({
toolbar: [
   { name: 'document', items: [ 'Source', 'Maximize', 'ShowBlocks' ] },
   [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
   { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
   { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat', '-', 'TextColor', 'BGColor' ] },
   { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
   { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
   { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar' ] },
],
autoGrow_onStartup: true,
height: 600,
baseHref: 'ckeditor/'
});