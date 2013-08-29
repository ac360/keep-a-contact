KeepAContact.Views.ModalAddContact = Backbone.View.extend({
	
  tagName: "div",
  className: "modal-content",
  template: JST['modals/modal_add_facebook_contact'],

	initialize: function() {
		_.bindAll(this, "remove");
	},

	events: {
		"click #save-customized-contact-button"  :   "saveCustomizedContact",
		"click .priority-button"                 :   "setPriority"
    },

    saveCustomizedContact: function() {

    	var nickName = $('#nick-name-field').val()
    	var priorityNumber = $('.priority').text()
    	var self = this
    	console.log(priorityNumber);
    	var thisContact = new KeepAContact.Models.KeepAContactContact({ id: this.model.id })
    	thisContact.save({
		          nick_name: nickName,
		          priority: priorityNumber
		      }, {
		          success: function () {
		          		self.remove();
		          		$('#add-contact-modal').modal('hide');
		          },
		          error: function (model, xhr) {
		            var errors = $.parseJSON(xhr.responseText).errors
		            console.log(errors)
		          }
		}) // End of thisContact.save
    },

    setPriority: function(e) {
    	if ( $('.priority-button').hasClass('priority') ) {
    		 $('.priority-button').removeClass('priority');
    		 $(e.currentTarget).addClass('priority');
    	} else {
    		 $(e.currentTarget).addClass('priority');
    	}
    },

	render: function () {

	    this.$el.html(this.template({ model: this.model, group: this.options.group }));
		return this;

	}

});