$(function() {
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        var $items = $('#content').find('.item');
        var $menu = $('#menu');
        var currentId = '';    // 所在楼层id
        $items.each(function(i, ele) {
            var itemTop = $(ele).offset().top;
            if (itemTop < scrollTop + 200) {
                currentId = '#'+ $(ele).attr('id');
            } else {
                return;
            }
        });
        var current = $menu.find('.current');
        if (currentId && current.attr('href') !== currentId) {
                current.removeClass('current');
                $menu.find('[href="' + currentId +'"]').addClass('current');
            }
    });
});