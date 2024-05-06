$(document).ready(function(){
    $("#task-form").submit(function(event){
        event.preventDefault();
        var taskName = $("#task-input").val();
        if(taskName.trim() !== "") {
            $("#task-list").append("<li>" + taskName + "</li>");
            $("#task-input").val("");
        }
    });

    $(document).on("click", "li", function(){
        $(this).toggleClass("completed");
    });
});