require 'test_helper'

class GemStonesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gem_stone = gem_stones(:one)
  end

  test "should get index" do
    get gem_stones_url
    assert_response :success
  end

  test "should get new" do
    get new_gem_stone_url
    assert_response :success
  end

  test "should create gem_stone" do
    assert_difference('GemStone.count') do
      post gem_stones_url, params: { gem_stone: { details: @gem_stone.details, diamond_specification: @gem_stone.diamond_specification, name: @gem_stone.name } }
    end

    assert_redirected_to gem_stone_url(GemStone.last)
  end

  test "should show gem_stone" do
    get gem_stone_url(@gem_stone)
    assert_response :success
  end

  test "should get edit" do
    get edit_gem_stone_url(@gem_stone)
    assert_response :success
  end

  test "should update gem_stone" do
    patch gem_stone_url(@gem_stone), params: { gem_stone: { details: @gem_stone.details, diamond_specification: @gem_stone.diamond_specification, name: @gem_stone.name } }
    assert_redirected_to gem_stone_url(@gem_stone)
  end

  test "should destroy gem_stone" do
    assert_difference('GemStone.count', -1) do
      delete gem_stone_url(@gem_stone)
    end

    assert_redirected_to gem_stones_url
  end
end
