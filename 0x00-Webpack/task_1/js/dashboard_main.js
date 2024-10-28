import $ from "jquery";
import _ from "lodash";

$(document).ready(() => {
  const p1 = $("<p>Holberton Dashboard</p>");
  const p2 = $("<p>Dashboard data for the students</p>");
  const btn = $("<button>Click here to get started</button>");
  const p4 = $("<p id='count'></p>");
  const p3 = $("<p>Copyright - Holberton School</p>");

  let count = 0;

  function updateCounter() {
    count++;
    p4.text(`${count} clicks on the button`);
  }

  const debouncedClick = _.debounce(updateCounter, 300);

  btn.on('click', debouncedClick);

  $("body").append(p1, p2, btn, p4, p3);
});
