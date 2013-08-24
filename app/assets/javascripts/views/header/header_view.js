KeepAContact.Views.Header = Backbone.View.extend({
	
    el: "#header-container",

  	initialize: function() {
  		  _.bindAll(this);
        // Instantiate Popover
  	},

    events: {
      "click #user-account-link"      :  "showMenu"
    },

    showMenu: function() {
      $('#links-container').slideToggle(120);
    },

  	render: function () {
  		  return this;
  	}

});