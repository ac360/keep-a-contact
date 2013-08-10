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

		"click .add-contact-button":  "addContact"

    },

    addContact: function(e) {

    	var userID = $(e.currentTarget).attr('data-id');

		$('#add-contact-modal').modal()
		$('#add-contact-modal').modal('show')

    	var facebookContact = new KeepAContact.Models.FacebookContact({});
	      	facebookContact.fetch({
	      		data: { user_id: userID },
    			processData: true,
	            success: function (response) {
	                var result = response.toJSON();
	                if (result.error) {
	                   console.log(result.error)
	                } else {

	                   // First Save the new contact
	                   console.log(response)
	                   

	                   // Then Load the modal window
	          //          var addContactModal = new KeepAContact.Views.ModalAddContact({ model: result })
    				   // $('.modal-dialog').html(addContactModal.render().$el); 
	                }
	            } // End Success
	      	}); // End fetch 

	},

	render: function () {
	    this.$el.html(this.template({ collection: this.collection }));
		return this;
	}

});