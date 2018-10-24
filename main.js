$(document).ready(() => {
    $("#text").on("keyup", event => {
        let event = $(event.currentTarget).val();
        $(".preview").html(event);
    });
    $("#font").change(event => {
        $(".preview").css({
            fontFamily: "helvetica"
        });
    });
    $("#weight").change(event => {
        $(".preview").css({
            fontweight: "normal"
        });
    });
    $("#size").on("keyup", () => {
        let fontSize = $(event.currentTarget).val() + "px";
        $(".preview").change(fontSize);
    });
})