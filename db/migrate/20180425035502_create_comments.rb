class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user
      t.belongs_to :product
      t.string :content
      t.integer :rating
      t.string :status, default: 'public'

      t.timestamps
    end
  end
end