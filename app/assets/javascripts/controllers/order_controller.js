App.OrderController = Ember.ObjectController.extend({
    actions:{
        submitItem: function(product){
            console.log('ev');
            console.log(product);
            var order = this.get('model');
            var item = this.store.createRecord('order-item',{
                title: product.title,
                product_id: product.id,
                order: order
            });
            item.save();
            order.get('items').addObject(item);

        }
    }
});

App.OrdersCreateController = Ember.ObjectController.extend({

});