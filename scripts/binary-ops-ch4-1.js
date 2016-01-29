
function display() {

  var x = Number($("#angle").val());
  var y = Number($("#velocity").val());

  $("#angleDisplay").text(Boolean(x&&y));
  $("#angleDisplay").text(Boolean(x||y));
  $("#angleDisplay").text(Boolean(!x));
  $("#angleDisplay").text(Boolean((x||y) && !(x&&y)));

 };

$("button").on("click",display);

