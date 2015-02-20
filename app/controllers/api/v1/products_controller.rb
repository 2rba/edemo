class Api::V1::ProductsController < ApplicationController

  def index
      render json: Product.all
  end

  def search
    result = params[:name].present? ? Product.where('title LIKE ?',"%#{params[:name]}%") : Product.none
    render json: result
  end
end