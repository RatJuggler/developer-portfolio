$(document).ready(function() {

    $('#interestsCarousel .carousel-item').each(function() {
        const minPerSlide = 3;
        let next;
        while ($(this).children().length < minPerSlide) {
            next = next ? next.next() : $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

});
