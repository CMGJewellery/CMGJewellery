class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :comments, class_name: "comment", foreign_key: "comment_id"
  has_many :orders, class_name: "order", foreign_key: "order_id"
  has_one :image, foreign_key: "image_id"
  has_many :style_of_products, class_name: "style_of_product", foreign_key: "style_of_product_id"
end
