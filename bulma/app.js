$(function () {

  // ========== General functions ============

  //load client navbar
  $("#navbar").load("navbar.html", function () {
    //nav bar burger toggle
    $('#navbar-toggle').click(function () {
      $(this).toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    });

    loadChangePasswordModal();
  });

  //load staff navbar
  $("#navbar-staff").load("staff-navbar.html", function () {
    //nav bar burger toggle
    $('#navbar-toggle').click(function () {
      $(this).toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    });

    loadChangePasswordModal();
  })

  //load change password modal after navbar has finished loading
  function loadChangePasswordModal() {
    $('#modal-change-password-container').load("change-password.html", function () {
      //appear on clicking change password nav item
      $('#modal-change-password').click(function () {
        $('#modal-change-password-root').addClass('is-active')
      })

      // close on clicking cancel or x
      $('.modal-close-btn').click(function () {
        $(this).parents('.modal').removeClass('is-active');
      })
    });
  }

  // listen for window resize and remove section for small screens
  var rootContainer = $('.root, #root')
  var mediaWidth = window.matchMedia("only screen and (max-width: 600px)");
  $(window).resize(function () {
    if (mediaWidth.matches) {
      rootContainer.removeClass('section')
    } else {
      rootContainer.addClass('section')
    }
  })
  $(window).trigger('resize');

  //Use for select all in modal boxes 
  $("#check-all-modal").click(function (event) {

    console.log('click');

    $(this).find('input').prop('checked', !$(this).find('input').prop('checked'))

    $(".checkbox-modal").find('input').prop('checked', $('#check-all-modal').find('input').prop('checked'))

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
  $('textarea').on('change keyup keydown paste cut', function () {
    //TODO: this implementation is slightly buggy, the textarea does not resize properly and it is not possible to manually resize the textarea
    console.log($(this), $(this).height());

    $(this).height(0).height(this.scrollHeight);
  }).change();

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
    var $msgBody = $(this).parents(".message-header");
    $msgBody.next().toggleClass('hidden');
    $msgBody.parent().toggleClass('is-light is-info');
  });

  // ========= USER LIST ============

  //listener for + icon in user list to open department selector
  $('.modal-add-department').on('click', function () {
    $('#modal-department-root').addClass('is-active');
  });

  // listener for edit icon in user list to open edit user modal
  $('#modal-new-user').click(function () {
    $('#modal-add-user-root').addClass('is-active');
  });

  // listener for delete user button in user list to open delete user modal
  $('#modal-delete-user').click(function () {
    $('#modal-delete-user-root').addClass('is-active');
  });

  //listener to disable/enable the delete user button in delete users modal
  $('#modal-delete-user-field').keyup(function () {
    if ($(this).val().toLowerCase() === 'yes') {
      $('#btn-delete-user').attr('disabled', false)
    } else {
      $('#btn-delete-user').attr('disabled', true);
    }
  });

  // listener on x buttons in departments which triggers confirmation delete department modal
  $('.delete-department').click(function () {
    console.log('test');

    $('#modal-delete-department-root').addClass('is-active');
  });

  // listener to close modals, for cancel and close buttons
  $('.modal-close-btn').click(function () {
    $(this).parents('.modal').removeClass('is-active');
  });

  //listen for esacpe to close modals
  $(document).keyup(function (event) {
    if (event.keyCode === 27) {
      $('.modal').removeClass('is-active')
    }
  })

  //used to display or hide the assign department and delete user buttons
  $('.checkbox').change(function () {
    if ($('.checkbox:checked').length > 0) {
      $('.btn-grouped-checkbox').attr('disabled', false);
    } else {
      $('.btn-grouped-checkbox').attr('disabled', true);
    }
  })

  // ============= NEW TICKET | POST TICKET ==============

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

  // Hide reply button while being scrolled
  // $(window).scroll(function() {
  //   if($(this).scrollTop() > 0) {
  //     
  //   } else {
  //     
  //   }
  // })

  $(window).scroll(function () {
    clearTimeout($.data(this, 'scrollTimer'));
    $('#reply-container').slideUp(200);
    $.data(this, 'scrollTimer', setTimeout(function () {
      $('#reply-container').slideDown(200);
    }, 500));
  });

  // ============ temp jQuery to showcase working of message ==================
  $('.btn-msg-sort-time').click(function () {
    if (!($(this).hasClass('is-active'))) {
      $('.btn-msg-sort-category').removeClass('is-active is-link')
      $('.btn-msg-sort-time').addClass('is-active is-link')
      $('#time-sorted').removeClass('is-hidden');
      $('#category-sorted').addClass('is-hidden');
    }
  })

  $('.btn-msg-sort-category').click(function () {

    if (!($(this).hasClass('is-active'))) {
      $('.btn-msg-sort-time').removeClass('is-active is-link')
      $('.btn-msg-sort-category').addClass('is-active is-link')
      $('#category-sorted').removeClass('is-hidden');
      $('#time-sorted').addClass('is-hidden');
    }
  })
});