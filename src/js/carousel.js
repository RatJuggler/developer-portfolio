$(document).ready(function() {

    /* Original: CC 2.0 License Iatek LLC 2018 - Attribution required */

    $("#interestsCarousel").on("slide.bs.carousel", function(e) {
        const itemsPerSlide = 4;
        let $e = $(e.relatedTarget);
        let idx = $e.index();
        let totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            let it = itemsPerSlide - (totalItems - idx);
            for (let i = 0; i < it; i++) {
                $(".carousel-item").eq(e.direction === "left" ? i : 0).appendTo(".carousel-inner");
            }
        }
    });

});
