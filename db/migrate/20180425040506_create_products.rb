class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.belongs_to :user
      t.belongs_to :gem_stone
      t.belongs_to :metal

      t.string :name
      t.string :description
      t.string :advantage
      t.string :collection
      t.integer :price
      t.string :dimensions
      t.string :necklace_length
      t.string :photograph_size
      t.string :category_name
      t.integer :amount
      t.string :status, default: 'public'

      t.timestamps
    end
  end
end
