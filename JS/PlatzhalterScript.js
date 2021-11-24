

/*global $, document*/
$(document).ready(function () {
    "use strict";
    $(".zusammenfassung").click(function () {
        $(".zusammenfassungvideo,p1").slideToggle();
    });
});

$(document).ready(function () {
    "use strict";
    $(".aufwaermen").click(function () {
        $(".aufwaermenvideo,p2").slideToggle();
    });
});