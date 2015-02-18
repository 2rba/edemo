App.OrdersIndexRoute = Ember.Route.extend({
    model: function(){
        return this.store.findAll('order');
    }

});