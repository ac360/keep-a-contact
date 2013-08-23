KeepAContact.Views.ModuleGroupContacts = Backbone.View.extend({
	
    tagName: "div",
    id: "",
    className: "",
    template: JST['dashboard/group_contacts'],

  	initialize: function() {
  		  _.bindAll(this);
  	},

    events: {
    },

    instantiateScollrableArea: function() {
      $('.scrollable-container').niceScroll({cursorcolor:"#999999"});
    },

  	render: function () {
  		  this.$el.html(this.template({ collection: this.collection.toJSON(), group: this.options.group }));
        console.log(this.collection.toJSON())
        _(this.instantiateScollrableArea).defer();
  		  return this;
  	}

});