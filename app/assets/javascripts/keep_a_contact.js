window.KeepAContact = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    KeepAContact.Router = new KeepAContact.Routers.Main();
    if (!Backbone.history.started) {
            Backbone.history.start({ pushState: true });
            Backbone.history.started = true;
    }
  }
};

$(document).ready(function(){
  KeepAContact.initialize();
});
