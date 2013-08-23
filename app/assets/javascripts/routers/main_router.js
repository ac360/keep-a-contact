KeepAContact.Routers.Main = Backbone.Router.extend({
	
	routes: {
    	"":                              "landingPage",
      "dashboard":                     "dashboardScreen",
      "facebook_contacts":             "importFacebookContactsScreen"
    },

    initialize: function() {
      _.bindAll(this);
    }, // End of initialize

    landingPage: function() {
      console.log("hello from the landing page")
    }, // END home

    dashboardScreen: function() {
      var screenDashboardView= new KeepAContact.Views.ScreenDashboard();
    },

    importFacebookContactsScreen: function() {
      var screenDashboardView = new KeepAContact.Views.ScreenImportFacebookContacts();
    } // End saveFacebookContactsPage
    
}); // End of Router.Deals
