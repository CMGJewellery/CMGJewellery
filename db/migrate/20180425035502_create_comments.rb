class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :rating
      t.string :status

      t.timestamps
    end
  end
end