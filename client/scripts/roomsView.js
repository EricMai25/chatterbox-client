var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  renderRoom: function(roomName){
    $(`<div>${roomName}</div>`).appendTo('#rooms select');
  },
  initialize: function() {
  },

  render: function() {
  }

};
