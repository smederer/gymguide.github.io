

/*global $, document*/
$(document).ready(function () {
    "use strict";
    $(".zusammenfassung").click(function () {
        $(".zusammenfassungvideo,p1").slideToggle();
    });
    $(".zusammenfassung").click(function () {
        var angle = 0;
        setInterval(function () {
            angle += 90;
            $(".zusammenfassungArrow").rotate(angle);
        });
    });



    $(".aufwaermen").click(function () {
        $(".aufwaermenvideo,p2").slideToggle();
        
    });
    
}); //ready end