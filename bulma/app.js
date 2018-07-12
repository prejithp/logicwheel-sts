$(function () {

  // ========== General functions ============

  //load navbar
  $("#navbar").load("navbar.html", function () {
    //nav bar burger toggle
    $('#navbar-toggle').click(function () {
      $(this).toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    });
  });

  //Use for select all in modal boxes 
  $("#check-all-modal").click(function () {

    $(this).children('input').prop('checked', !$(this).children('input').prop('checked'))

    $(".checkbox-modal").find('input').each(function () {
      $(this).prop('checked', $('#check-all-modal').children('input').prop('checked'))
    })
  });

  $(".checkbox-modal").click(function () {

    $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));

    if (!$(this).prop("checked")) {
      $("#check-all-modal").find('input').prop("checked", false);
    }
  });

  //Can be used in select all in main tables
  $("#check-all").click(function () {
    $(".checkbox").prop('checked', $(this).prop('checked'));

  });

  $(".checkbox").change(function () {
    if (!$(this).prop("checked")) {
      $("#check-all").prop("checked", false);
    }
  });

  //increase height of of textarea with increasing number of lines
  $('section').on('change keyup keydown paste cut', 'textarea', function () {
    $(this).height(0).height(this.scrollHeight);
  }).find('textarea').change();

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
  $('#modal-new-user').click(function () {
    $('#modal-add-user-root').addClass('is-active');
  });

  $('#modal-add-user-close').click(function () {
    $('#modal-add-user-root').removeClass('is-active');
  });

  // =================== NEW TICKET ==============

  // append button to file attachments when a new file has been added
  $('#input-file-new-ticket').change(function () {
    var $attachmentContainer = $('#file-attachments-container');

    $('#file-attachments').removeClass('is-hidden');

    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      $attachmentContainer.append(`
          <div class="button">${$(this).get(0).files[i].name}<a class="delete delete-spacer is-small"></a></div>
        `)
    }
  })

});