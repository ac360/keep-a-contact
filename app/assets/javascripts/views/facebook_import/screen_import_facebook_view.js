KeepAContact.Views.ScreenImportFacebookContacts = Backbone.View.extend({
	
	  el: "#dashboard-container",

	  initialize: function() {
		_.bindAll(this, "render");
		this.fetchGroups();
		this.fetchFacebookContacts();
	  },

	  events: {
	  	"click #add-group-button"          :  "addGroupModal",
	  	"click #add-group-submit-button"   :  "addGroup",
	  	"click .edit-group-button"         :  "editGroupOpenModal",
	  	"click #edit-group-submit-button"  :  "editGroupSubmitUpdate",
	  	"click #group-delete-link"		   :  "deleteGroup"
	  },

	  fetchGroups: function() {
	  	var userGroups = new KeepAContact.Collections.Groups();
		var self = this
	    userGroups.fetch({
            success: function (response) {
                var moduleAddContactsNavigationView = new KeepAContact.Views.ModuleAddContactsNavigation({ collection: response })
                $('#navigation-container').html(moduleAddContactsNavigationView.render().$el);
                return response
            } // End Success
	    }); // End fetch
	  },

	  fetchFacebookContacts: function() {
		  	var facebookContacts = new KeepAContact.Collections.FacebookContacts({});
		    facebookContacts.fetch({
	            success: function (response) {
	                var fbContacts = response.toJSON();
	                if (fbContacts[0].error) {
	                   console.log(fbContacts[0].error)
	                } else {
	                    var keepacontactContacts = new KeepAContact.Collections.KeepAContactContact({});
	                    keepacontactContacts.fetch({
	                        success: function (response) {
	                            var kacContacts = response.toJSON();
	                            var moduleSaveFacebookContactsView = new KeepAContact.Views.ModuleSaveFacebookContactsView({ collection: fbContacts, contacts: kacContacts })
	                            $('#scrollable-container').html(moduleSaveFacebookContactsView.render().$el);
	                        } // End Success
	                    }); // End fetch
	                } // End else
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