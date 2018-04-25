class CreateMetals < ActiveRecord::Migration[5.1]
  def change
    create_table :metals do |t|
      t.string :name
      t.string :metal_type
      t.string :metal_accents

      t.timestamps
    end
  end
end
