class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.belongs_to :product
      t.belongs_to :user
      t.string :url
      t.string :url_out

      t.timestamps
    end
  end
end
