KeepAContact.Views.ModuleGroupContacts = Backbone.View.extend({
	
    tagName: "div",
    id: "",
    className: "",
    template: JST['dashboard/group_contacts'],

  	initialize: function() {
  		  _.bindAll(this);
  	},

    events: {
      "dragstart .contact-outer"      :  "setDataTransferObject"
    },

    instantiateScollrableArea: function() {
      $('.scrollable-container').niceScroll({cursorcolor:"#999999"});
    },

    setDataTransferObject: function(e) {
        console.log("check")
        // Get the draggable item's Facebook UID and store it in the dataTransferObject
        e.originalEvent.dataTransfer.setData("contactID", $(e.currentTarget).attr('data-id'));
    },

  	render: function () {
  		  this.$el.html(this.template({ collection: this.collection.toJSON(), group: this.options.group }));
        console.log(this.collection.toJSON())
        _(this.instantiateScollrableArea).defer();
  		  return this;
  	}

});