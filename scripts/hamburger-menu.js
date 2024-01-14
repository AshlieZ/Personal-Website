$("#open-nav-menu-button").click(function () {
    $("#nav-menu").removeClass("hidden");
    $("#open-nav-menu-button").addClass("hidden");
    $("#close-nav-menu-button").removeClass("hidden");
});
$("#close-nav-menu-button").click(function () {
    $("#nav-menu").addClass("hidden");
    $("#open-nav-menu-button").removeClass("hidden");
    $("#close-nav-menu-button").addClass("hidden");

});

$(document).ready(function () {
    if ($(document).width() < 700) {
        $("#nav-menu").addClass("hidden");
        $("#open-nav-menu-button").removeClass("hidden");
        $("#close-nav-menu-button").addClass("hidden");
    } else {
        $("#nav-menu").removeClass("hidden");
        $("#open-nav-menu-button").addClass("hidden");
        $("#close-nav-menu-button").addClass("hidden");
    }
});

$(window).resize(function () {
    $(document).ready(function () {
        if ($(document).width() < 700) {
            $("#nav-menu").addClass("hidden");
            $("#open-nav-menu-button").removeClass("hidden");
            $("#close-nav-menu-button").addClass("hidden");
        } else {
            $("#nav-menu").removeClass("hidden");
            $("#open-nav-menu-button").addClass("hidden");
            $("#close-nav-menu-button").addClass("hidden");
        }
    });
});
