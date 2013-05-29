var storiesFunction = function ($) {

    var storyNav = $('.storyHole li');
    var stories = $('.stories');
    var showStories = $('.showStories');
    var inspireNode = $('.page-node-305');

    if ( inspireNode.length ) {
        alert('it');
        $(window).scroll(function() {
            console.log('scrolling');
        });

        storyNav.click(function () {
            var that = $(this);
            stories.hide();
            storyNav.removeClass('active');
            that.addClass('active');
            $('.' + that.attr('data-matchingStory')).show();
        });

        showStories.click(function() {
            var that = $(this);
            var storiesShown = that.hasClass('on');
            var storyWrap = $('.storyHole');
            var groupBg = $('.groupBg');

            if ( storiesShown ) {
                that.removeClass('on').addClass('off');
                storyWrap.hide(0);
                groupBg.show(0);
            } else {
                that.removeClass('off').addClass('on');
                storyWrap.show(0);
                groupBg.hide(0);
            }

            return false;
        });

    }



}(jQuery);