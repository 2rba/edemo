App.OrdersIndexRoute = Ember.Route.extend({
    model: function(){
        return this.store.findAll('order');
    }

});

App.OrdersCreateRoute = Ember.Route.extend({
    model: function(){
        return this.store.createRecord('order');
    },
    actions: {
        willTransition: function (transition) {
            console.log('check');
            if (this.currentModel.get('isNew')) {
                if (confirm('are you sure?')) {
                    this.currentModel.destroyRecord();
                } else {
                    transition.abort();
                }
            }
        }
    },

    //actions: {
    //    willTransition: function (transition) {
    //        if (this.currentModel.get('isNew')) {
    //            if (confirm('are you sure?')) {
    //                this.currentModel.destroyRecord();
    //            }
    //        } else {
    //            transition.abort();
    //        }
    //    }
    //}
    //,
    setupController: function(controller, model) {
        this.controllerFor('order').setProperties({model: model});
    },
    renderTemplate: function() {
        this.render('order')
    }
});