const $list = $("#todo_list");

$list.on("click",".item", function () {
    console.log( $(this).text());
    const status = $(this).attr("class");
    if (status === "item incomplete") {
        $(this).attr("class", "item complete");
    } else {
        $(this).attr("class", "item incomplete");
    }
});

function submit(value) {
    if (value.length > 0) {
        console.log(value);
        $list.append('<li class="item incomplete">'+value+'</li>')
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