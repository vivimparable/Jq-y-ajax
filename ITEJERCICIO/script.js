$(document).ready(function() {
    $("#botonbroma").click(function() {
        $.get("http://api.icndb.com/jokes/random", function(data) {
            $("#info").html(data.value.joke);
        });
    });
});