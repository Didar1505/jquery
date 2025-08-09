$(() => {
    $.ajax({
        type: "get",
        url: 'https://dummyjson.com/test',
        dataType: "json",
        success: function (response) {
            console.log(response)
        }
    });
})