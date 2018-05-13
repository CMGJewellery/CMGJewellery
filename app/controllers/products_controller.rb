class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:edit, :update, :destory, :create, :new]
  before_action :check_admin_role, only: [:edit, :update, :create, :new, :destory]


  layout "admin_menu", only: [:edit, :update, :create, :new, :destory]
  # GET /products
  # GET /products.json

  def check_out_shopping_cart

  end

  def search
    gem_stone = GemStone.find_name(params[:gem_stone_name])
    @list_products = Product.find_gem_stone_id(gem_stone.id)
  end


  def index
    @gem_stones = GemStone.all
    @metals = Metal.all
    @products = Product.all
  end

  # GET /products/1
  # GET /products/1.json
  def show
  end

  # GET /products/new
  def new
    @metals = Metal.all
    @gem_stones = GemStone.all
    @product = Product.new
  end

  # GET /products/1/edit
  def edit
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  protected
  def check_admin_role
    # puts current_user.role
    if current_user.present?
      redirect_to root_path, notice: 'User are not admin!.' if !current_user.role == 'admin'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:amount)
    end
end
