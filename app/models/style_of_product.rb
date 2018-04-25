class StyleOfProduct < ApplicationRecord
  has_many :comments, class_name: "comment", foreign_key: "comment_id"
  has_many :products, class_name: "product", foreign_key: "product_id"
  belongs_to :user, foreign_key: "user_id"
end
