KeepAContact.Views.ModuleMainNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['dashboard/main_navigation'],

	initialize: function() {
		  _.bindAll(this);
	},

    events: {
	  	"dragenter .group-list-item"            :  "addHighlight",
	  	"dragleave .group-list-item"            :  "removeHighlight",
	    "drop      .group-list-item"            :  "addContactToGroup",
	    "dragover  .group-list-item"            :  "dragOverFunction"
    },

    dragOverFunction: function(e) {
      e.preventDefault(); 
      this.addHighlight(e);
    },

    addContactToGroup: function(e) {
        this.removeHighlight(e);
        //retrieve the facebook contact's UID from the dataTransfer Object

        var groupName =  $(e.currentTarget).text();
        var groupID   =  $(e.currentTarget).attr( "data-id" );
        var contactID    =  e.originalEvent.dataTransfer.getData("contactID");

        var thisContact = new KeepAContact.Models.KeepAContactContact({ id: contactID });
        thisContact.save({
              group_id: groupID
          }, {
              success: function () {
                console.log("Switched Group!")
                $( "li[data-id='" + contactID +"']" ).remove();
              },
              error: function (model, xhr) {
                var errors = $.parseJSON(xhr.responseText).errors
                console.log(errors)
              }
    }) // End of thisContact.save

    }, // End addContactToGroup

    addHighlight: function(e) {
  		$(e.currentTarget).addClass( "navigation-highlight" );
    },

    removeHighlight: function(e) {
  		$(e.currentTarget).removeClass( "navigation-highlight" );
    },

	render: function () {
		  this.$el.html(this.template({ collection: this.collection.toJSON() }));
		  return this;
	}

});