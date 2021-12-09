

/*global $, document*/
$(document).ready(function () {
    "use strict";
    
    var x = true;
    $(".zusammenfassung").click(function () {
        if (x === true) {
            $(".zusammenfassungvideo,p1").slideDown();
            $(".zusammenfassungArrow").rotate({
                duration: 800,
                angle: 0,
                animateTo: 90
            });
            x = false;
        } else {
            $(".zusammenfassungvideo,p1").slideUp();
            $(".zusammenfassungArrow").rotate({
                duration: 800,
                angle: 90,
                animateTo: 0
            });
            x = true;
            
        }
    });
    
    
    
    
    var z = true;
    
    
    $(".aufwaermen").click(function () {
        if (z === true) {
            $(".aufwaermenvideo,p2").slideDown();
            $(".aufwaermenArrow").rotate({
                duration: 800,
                angle: 0,
                animateTo: 90
            });
            z = false;
        } else {
            $(".aufwaermenvideo,p2").slideUp();
            $(".aufwaermenArrow").rotate({
                duration: 800,
                angle: 90,
                animateTo: 0
            });
            z = true;
        }
    });
    
   

    
}); //ready end