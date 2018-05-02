class CreateGemStones < ActiveRecord::Migration[5.1]
  def change
    create_table :gem_stones do |t|
      t.string :name
      t.string :details
      t.string :diamond_specification
      t.string :color
      t.timestamps
    end
  end
end
