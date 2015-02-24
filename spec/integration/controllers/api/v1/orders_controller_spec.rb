require 'rails_helper'
require 'airborne'

RSpec.describe Api::V1::OrdersController do
  before do
    @product1 = FactoryGirl.create(:product, title: 'brick')
    @product2 = FactoryGirl.create(:product, title: 'metal')

    @order1 = FactoryGirl.create(:order)
    @order2 = FactoryGirl.create(:order)

    @item1 = FactoryGirl.create(:order_item, {product: @product1, order: @order1})
    @item2 = FactoryGirl.create(:order_item, {product: @product2, order: @order1})
  end

  describe '#index return array of orders as {orders: [...]}' do
    before do
      get '/api/v1/orders'
    end

    it 'order element has integer id attribute' do
      expect_json_types('orders.*',{id: :integer})
    end

    it 'order element has item_ids' do
      expect_json_types('orders.*.item_ids.*',:integer)
    end

  end

  describe '#show return order with items' do
    before do
      get "/api/v1/orders/#{@order1.id}"
    end

    it 'order element has integer id attribute' do
      expect_json_types('order', {id: :integer})
    end

    it 'contains items' do
      expect_json_types('order_items.*',{id: :int, title: :string, product_id: :int, order_id: :int})
    end

  end

  describe '#create empty order' do
    before do
      post '/api/v1/orders', {}
    end

    it 'order with id' do
      expect_json_types('order',{id: :integer})
    end

  end

end
