function submit(value) {
    console.log(value);
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