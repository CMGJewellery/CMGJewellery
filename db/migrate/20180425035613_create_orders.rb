class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :total_price
      t.integer :amount
      t.string :status

      t.timestamps
    end
  end
end
