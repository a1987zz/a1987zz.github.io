(function() {
  var src = document.getElementsByTagName('script')[0].src.replace('/content.js', '/source/');
  
  function include(name) {
    document.writeln('<script src="'+src+name+'" type="text/javascript"></script>');
    document.writeln('<link href="../static/prism.css" rel="stylesheet" type="text/css"/>');
  }
  include('jquery.js'), include('tree.jquery.js'), include('sidebar.js'), include('connent.js')
  include('data_toc.js'), include('data_index.js'), include('data_translate.js'), include('main.js'), include('mousetrap.js'), include('prism.js'), include('bindkeys.js')
})();
