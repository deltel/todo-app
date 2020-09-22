$(document).ready(() => {
    console.log('document ready');

    $('#todo-input').on('submit', function () {
        $.ajax({
            url: '/todo',
            method: 'POST',
            data: todo,
            success: (data) => {
                console.log(`current: ${data}`);
            }
        });
    });

    // does not wok with arrow function
    $('li').on('click', function () {
        let item = $(this).text().trim().replace(/ /g, "-");
        console.log(item);

        $.ajax({
            url: '/todo/' + item,
            method: 'DELETE',
        }).done((data) => {
            location.reload();
        });
    });
})