class StyleOfProduct < ApplicationRecord
  has_many :comments
  has_many :products
  belongs_to :user

  # constant category
  CATEGORY = [
    'NECKLACES', 'RINGS', 'BRACELETS', 'EARRINGS'
    ]
end