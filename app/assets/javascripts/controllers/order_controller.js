App.OrderController = Ember.ObjectController.extend({
    actions:{
        dudud:function(){
            console.log('weird');
        },
        submitItem: function(param1,param2){
            console.log('ev');
            console.log(param1);
            console.log(param2);
            console.log(this);

            var order = this.get('model');
            var item = this.store.createRecord('order-item',{
                title: 'new one'
            });
            order.get('items').addObject(item);
            //product.get('reviews').addObject(review);
        }
    }
});

App.OrdersCreateController = Ember.ObjectController.extend({

});