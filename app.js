function introScreen() {
    $("#Bonnie-div").hide();
    $("#Claudia-div").hide();
    $("#Karoline-div").hide();
    $("#James-div").hide();
    $("#Liz-div").hide();
    $("#survey-div").hide();
}

introScreen()

// Click on button events
$("#Bonnie-btn").on("click", function() {
    $("#intro-div").hide();
    $("#Bonnie-div").show();
    $("#Claudia-div").hide();
    $("#Karoline-div").hide();
    $("#James-div").hide();
    $("#Liz-div").hide();
    $("#survey-div").hide();
});

$("#Claudia-btn").on("click", function() {
    $("#intro-div").hide();
    $("#Bonnie-div").hide();
    $("#Claudia-div").show();
    $("#Karoline-div").hide();
    $("#James-div").hide();
    $("#Liz-div").hide();
    $("#survey-div").hide();
});

$("#Karoline-btn").on("click", function() {
    $("#intro-div").hide();
    $("#Bonnie-div").hide();
    $("#Claudia-div").hide();
    $("#Karoline-div").show();
    $("#James-div").hide();
    $("#Liz-div").hide();
    $("#survey-div").hide();
});

$("#James-btn").on("click", function() {
    $("#intro-div").hide();
    $("#Bonnie-div").hide();
    $("#Claudia-div").hide();
    $("#Karoline-div").hide();
    $("#James-div").show();
    $("#Liz-div").hide();
    $("#survey-div").hide();
});

$("#Liz-btn").on("click", function() {
    $("#intro-div").hide();
    $("#Bonnie-div").hide();
    $("#Claudia-div").hide();
    $("#Karoline-div").hide();
    $("#James-div").hide();
    $("#Liz-div").show();
    $("#survey-div").hide();
});

$("#vote-btn").on("click", function() {
    $("#intro-div").hide();
    $("#Bonnie-div").hide();
    $("#Claudia-div").hide();
    $("#Karoline-div").hide();
    $("#James-div").hide();
    $("#Liz-div").hide();
    $("#survey-div").show();
});


