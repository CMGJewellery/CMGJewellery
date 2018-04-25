class StyleOfProductsController < ApplicationController
  before_action :set_style_of_product, only: [:show, :edit, :update, :destroy]

  # GET /style_of_products
  # GET /style_of_products.json
  def index
    @style_of_products = StyleOfProduct.all
  end

  # GET /style_of_products/1
  # GET /style_of_products/1.json
  def show
  end

  # GET /style_of_products/new
  def new
    @style_of_product = StyleOfProduct.new
  end

  # GET /style_of_products/1/edit
  def edit
  end

  # POST /style_of_products
  # POST /style_of_products.json
  def create
    @style_of_product = StyleOfProduct.new(style_of_product_params)

    respond_to do |format|
      if @style_of_product.save
        format.html { redirect_to @style_of_product, notice: 'Style of product was successfully created.' }
        format.json { render :show, status: :created, location: @style_of_product }
      else
        format.html { render :new }
        format.json { render json: @style_of_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /style_of_products/1
  # PATCH/PUT /style_of_products/1.json
  def update
    respond_to do |format|
      if @style_of_product.update(style_of_product_params)
        format.html { redirect_to @style_of_product, notice: 'Style of product was successfully updated.' }
        format.json { render :show, status: :ok, location: @style_of_product }
      else
        format.html { render :edit }
        format.json { render json: @style_of_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /style_of_products/1
  # DELETE /style_of_products/1.json
  def destroy
    @style_of_product.destroy
    respond_to do |format|
      format.html { redirect_to style_of_products_url, notice: 'Style of product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_style_of_product
      @style_of_product = StyleOfProduct.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def style_of_product_params
      params.require(:style_of_product).permit(:name, :description, :advantage, :collection, :price, :dimensions, :necklace_length, :photograph_size, :category_name, :status)
    end
end
