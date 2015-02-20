// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function(){

    this.resource('orders', function(){
        this.route('create');
        this.resource('order',{path: '/:order_id'});
    })
});
App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('orders.index');
  }
});