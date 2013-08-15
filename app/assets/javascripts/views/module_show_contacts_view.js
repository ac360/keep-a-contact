KeepAContact.Views.ModuleShowContacts = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/show_contacts'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
  },

	render: function () {

    this.$el.html(this.template({ collection: results }));
		return this;
	}

});