$(function() {

  //Click listener for dismiss button in dashboard messages. Also checks if all rows are hidden, in that case, the title preceding the table is also hidden
  $('.btn-dismiss').click(function() {
    var $msgRow = $(this).parents('tr');
    $msgRow.hide();
    var $msgTable = $msgRow.parents('table');
    var $msgRows = $msgTable.find('tr');
    var $hiddenMsgRows = $msgRows.children(':hidden');
    
    if($msgRows.length === $hiddenMsgRows.length) {
      $msgTable.parent().prev().hide();
      $msgTable.parent().hide();
    }
  })

  //Click listener for expand button in dashboard messages. Toggles hidden class and sets background classes on clicks
  $('.btn-expand').click(function() {
    var $msgBody = $(this).parent();
    $msgBody.next().toggleClass('hidden');
    $msgBody.parent().toggleClass('is-light is-info');
  });
});