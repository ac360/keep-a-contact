KeepAContact.Views.ModuleAddContactsNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/add_contacts_navigation'],

	initialize: function() {
		_.bindAll(this);
    this.collection.bind("change reset add remove", this.render);
	},

	events: {
  		"dragenter .group-list-item"            :  "addHighlight",
  		"dragleave .group-list-item"            :  "removeHighlight",
      "drop      .group-list-item"            :  "importContactToGroup",
      "dragover  .group-list-item"            :  "dragOverFunction"
  },

  dragOverFunction: function(e) {
      e.preventDefault(); 
      this.addHighlight(e);
  },

  importContactToGroup: function(e) {
      this.removeHighlight(e);
      //retrieve the facebook contact's UID from the dataTransfer Object

      var groupName = $(e.currentTarget).text();
      var userID    = e.originalEvent.dataTransfer.getData("facebookID")
      var groupID   = $(e.currentTarget).attr( "data-id" );

      $('#customized-contact-area').html('')
      $('#add-contact-modal').modal()
      $('#add-contact-modal').modal('show')
      $('.modal-dialog').html('<p style="text-align:center;color:#fff;padding-top:150px;">Saving...</p>'); 

        var facebookContact = new KeepAContact.Models.FacebookContact({});
            facebookContact.fetch({
                data: { user_id: userID },
                processData: true,
                success: function (response) {
                    var result = response.toJSON();
                    if (result.error) {
                       console.log(result.error)
                    } else {

                       console.log("Facebook User Data:", response);
                       // First Save the new contact. Creating a contactInfo object to check which values area available 

                       contactInfo = {}
                       contactInfo.group_id = groupID
                       if(response.attributes.name){ contactInfo.full_name = response.attributes.name }
                       if(response.attributes.first_name){ contactInfo.first_name = response.attributes.first_name }
                       if(response.attributes.last_name){ contactInfo.last_name = response.attributes.last_name }
                       if(response.attributes.email){ contactInfo.email = response.attributes.email }
                       if(response.attributes.birthday){ contactInfo.birthday = response.attributes.birthday }
                       if(response.attributes.gender){ contactInfo.gender = response.attributes.gender }
                       if(response.attributes.location){ contactInfo.location = response.attributes.location.name }
                       contactInfo.source = "facebook" 
                       if(response.attributes.id){ contactInfo.source_uid = response.attributes.id }
                       if(response.attributes.link){ contactInfo.facebook_url = response.attributes.link }
                       contactInfo.image_url = "https://graph.facebook.com/" + response.attributes.id + "/picture"

                       console.log(contactInfo.image_url);

                       var keepacontactContact = new KeepAContact.Collections.KeepAContactContact();
                       keepacontactContact.create(contactInfo, {
                          success: function(response) {
                              var result = response.toJSON();
                              console.log("New Contact Object:", result)
                              // Then Load the modal window
                              var addContactModal = new KeepAContact.Views.ModalAddContact({ model: result, group: groupName })
                              $('#add-contact-modal').find('.modal-dialog').html(addContactModal.render().$el); 
                              // Remove <li> element from the list
                              $( "li[data-id='" + result.source_uid +"']" ).remove();
                          }
                        });
                    }
            } // End Success
        }); // End fetch 
  }, // End addContactToGroup

  addHighlight: function(e) {
  	$(e.currentTarget).addClass( "navigation-highlight" );
  },

  removeHighlight: function(e) {
  	$(e.currentTarget).removeClass( "navigation-highlight" );
  },

	render: function () {
    this.collection = this.collection.toJSON();
    groupsSorted = _.sortBy(this.collection, function(group){return group.name});
    console.log(groupsSorted);
    this.$el.html(this.template({ collection: groupsSorted }));
		return this;
	}

});