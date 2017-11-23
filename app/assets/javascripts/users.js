$(document).on('turbolinks:load', function() {
    $(function () {
        $('.posts').masonry({
            itemSelector: '.posts-post'
        });
    });
});

