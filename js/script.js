const $list = $("#todo_list");

$list.on("click",".incomplete", function () {
    console.log( $(this).text());
    $(this).attr("class", "complete");
});

function submit(value) {
    if (value.length > 0) {
        console.log(value);
        $list.append('<li class="incomplete">'+value+'</li>')
    } else {
        alert("Submission must not be empty.");
    }
}

const $input = $("#input");
$input.on("keydown", function(e) {
    if (e.keyCode == 13) {
        submit($input.val())
    }
})

$("#submit").on("click", function () {
    submit($input.val());
})