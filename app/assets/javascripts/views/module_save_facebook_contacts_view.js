KeepAContact.Views.ModuleSaveFacebookContactsView = Backbone.View.extend({
	
  tagName: "ul",
  id: "facebook-contacts-list",
  className: "list-inline row",
  template: JST['modules/save_facebook_contacts'],

	initialize: function() {
		_.bindAll(this);
		$('#scrollable-container').niceScroll({cursorcolor:"#999999"});
	},

	events: {
		"dragstart .facebook-contact"      :  "setDataTransferObject"
    },

    setDataTransferObject: function(e) {
    	// Get the draggable item's Facebook UID and store it in the dataTransferObject
    	e.originalEvent.dataTransfer.setData("facebookID", $(e.currentTarget).attr('data-id'));
    },

	render: function () {

	    this.$el.html(this.template({ collection: this.collection }));
		return this;
	}

});