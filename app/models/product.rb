class Product < ApplicationRecord
  has_many :gem_stones, class_name: "gem_stone", foreign_key: "gem_stone_id"
  has_many :metals, class_name: "metal", foreign_key: "metal_id"
  belongs_to :style_of_product, foreign_key: "style_of_product_id"
  
end
