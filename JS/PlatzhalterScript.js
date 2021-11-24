

/*global $, document*/
$(document).ready(function () {
    "use strict";
    $(".zusammenfassung").click(function () {
        $(".zusammenfassungtoggle").slideToggle();
    });
});

$(document).ready(function () {
    "use strict";
    $(".aufwärmen").click(function () {
        $(".aufwaermenvideo,p2").slideToggle();
    });
});