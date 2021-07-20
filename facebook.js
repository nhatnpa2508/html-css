$(document).ready(function () {
  $('#button-hidden').click(function () {
    var $this = $(this);
    $this.toggleClass('switch');
    if ($this.hasClass('switch')) {
      $this.val('...');
      $('#hidden-menu').prop('hidden', true);
    } else {
      $this.val('X');
      $('#hidden-menu').prop('hidden', false);
    }
  })
  $('#button-angle-down').click(function(){
    var $this = $(this);
    if ($this.hasClass('button-angle-down')) {
      $('#button-angle-down').prop('hidden', true);
      $('#button-angle-up').prop('hidden', false);
    }
  })

  $('#button-angle-up').click(function(){
    var $this = $(this);
    if ($this.hasClass('button-angle-up')) {
      $('#button-angle-up').prop('hidden', true);
      $('#button-angle-down').prop('hidden', false);
    }
  })
});