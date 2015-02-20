App.OrdersItemController = Ember.ObjectController.extend({

    actions: {
        removeItem: function(){
            var item = this.get('model').destroyRecord();
            console.log(1);
        }
    }
});