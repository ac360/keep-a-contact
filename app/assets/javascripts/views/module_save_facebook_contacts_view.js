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

		// Get your Contacts and collect their Facebook IDs so you have a list of who you have alreaady saved
		var fbContactIDs = []
		$.each(this.options.contacts, function(c, k) {
		    fbContactIDs.push(k.source_uid)
		});
		console.log("You have this many contacts from Facebook:", fbContactIDs.length);
		console.log("Here are their IDs:", fbContactIDs)
		// Go through each Facebook Contact and subtract ones you have already saved
		console.log("You have this many friends with viewable profiles on Facebook:", this.collection.length)
		var self = this;
		console.log(self.collection)

		for (var index = self.collection.length - 1; index >= 0; index--) {
		    k = self.collection[index];
		    if (fbContactIDs.indexOf(k.id) > -1) {
		        self.collection.splice(index, 1);
		    };
		}

		// $.each(self.collection, function(index, k) {
		// 	if (fbContactIDs.indexOf(k.id) > -1) {
		// 		console.log(k, index)
		// 		self.collection.splice(index, 1);
		// 		console.log(self.collection);
		// 	};
		// });

		// $.each(self.collection, function(index, k) {
		// 	if(k){
		// 		if($.inArray(k.id, fbContactIDs) > -1) {
		// 	    	console.log("You have this person saved:", k.id, k.name)
		// 	    	self.collection.splice(index, 1);
		// 	    	console.log(self.collection.length)
		//     	};
		// 	};
		// });



		console.log("Here are how many Facebook Contacts you have not already saved:", self.collection.length)
		// Render Template
	    this.$el.html(this.template({ collection: self.collection }));
		return this;
	}

});