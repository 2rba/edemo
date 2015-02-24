// Override the default adapter with the `DS.ActiveModelAdapter` which

App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    namespace: 'api/v1',
    coalesceFindRequests: true
});
//App.ApplicationAdapter = DS.FixtureAdapter.extend();