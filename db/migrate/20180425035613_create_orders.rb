class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user

      t.string :total_price
      t.integer :amount
      t.string :status, default: 'public'
      t.string :address
      t.timestamps
    end
  end
end
