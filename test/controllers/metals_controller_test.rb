require 'test_helper'

class MetalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @metal = metals(:one)
  end

  test "should get index" do
    get metals_url
    assert_response :success
  end

  test "should get new" do
    get new_metal_url
    assert_response :success
  end

  test "should create metal" do
    assert_difference('Metal.count') do
      post metals_url, params: { metal: { metal_accents: @metal.metal_accents, metal_type: @metal.metal_type, name: @metal.name } }
    end

    assert_redirected_to metal_url(Metal.last)
  end

  test "should show metal" do
    get metal_url(@metal)
    assert_response :success
  end

  test "should get edit" do
    get edit_metal_url(@metal)
    assert_response :success
  end

  test "should update metal" do
    patch metal_url(@metal), params: { metal: { metal_accents: @metal.metal_accents, metal_type: @metal.metal_type, name: @metal.name } }
    assert_redirected_to metal_url(@metal)
  end

  test "should destroy metal" do
    assert_difference('Metal.count', -1) do
      delete metal_url(@metal)
    end

    assert_redirected_to metals_url
  end
end
