$(window).scroll(function() {
    let height = $(window).scrollTop();
    if (height > 100) {
        $('#scroll2Top').fadeIn();
        $('#scroll2Bottom').fadeOut();
    } else {
        $('#scroll2Top').fadeOut();
        $('#scroll2Bottom').fadeIn();
    }
});

$(document).ready(function() {
    $("#scroll2Bottom").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");
        return false;
    });
    $("#scroll2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
