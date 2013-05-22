var storiesFunction = function ($) {

    var storyNav = $('.storyHole li');
    var stories = $('.stories');

    storyNav.hover(function () {
        var that = $(this);
        stories.hide();
        storyNav.removeClass('active');
        that.addClass('active');
        $('.' + that.attr('data-matchingStory')).show();
    },
    function () {

    });

}(jQuery);