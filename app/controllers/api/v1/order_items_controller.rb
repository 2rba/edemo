class Api::V1::OrderItemsController < ApplicationController
  def create
    product = Product.find(params[:order_item][:product_id])
    order = Order.find(params[:order_item][:order_id])
    order_item = OrderItem.create(product: product, order:order)
    render json: order_item
  end

  def show
    render json: OrderItem.find(params[:id])
  end

  def index
    render json: OrderItem.find(params[:ids])
  end

  def destroy
    OrderItem.find(params[:id]).destroy
    head :no_content
  end
end