class CreateOrderDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :order_details do |t|
      t.belongs_to :product
      t.belongs_to :order
      t.string :amount

      t.timestamps
    end
  end
end
