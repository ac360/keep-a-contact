KeepAContact.Views.ScreenDashboard = Backbone.View.extend({
	
	  el: "#dashboard-container",

	  initialize: function() {
		_.bindAll(this);
		this.fetchGroups();
	  },

	  events: {
	  	"click  #add-group-button"          :  "addGroupModal",
	  	"click  #add-group-submit-button"   :  "addGroup",
	  	"click  .edit-group-button"         :  "editGroupOpenModal",
	  	"click  #edit-group-submit-button"  :  "editGroupSubmitUpdate",
	  	"click  #group-delete-link"		    :  "deleteGroup",
	  	"click  #group-link"		        :  "showGroupContacts"
	  },

	  showGroupContacts: function(e) {
	  	var groupID = $(e.currentTarget).attr('data-id');
	  	var groupName = $(e.currentTarget).text();
	  	var groupContacts = new KeepAContact.Collections.GroupContacts();
		groupContacts.fetch({ 
		    data: { group_id: groupID },
		    processData: true,
		    success: function (response) {
                var groupContactsView = new KeepAContact.Views.ModuleGroupContacts({ collection: response, group: groupName });
                $('#main-column-container').html(groupContactsView.render().$el);
            } // End Success
		});
	  },

	  fetchGroups: function() {
	  	var userGroups = new KeepAContact.Collections.Groups();
		var self = this
	    userGroups.fetch({
            success: function (response) {
                var moduleMainNavigationView = new KeepAContact.Views.ModuleMainNavigation({ collection: response })
                $('#navigation-container').html(moduleMainNavigationView.render().$el);
                return response
            } // End Success
	    }); // End fetch
	  },

	  editGroupOpenModal: function(e) {
	      var groupName = $(e.currentTarget).closest('.section').text()
	      var groupID   = $(e.currentTarget).attr('data-id');
	      $('#edit-group-name-field').val(groupName);
	      $('#edit-group-name-field').attr('data-id', groupID);
	      $('#edit-group-modal').modal('show');
	  },

	  editGroupSubmitUpdate: function() {
	  		var self = this;
  			var newGroupName = $('#edit-group-name-field').val();
  			var groupID      = $('#edit-group-name-field').attr('data-id');
            var thisGroup = new KeepAContact.Models.KeepAContactGroup({ id: groupID })
            thisGroup.save({
                name: newGroupName
            }, { success: function (response) { self.fetchGroups(); } }) // End of thisGroup.save

            $('#edit-group-modal').modal('hide');
            $("#edit-group-submit-button").off('click');
      },

      deleteGroup: function() {
	  		var groupID   =  $('#edit-group-name-field').attr('data-id');
	  		var thisGroup =  new KeepAContact.Models.KeepAContactGroup({ id: groupID })
	        thisGroup.destroy();
	        this.fetchGroups();

	        $('#edit-group-modal').modal('hide');
	        $("#group-delete-link").off('click');
      },

      addGroupModal: function() {
	      var self = this;
	      var groupName = $('#group-name-field').val('')
	      $('#add-group-modal').modal('show');
	  },

	  addGroup: function() {
          var groupName = $('#group-name-field').val()
          if (groupName){} else { var groupName = 'Untitled Group' };
          var newGroup = new KeepAContact.Models.KeepAContactGroup({ name: groupName });
          newGroup.save();
          this.fetchGroups();
          $('#add-group-modal').modal('hide');
	  },

	  render: function () {
			return this;
	  }

});