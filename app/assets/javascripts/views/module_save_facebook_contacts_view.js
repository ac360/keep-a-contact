KeepAContact.Views.ModuleSaveFacebookContactsView = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/save_facebook_contacts'],

	initialize: function() {
		_.bindAll(this);
		$('#scrollable-container').niceScroll({cursorcolor:"#999999"});
	},

	events: {
    },

	render: function () {
	    this.$el.html(this.template({ collection: this.collection }));
		return this;
	}

});