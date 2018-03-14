var cat = localStorage.getItem("myCat");
Mousetrap.bind('ctrl+left', function(e, combo) {
    document.body.scrollTop = document.documentElement.scrollTop = cat;
    return false;
});

Mousetrap.bind('ctrl+up', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return false;
});

Mousetrap.bind('ctrl+down', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 10000000;
    return false;
});
 