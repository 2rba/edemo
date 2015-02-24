class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :product_id, :order_id

  def title
    object.product.title
  end
end
