# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180425040838) do

  create_table "comments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "product_id"
    t.string "content"
    t.integer "rating"
    t.string "status", default: "public"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_comments_on_product_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "gem_stones", force: :cascade do |t|
    t.string "name"
    t.string "details"
    t.string "diamond_specification"
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.integer "product_id"
    t.integer "user_id"
    t.string "url"
    t.string "url_out"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_images_on_product_id"
    t.index ["user_id"], name: "index_images_on_user_id"
  end

  create_table "metals", force: :cascade do |t|
    t.string "name"
    t.string "metal_type"
    t.string "metal_accents"
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_details", force: :cascade do |t|
    t.integer "product_id"
    t.integer "order_id"
    t.string "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_order_details_on_order_id"
    t.index ["product_id"], name: "index_order_details_on_product_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id"
    t.string "total_price"
    t.integer "amount"
    t.string "address"
    t.string "status", default: "public"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.integer "user_id"
    t.integer "gem_stone_id"
    t.integer "metal_id"
    t.string "name"
    t.string "description"
    t.string "advantage"
    t.string "collection"
    t.integer "price"
    t.string "advantage_1"
    t.string "advantage_2"
    t.string "advantage_3"
    t.string "category_name"
    t.integer "amount"
    t.string "status", default: "public"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gem_stone_id"], name: "index_products_on_gem_stone_id"
    t.index ["metal_id"], name: "index_products_on_metal_id"
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.date "birthday"
    t.string "gender"
    t.string "phone"
    t.string "role", default: "user"
    t.string "provider"
    t.string "uid"
    t.string "address"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
