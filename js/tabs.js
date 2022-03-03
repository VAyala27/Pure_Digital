$(document).ready(function () {
    $('.work-tabs li').on('click', function () {
        $('.work-tabs li.active').removeClass('active');
        $(this).addClass('active');

        var x = $(this).attr('data-id');
        console.log(x);
        console.log('#' + x);

        $('.portfolio.active').fadeOut(500, showNext);

        function showNext() {
            $(this).removeClass('active');
            $("#" + x).fadeIn(500, function () {
                $(this).addClass('active');
            })
        }
    })
});