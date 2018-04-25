class Image < ApplicationRecord
  belongs_to :style_of_product
  belongs_to :user
end
