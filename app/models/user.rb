class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable, :confirmable,
  :lockable, :timeoutable
  
  has_one :image  
  has_many :comments
  has_many :orders
  has_many :products
end
