$(() => {
    
    $(".accordion-header").click(function() {
        let content = $(this).next('.accordion-content')

        $(".accordion-content").not(content).slideUp()
        $(content).slideToggle();
    })

})