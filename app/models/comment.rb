class Comment < ApplicationRecord
  belongs_to :style_of_product, foreign_key: "style_of_product_id"
  belongs_to :user, foreign_key: "user_id"
  
end