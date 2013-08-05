KeepAContact.Views.ModuleNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/navigation'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"dragenter #group-list-item":  "addHighlight",
		"dragleave #group-list-item":  "removeHighlight"
    },

    addHighlight: function(e) {
    	$(e.currentTarget).addClass( "navigation-highlight" );
    },

    removeHighlight: function(e) {
    	$(e.currentTarget).removeClass( "navigation-highlight" );
    },

    addContact: function() {
    	console.log("new contact created!")
    },

	render: function () {
		var userGroups = new KeepAContact.Collections.Groups();
		var self = this
	    userGroups.fetch({
            success: function (response) {
                var results = response.toJSON();
                console.log(results)
                if (results[0].error) {
                   console.log(results[0].error)
                } else {
                  self.$el.html(self.template({ collection: results }));
                }
            } // End Success
	    }); // End fetch

		return this;
	}

});