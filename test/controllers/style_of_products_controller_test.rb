require 'test_helper'

class StyleOfProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @style_of_product = style_of_products(:one)
  end

  test "should get index" do
    get style_of_products_url
    assert_response :success
  end

  test "should get new" do
    get new_style_of_product_url
    assert_response :success
  end

  test "should create style_of_product" do
    assert_difference('StyleOfProduct.count') do
      post style_of_products_url, params: { style_of_product: { advantage: @style_of_product.advantage, category_name: @style_of_product.category_name, collection: @style_of_product.collection, description: @style_of_product.description, dimensions: @style_of_product.dimensions, name: @style_of_product.name, necklace_length: @style_of_product.necklace_length, photograph_size: @style_of_product.photograph_size, price: @style_of_product.price, status: @style_of_product.status } }
    end

    assert_redirected_to style_of_product_url(StyleOfProduct.last)
  end

  test "should show style_of_product" do
    get style_of_product_url(@style_of_product)
    assert_response :success
  end

  test "should get edit" do
    get edit_style_of_product_url(@style_of_product)
    assert_response :success
  end

  test "should update style_of_product" do
    patch style_of_product_url(@style_of_product), params: { style_of_product: { advantage: @style_of_product.advantage, category_name: @style_of_product.category_name, collection: @style_of_product.collection, description: @style_of_product.description, dimensions: @style_of_product.dimensions, name: @style_of_product.name, necklace_length: @style_of_product.necklace_length, photograph_size: @style_of_product.photograph_size, price: @style_of_product.price, status: @style_of_product.status } }
    assert_redirected_to style_of_product_url(@style_of_product)
  end

  test "should destroy style_of_product" do
    assert_difference('StyleOfProduct.count', -1) do
      delete style_of_product_url(@style_of_product)
    end

    assert_redirected_to style_of_products_url
  end
end
