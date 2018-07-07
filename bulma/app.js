$(function() {

  //Click listener for expand button in dashboard messages
  $('.btn-expand').click(function(event) {
    $msgBody = $(this).parent();
    $msgBody.next().toggleClass('hidden');
    console.log($(this).parent().parent());
    $msgBody.parent().toggleClass('is-light is-info');
  });
});