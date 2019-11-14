// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenState = {
            eaten: newEaten
        };

        $.ajax("/api/pizzas/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed eaten to", newEaten);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newPizza = {
            flavor: $("#za").val().trim(),
            eaten: 0
        };

        // Send the POST request.
        $.ajax("/api/pizzas", {
            type: "POST",
            data: newPizza
        }).then(
            function() {
                console.log("created new pizza");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-pizza").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/pizzas/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted pizza", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});