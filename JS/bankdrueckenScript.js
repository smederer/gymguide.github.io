/*global $, document*/
$(document).ready(function () {
  $.localScroll({
    offset: -95,
    duration: 400,
  });
  $("#hyperlinkAuf").click(function () {
    $("#hyperlinkAuf")
      .css({
        border: "3px solid #FECD25",
      })
      .fadeToggle(100)
      .fadeToggle(100);
  });
  $("#hyperlinkAus").click(function () {
    $("#hyperlinkAus")
      .css({
        border: "3px solid #FECD25",
      })
      .fadeToggle(100)
      .fadeToggle(100);
  });
  $("#hyperlinkVo").click(function () {
    $("#hyperlinkVo")
      .css({
        border: "3px solid #FECD25",
      })
      .fadeToggle(100)
      .fadeToggle(100);
  });
});
//ready end
