App.OrderController = Ember.ObjectController.extend({
    actions:{
        submitItem: function(product){
            var self = this;
            function saveItem(){
                var item = self.store.createRecord('order-item',{
                    title: product.title,
                    product_id: product.id,
                    order: order
                });
                item.save();
                order.get('items').addObject(item);
            }

            console.log('ev');
            console.log(product);
            var order = this.get('model');
            if (this.get('model.isNew')){
                order.save().then(saveItem);
            } else saveItem();


        }
    }
});

App.OrdersCreateController = Ember.ObjectController.extend({

});