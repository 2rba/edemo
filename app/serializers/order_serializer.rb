class OrderSerializer < ActiveModel::Serializer
  attributes :id
  has_many :items, embed: :ids

end