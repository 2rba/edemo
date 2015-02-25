class Api::V1::OrdersController < ApplicationController
  def index
    render json: Order.all
  end

  def create
    render json: Order.create
  end

  def show
    render json: Order.find(params[:id]), serializer: OrderShowSerializer
  end

  def destroy
    Order.find(params[:id]).destroy
    head :no_content
  end

end
