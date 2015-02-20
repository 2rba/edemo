require 'rails_helper'
require 'airborne'


describe Api::V1::ProductsController do
  before do
    @product1 = FactoryGirl.create(:product, title: 'brick')
    @product1 = FactoryGirl.create(:product, title: 'metal')
  end

  describe '#index returns all products' do
    before do
      get '/api/v1/products'
    end

    it 'return array of products as {products: [...]}' do
      expect_json_types({products: :array_of_objects})
    end

    it 'product element has integer id attribute' do
      expect_json_types('products.*',{id: :integer})
    end

    it 'product element has string title attribute' do
      expect_json_types('products.*',{title: :string})
      expect_json('products.0',{title: 'brick'})
    end
  end

  describe '#search return products which title contains string passed as name param' do
    context 'products search success' do
      before do
        get '/api/v1/products/search?name=me'
      end
      it 'return array of products as {products: [...]}' do
        expect_json_types({products: :array_of_objects})
      end

      it 'product element has integer id attribute' do
        expect_json_types('products.*',{id: :integer})
      end

      it 'product element has string title attribute' do
        expect_json_types('products.*',{title: :string})
        expect_json('products.0',{title: 'metal'})
      end

      it 'return only one matched elementh' do
        expect_json_sizes({products: 1})
      end



    end

    context 'empty or missing name param' do
      before do
        get '/api/v1/products/search'
      end
      it 'return empty array or products' do
        expect_json_sizes({products: 0})
      end

    end

    context 'no products found' do
      before do
        get '/api/v1/products/search?name=unexisting'
      end

      it 'empty products list' do
        expect_json_sizes({products: 0})
      end

    end

  end


end