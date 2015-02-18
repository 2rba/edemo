App.Order = DS.Model.extend({
    createdAt: DS.attr('date')
});

App.Order.FIXTURES = [
    {
        id: 100
    },
    {
        id: 101
    }
];