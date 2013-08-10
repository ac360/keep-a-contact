KeepAContact.Views.ModuleNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/navigation'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"dragenter .group-list-item":  "addHighlight",
		"dragleave .group-list-item":  "removeHighlight",
    "drop .group-list-item":       "testFunction"
  },

  testFunction: function() {
    event_bus.trigger('drop', 'group-list-item')
  },

  addHighlight: function(e) {
  	$(e.currentTarget).addClass( "navigation-highlight" );
  },

  removeHighlight: function(e) {
  	$(e.currentTarget).removeClass( "navigation-highlight" );
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

      // Drop Event Listener
      $('.facebook-contact').on('drop',function(e){
          console.log("helo")
      })

		return this;
	}

});