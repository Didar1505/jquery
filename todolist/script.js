$(() => {
    $("#add-btn").click((e) => {
        let task = $('#todo-input').val()
        
        let template = `
        <li>
        ${task}
        <button class="remove">x</button>
        </li>
        `

        $("#task-list").append(template)
        $("#todo-input").val("")
    })

    $("#todo-input").on("keypress", (e) => {
        if(e.key == "Enter") {
            $("#add-btn").click()
        }
    })

   $('#task-list').on("click", ".remove", function(e) {
    $(this).parent().remove()
   })
})