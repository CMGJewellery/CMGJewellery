class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.belongs_to :gem_stone
      t.belongs_to :metal
      t.belongs_to :style_of_product

      t.integer :amount

      t.timestamps
    end
  end
end
