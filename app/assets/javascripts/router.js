// For more information see: http://emberjs.com/guides/routing/

Edemo.Router.map(function(){
    this.resource('rows')
});
Edemo.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('rows');
  }
});