var $btns = $('.filterButton').click(function () {
    if (this.id == 'all') {
        $('#parent2 > div').fadeIn("slow");
    } else {
        var $el = $('.' + this.id).fadeIn("slow");
        $('#parent2 > div').not($el).fadeOut("fast", function () {
            $('#parent2 > div').not($el).attr("style", "display: none !important")
        });
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})
