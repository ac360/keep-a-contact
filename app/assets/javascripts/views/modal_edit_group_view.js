KeepAContact.Views.ModalEditGroup = Backbone.View.extend({
	
  	tagName: "div",
  	template: JST['modals/modal_edit_group'],

	initialize: function() {
		_.bindAll(this);		
	},

	events: {
		"click #edit-group-submit-button"  :  "submitUpdatedGroup",
		"click #group-delete-link"		   :  "deleteGroup"
    },

    submitUpdatedGroup: function() {

  		var groupName = $('#group-name-field').val()
  		var self = this
  
  		var thisGroup = new KeepAContact.Models.KeepAContactGroup({ id: this.options.groupid })
    	thisGroup.save({
		          name: groupName
		      }, {
		          success: function () {
		          		$('#edit-group-modal').modal('hide');
		          		self.remove();
		          },
		          error: function (model, xhr) {
		            var errors = $.parseJSON(xhr.responseText).errors
		            console.log(errors)
		          }
		}) // End of thisContact.save

    },

	render: function () {

	    this.$el.html(this.template({ groupname: this.options.groupname }));
		return this;

	}

});