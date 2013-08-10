KeepAContact.Views.ModalAddContact = Backbone.View.extend({
	
  tagName: "div",
  className: "modal-content",
  template: JST['modals/modal_add_facebook_contact'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
    },

	render: function () {

	    this.$el.html(this.template({ model: this.model }));
		return this;

	}

});