KeepAContact.Views.ModuleGroupContacts = Backbone.View.extend({
	
    tagName: "div",
    id: "",
    className: "",
    template: JST['dashboard/group_contacts'],

  	initialize: function() {
  		_.bindAll(this);
  	},

    events: {
      "dragstart .contact-outer"      :  "setDataTransferObject",
      "click .priority-option"        :  "updatePriority"
    },

    updatePriority: function(e) {
        var newPriority = $(e.currentTarget).text()
        var contactID   = $(e.currentTarget).closest('.contact-outer').attr('data-id');
        console.log(newPriority, contactID);
        thisContact = new KeepAContact.Models.KeepAContactContact({ id: contactID });
        thisContact.save({}, {
              data: { priority: newPriority },
              processData: true,
              success: function () {
                $(e.currentTarget).closest('.contact-outer').find('.c-priority').removeClass('c-priority');
                $(e.currentTarget).addClass('c-priority');
              },
              error: function (model, xhr) {
                var errors = $.parseJSON(xhr.responseText).errors
                console.log(errors)
              }
        }) // End of thisDeal.save
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