class OrderShowSerializer < ActiveModel::Serializer
  attributes :id
  has_many 'order_items', embed: :ids, embed_in_root: true, key: 'items'
  root  'order'

  def order_items
    object.items
  end



end
