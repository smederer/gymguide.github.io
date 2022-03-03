const params = new URLSearchParams(window.location.search);

$(document).ready(function () {
  switch (params.get("content")) {
    case "bankdruecken":
      populate(0);
      break;
    case "beinbeuger":
      populate(1);
      break;
    case "beinstrecker":
      populate(2);
      break;
    case "dips":
      populate(3);
      break;
    case "cableFlyes":
      populate(4);
      break;
    case "kreuzheben":
      populate(5);
      break;
    case "schraegbank":
      populate(6);
      break;
    case "squat":
      populate(7);
      break;
    default:
      alert("Diese GymGuide Übung wurde leider nicht gefunden.");
      window.location.replace("index.html");
  }
});

function populate(i) {
  $.getJSON("JS/contents.json", function (jd) {
    document.title = "MyGym/" + jd.uebungen[i].uebungName;
    $("#SeitenTitel").text(jd.uebungen[i].uebungName);
    $("#mainImage").attr("src", jd.uebungen[i].mainImage);
    $("#aufwaermenLink").attr("src", jd.uebungen[i].aufwaermenLink);
    $("#aufwaermenText").text(jd.uebungen[i].aufwaermenText);
    $("#vorbereitungLink").attr("src", jd.uebungen[i].vorbereitungLink);
    $("#vorbereitungText").text(jd.uebungen[i].vorbereitungText);
    $("#ausfuehrungLink").attr("src", jd.uebungen[i].ausfuehrungLink);
    $("#ausfuehrungText").text(jd.uebungen[i].ausfuehrungText);
  });
}
