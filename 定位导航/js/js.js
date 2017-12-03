window.onscroll = function() {
    var scrollT = document.documentElement.scrollTop;
    var items = document.getElementById('content').querySelectorAll('.item');
    var menus = document.getElementById('menu').querySelectorAll('a');
    for (var i = 0; i < items.length; i++) {
        var itemTop = items[i].offsetTop;
        if (scrollT > itemTop -200) {
            var currentId = '#' + items[i].id;
        } else {
            break;
        }
    }

    if (currentId) {
        for (var j = 0; j < menus.length; j++) {
            var menuHref = menus[j].getAttribute('href');
             if (currentId === menuHref) {
                 // menus[j].className = 'current';
                 menus[j].setAttribute('class', 'current');
             } else {
                 menus[j].removeAttribute('class');
             }
        }
    }
};