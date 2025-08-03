$(()=> {
    
    $(".menu").click(()=> {
        $('.sidebar').toggleClass("collapsed");
        $(".content").toggleClass("full")
    })
})