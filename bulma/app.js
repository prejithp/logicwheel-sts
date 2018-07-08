$(function () {

  // ========== General functions ============

  //Use for select all in modal boxes 
  $("#check-all-modal").click(function () {
    $(".checkbox-modal").prop('checked', $(this).prop('checked'));
    console.log('click');

  });

  $(".checkbox-modal").change(function () {
    if (!$(this).prop("checked")) {
      $("#check-all-modal").prop("checked", false);
    }
  });

  //Can be used in select all in main tables
  $("#check-all").click(function () {
    $(".checkbox").prop('checked', $(this).prop('checked'));
    console.log('click');

  });

  $(".checkbox").change(function () {
    if (!$(this).prop("checked")) {
      $("#check-all").prop("checked", false);
    }
  });

  //  =========== CLIENT DASHBOARD ============

  //Click listener for dismiss button in dashboard messages. Also checks if all rows are hidden, in that case, the title preceding the table is also hidden
  $('.btn-dismiss').click(function () {
    var $msgRow = $(this).parents('tr');
    $msgRow.hide();
    var $msgTable = $msgRow.parents('table');
    var $msgRows = $msgTable.find('tr');
    var $hiddenMsgRows = $msgRows.children(':hidden');

    if ($msgRows.length === $hiddenMsgRows.length) {
      $msgTable.parent().prev().hide();
      $msgTable.parent().hide();
    }
  })

  //Click listener for expand button in dashboard messages. Toggles hidden class and sets background classes on clicks
  $('.btn-expand').click(function () {
    var $msgBody = $(this).parent();
    $msgBody.next().toggleClass('hidden');
    $msgBody.parent().toggleClass('is-light is-info');
  });

  // ========= USER LIST ============

  //listener for + icon in user list to open department selector
  $('.modal-add-department').on('click', function () {
    $('#modal-department-root').addClass('is-active');
  });

  $('#modal-department-close').click(function () {
    $('#modal-department-root').removeClass('is-active');
  });

  // listener for edit icon in user list to open edit user modal
  $('.modal-edit-user').click(function() {    
    $('#modal-edit-user-root').addClass('is-active');
  });

  $('#modal-edit-user-close').click(function() {
    $('#modal-edit-user-root').removeClass('is-active');
  })
});