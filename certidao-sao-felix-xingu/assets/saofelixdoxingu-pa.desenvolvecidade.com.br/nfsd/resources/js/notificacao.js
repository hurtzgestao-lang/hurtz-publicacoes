$(function() {

      // Dropdown toggle
      $('.dropdown-toggle-n').click(function() {
        $(this).next('.dropdown-menu-n').toggle('drop',{direction: 'up'}, 400 );
      });

      $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle-n') && !$(target).parents().is('.dropdown-toggle-n')) {
          $('.dropdown-menu-n').hide() ;
        }
      });

});