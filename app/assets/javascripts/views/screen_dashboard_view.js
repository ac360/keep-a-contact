KeepAContact.Views.ScreenDashboard = Backbone.View.extend({
	
	  el: "#dashboard-container",

	  initialize: function() {
		
		_.bindAll(this);

		var userGroups = new KeepAContact.Collections.Groups();
		var self = this
	    userGroups.fetch({
            success: function (response) {
                var results = response.toJSON();
                console.log(results)
                if (results[0].error) {
                   console.log(results[0].error)
                } else {
                    var moduleMainNavigationView = new KeepAContact.Views.ModuleMainNavigation({ collection: results })
	    		    $('#navigation-container').html(moduleMainNavigationView.render().$el);
                }
            } // End Success
	    }); // End fetch

	  },

	  events: {
	  },

	  render: function () {
			return this;
	  }

});