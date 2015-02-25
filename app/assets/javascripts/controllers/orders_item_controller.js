App.OrdersItemController = Ember.ObjectController.extend({

    actions: {
        removeItem: function(){
            this.get('model').destroyRecord();
        }
    }
});