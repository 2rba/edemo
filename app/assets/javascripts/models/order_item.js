App.OrderItem = DS.Model.extend({
    title: DS.attr('string'),
    product_id: DS.attr('number'),
    order: DS.belongsTo('order')
});

App.OrderItem.FIXTURES = [
    {
        id: 200,
        title: 'morning',
        product_id: 22,
        order: 100
    },
    {
        id: 201,
        title: 'evening',
        product_id: 23,
        order: 100
    }

];