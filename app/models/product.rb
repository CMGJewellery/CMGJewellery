class Product < ApplicationRecord
  belongs_to :user

  has_many :gem_stones
  has_many :images
  has_many :metals
  has_many :comments

  # constant category
  CATEGORY = ['necklaces', 'rings', 'bracelets', 'earings']
end
