class Order < ApplicationRecord
  belongs_to :user, foreign_key: "user_id"
  has_many :order_details, class_name: "order_detail", foreign_key: "order_detail_id"
end
