$(function() {
  $('.btn-expand').click(function(event) {
    $(this).parent().next().toggleClass('hidden');
  });
});