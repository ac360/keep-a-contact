KeepAContact.Views.ModalAddGroup = Backbone.View.extend({
	
  	tagName: "div",
  	template: JST['modals/modal_add_group'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"click #add-group-submit-button"  :  "createNewGroup"
    },

    createNewGroup: function() {
    	var groupName = $('#group-name-field').val()
    	var listOrder = $("#navigation-groups-list li").size() + 1

  		var newGroup = new KeepAContact.Collections.Groups();
		newGroup.create({ 
				name: groupName,
				list_order: listOrder        	
		});

		$('#add-group-modal').modal('hide');
    },

	render: function () {

	    this.$el.html(this.template());
		return this;

	}

});