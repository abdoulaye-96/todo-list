$(function() {
  
    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      var text = $('input:text').val();
      // if (text.trim !== "") { if et else pour que si on a rien ecris la liste n'augmente pas 
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
      // }else {
      //   alert('Please enter');
      // }
    });
  
    $list.on('click', 'li', function() {
      var $this = $(this);
      $this.remove();
    });
  
  });
  