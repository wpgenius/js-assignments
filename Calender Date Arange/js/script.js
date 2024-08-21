var unavailableDates = ["29-8-2024", "14-9-2024"];

function unavailable(date) {
  dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  if ($.inArray(dmy, unavailableDates) == -1) {
    return [true, ""];
  } else {
    return [false, "", "Unavailable"];
  }
}

$(function () {
  $("#from").datepicker({
    dateFormat: "dd MM yy",
    beforeShowDay: unavailable,
  });
});
$(function () {
  $("#to").datepicker({
    dateFormat: "dd MM yy",
    beforeShowDay: unavailable,
  });
});
