KeepAContact.Views.ScreenDashboard = Backbone.View.extend({
	
  el: "#dashboard-container",

	initialize: function() {
		_.bindAll(this);

    var moduleMainNavigationView = new KeepAContact.Views.ModuleMainNavigation({})
    $('#navigation-container').html(moduleMainNavigationView.render().$el);

	},

	events: {
    "click .group-list-item"      :      "testFunction"
  },

  testFunction: function() {
    alert("hello")
  },

	render: function () {
		return this;
	}

});