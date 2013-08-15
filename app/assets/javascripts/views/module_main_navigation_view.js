KeepAContact.Views.ModuleMainNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/main_navigation'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
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