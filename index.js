// form validation
document.getElementById('submit').addEventListener('click', function () {
    var myName = $("#na").val();
    var myMail = $("#email").val();
    var contact =$("#phone")
    var myMessage = $("#message").val();
    if ($("#na").val() && $("#email").val() && $("#phone").val() && $("#message").val()) {
        alert("Hello there  " + myName + ",thank you for contacting us,we will contact you soon:)");
    } else {
        alert("Please fill all !");
    }
})
//adding hover effect

$('.card1').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p1').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p1').addClass('text');
});
//projectpic2
$('.card2').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p3').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p3').addClass('text');
});

//projectpic3
$('.card3').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p2').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p2').addClass('text');
});