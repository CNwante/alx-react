import $ from "jquery";

$(document).ready(() => {
  const p1 = $("<p>Holberton Dashboard</p>");
  const p2 = $("<p>Dashboard data for the students</p>");
  const p3 = $("<p>Copyright - Holberton School</p>");

  $("body").append(p1, p2, p3);
});
