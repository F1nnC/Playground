$(document).ready(function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page === "") {
      page = "/s";
    }
    $('#nav-bar a[href$="' + page + '"] button').addClass('active');
  });
  