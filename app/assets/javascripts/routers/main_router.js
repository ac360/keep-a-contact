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
    }
    
}); // End of Router.Deals
