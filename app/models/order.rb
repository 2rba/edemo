class Order < ActiveRecord::Base
  has_many :items, class_name: OrderItem
end
