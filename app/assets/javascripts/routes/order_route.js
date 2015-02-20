App.OrdersIndexRoute = Ember.Route.extend({
    model: function(){
        return this.store.findAll('order');
    }

});

App.OrdersCreateRoute = Ember.Route.extend({
    model: function () {
        //return this.store.createRecord('order');
        return [
                    Ember.Object.create({colour: "Red"}),
                    Ember.Object.create({colour: "Green"}),
                    Ember.Object.create({colour: "Blue"})
                  ];
    },
    actions: {
        willTransition: function (transition) {
            if (this.currentModel.get('isNew')) {
                if (confirm('are you sure?')) {
                    this.currentModel.destroyRecord();
                }
            } else {
                transition.abort();
            }
        }
    }
});