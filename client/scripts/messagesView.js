var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  renderMessage: function(message){
    var rendered = MessageView.render(message);
    $(rendered).appendTo('#chats');
  }
  // render: function() {
  //   $.ajax({
      



  //   })
  // }

};