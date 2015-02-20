App.Order = DS.Model.extend({
    createdAt: DS.attr('date'),
    items: DS.hasMany('order-item',{async: true})
});

App.Order.FIXTURES = [
    {
        id: 100,
        items: [200,201]
    },
    {
        id: 101
    }
];