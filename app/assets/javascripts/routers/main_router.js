KeepAContact.Routers.Main = Backbone.Router.extend({
	
	routes: {
    	"":                              "landingPage",
      "dashboard":                     "dashboardPage",
      "facebook_contacts":             "saveFacebookContactsPage"
    },

    initialize: function() {
      _.bindAll(this);

    }, // End of initialize

    landingPage: function() {
      console.log("hello from the landing page")
    }, // END home

    dashboardPage: function() {
      
    },

    saveFacebookContactsPage: function() {
      var moduleNavigationView = new KeepAContact.Views.ModuleNavigation({})
      $('#navigation-container').html(moduleNavigationView.render().$el);

      var facebookContacts = new KeepAContact.Collections.FacebookContacts();
      facebookContacts.fetch({
            success: function (response) {
                var results = response.toJSON();
                console.log(results)
                if (results[0].error) {
                   console.log(results[0].error)
                } else {
                  var moduleSaveFacebookContactsView = new KeepAContact.Views.ModuleSaveFacebookContactsView({ collection: results })
                  $('#facebook-contacts-list').html(moduleSaveFacebookContactsView.render().$el);
                }
            } // End Success
      }); // End fetch

    }
    
}); // End of Router.Deals
