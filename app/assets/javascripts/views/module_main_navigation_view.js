KeepAContact.Views.ModuleMainNavigation = Backbone.View.extend({
	
  tagName: "div",
  id: "",
  className: "",
  template: JST['modules/main_navigation'],

	initialize: function() {
		_.bindAll(this);
	},

  events: {
      "click #add-group-button"            :      "addGroupModal",
      "click .edit-group-button"           :      "editGroupModal",
      "click #group-link"                  :      "testFunction"
  },

  testFunction: function() {
      alert("hello")
  },

  addGroupModal: function() {
      var modalAddGroup = new KeepAContact.Views.ModalAddGroup({})
      $('#add-group-modal').html(modalAddGroup.render().$el);
      $('#add-group-modal').modal('show');
  },

  editGroupModal: function(e) {
      var groupName = $(e.currentTarget).attr('data-name');
      var groupID = $(e.currentTarget).attr('data-id');
      var modalEditGroup = new KeepAContact.Views.ModalEditGroup({ groupid: groupID, groupname: groupName })
      $('#edit-group-modal').html(modalEditGroup.render().$el);
      $('#edit-group-modal').modal('show');
  },

	render: function () {
		  this.$el.html(this.template({ collection: this.collection }));
		  return this;
	}

});