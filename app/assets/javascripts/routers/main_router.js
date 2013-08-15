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
      var screenDashboardView= new KeepAContact.Views.ScreenDashboard();
    },

    saveFacebookContactsPage: function() {

        var moduleAddContactsNavigationView = new KeepAContact.Views.ModuleAddContactsNavigation({})
        $('#navigation-container').html(moduleAddContactsNavigationView.render().$el);

        var facebookContacts = new KeepAContact.Collections.FacebookContacts({});
        facebookContacts.fetch({
              success: function (response) {
                  var fbContacts = response.toJSON();
                  if (fbContacts[0].error) {
                     console.log(fbContacts[0].error)
                  } else {

                    var keepacontactContacts = new KeepAContact.Collections.KeepAContactContact({});
                    keepacontactContacts.fetch({
                          success: function (response) {
                              var kacContacts = response.toJSON();
                              var moduleSaveFacebookContactsView = new KeepAContact.Views.ModuleSaveFacebookContactsView({ collection: fbContacts, contacts: kacContacts })
                              $('#scrollable-container').html(moduleSaveFacebookContactsView.render().$el);
                          } // End Success
                    }); // End fetch
                  
                  } // End else
              } // End Success
        }); // End fetch
  } // End saveFacebookContactsPage
    
}); // End of Router.Deals
