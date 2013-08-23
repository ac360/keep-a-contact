KeepAContact.Views.ModuleMainNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['dashboard/main_navigation'],

	initialize: function() {
		  _.bindAll(this);
	},

  events: {
  },

	render: function () {
		  this.$el.html(this.template({ collection: this.collection.toJSON() }));
		  return this;
	}

});