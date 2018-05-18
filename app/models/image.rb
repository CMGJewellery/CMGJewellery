class Image < ApplicationRecord
  mount_uploader :url, ProductImageUploader

  belongs_to :product, optional: true
  belongs_to :user, optional: true
end
