class Product < ApplicationRecord
  has_many :gem_stones
  has_many :metals
  belongs_to :style_of_product
  
end
