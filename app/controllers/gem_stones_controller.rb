class GemStonesController < ApplicationController
  before_action :set_gem_stone, only: [:show, :edit, :update, :destroy]

  # GET /gem_stones
  # GET /gem_stones.json
  def index
    @gem_stones = GemStone.all
  end

  # GET /gem_stones/1
  # GET /gem_stones/1.json
  def show
  end

  # GET /gem_stones/new
  def new
    @gem_stone = GemStone.new
  end

  # GET /gem_stones/1/edit
  def edit
  end

  # POST /gem_stones
  # POST /gem_stones.json
  def create
    @gem_stone = GemStone.new(gem_stone_params)

    respond_to do |format|
      if @gem_stone.save
        format.html { redirect_to @gem_stone, notice: 'Gem stone was successfully created.' }
        format.json { render :show, status: :created, location: @gem_stone }
      else
        format.html { render :new }
        format.json { render json: @gem_stone.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /gem_stones/1
  # PATCH/PUT /gem_stones/1.json
  def update
    respond_to do |format|
      if @gem_stone.update(gem_stone_params)
        format.html { redirect_to @gem_stone, notice: 'Gem stone was successfully updated.' }
        format.json { render :show, status: :ok, location: @gem_stone }
      else
        format.html { render :edit }
        format.json { render json: @gem_stone.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gem_stones/1
  # DELETE /gem_stones/1.json
  def destroy
    @gem_stone.destroy
    respond_to do |format|
      format.html { redirect_to gem_stones_url, notice: 'Gem stone was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gem_stone
      @gem_stone = GemStone.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def gem_stone_params
      params.require(:gem_stone).permit(:name, :details, :diamond_specification)
    end
end
