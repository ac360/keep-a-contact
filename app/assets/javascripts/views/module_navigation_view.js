KeepAContact.Views.ModuleNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/navigation'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
    },

	render: function () {
	    this.$el.html(this.template());
		return this;
	}

});