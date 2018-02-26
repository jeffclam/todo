function submit(value) {
    if (value.length > 0) {
        console.log(value);
        const list = $("#todo_list");
        list.append('<li>'+value+'</li>')
    } else {
        alert("Submission must not be empty.");
    }
}

const input = $("#input");
input.on("keydown", function(e) {
    if (e.keyCode == 13) {
        submit(input.val())
    }
})

$("#submit").on("click", function () {
    submit(input.val());
})