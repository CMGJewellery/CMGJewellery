class CreateStyleOfProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :style_of_products do |t|
      t.string :name
      t.string :description
      t.string :advantage
      t.string :collection
      t.integer :price
      t.string :dimensions
      t.string :necklace_length
      t.string :photograph_size
      t.string :category_name
      t.string :status

      t.timestamps
    end
  end
end
