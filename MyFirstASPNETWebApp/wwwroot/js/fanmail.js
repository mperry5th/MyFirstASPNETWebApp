$("#buttonSend").click(function () {
    alert("From: " + $("#from").val() +
        ", Subject: " + $("#subject").val() +
        ", Message: " + $("#message").val())
    $("#picGanderson").fadeToggle();
});