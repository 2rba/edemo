class Api::V1::OrdersController < ApplicationController
  def index
    render json: Order.all
  end

  def create
    # TODO
  end

  def show
    render json: Order.find(params[:id]), serializer: OrderShowSerializer
  end
end
