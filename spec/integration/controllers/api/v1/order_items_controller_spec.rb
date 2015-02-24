require 'rails_helper'
require 'airborne'

RSpec.describe Api::V1::OrderItemsController do
  before do
    @product1 = FactoryGirl.create(:product, title: 'brick')
    @product2 = FactoryGirl.create(:product, title: 'metal')

    @order1 = FactoryGirl.create(:order)
    @order2 = FactoryGirl.create(:order)

    @item1 = FactoryGirl.create(:order_item, product: @product1, order: @order1)
    @item2 = FactoryGirl.create(:order_item, product: @product2, order: @order1)
  end

  describe '#create order items arguments: order_id, product_id' do

    context 'create line item' do
      before do
        post '/api/v1/order_items', {order_item: { product_id: @product1.id, order_id: @order1.id }}
      end

      it 'respond with created order_item' do
        expect_json_types('order_item',{id: :integer})
      end

      it 'store item to database' do
        expect_json('order_item', {id: OrderItem.last.id})
      end

    end


  end

  describe '#show return one order_item' do
    before do
      get "/api/v1/order_items/#{@item1.id}"
    end

    it 'return id, title, product_id, order_id' do
      expect_json_types('order_item',{id: :integer, title: :string, product_id: :int, order_id: :int})
    end
  end

  describe '#index return array of order_item by specified ids' do
    before do
      get "/api/v1/order_items?ids[]=#{@item1.id}&ids[]=#{@item2.id}"
    end

    it 'return id, title, product_id, order_id' do
      expect_json_types('order_items.0',{id: :integer, title: :string, product_id: :int, order_id: :int})
    end
  end


end
