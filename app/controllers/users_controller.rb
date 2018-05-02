class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update]
  def update
    if @current_user.update(user_params)
      redirect_to edit_user_path(@current_user), flash: {notice: 'Profile updated sucessfully!'}
    end
  end

  def check_old_password
    @user = User.find_by_id(@current_user.id)
    old_password = params[:old_password]
    respond_to do |format|
      if BCrypt::Password.new(@user.encrypted_password) == old_password
        format.json { render json: { checkPassword => true } }
      else
        format.json { render json: { checkPassword => false } }
      end
    end
  end

  def change_password
    @user = User.find_by_id(@current_user.id)
    if @user.update_attributes(:password => params[:user][:change_password])
      redirect_to new_user_session_path, flash: { notice: 'Change password sucessfully!' }
    else
      flash[:notice] = 'Change password failed'
    end
  end

  private
    def user_params
      # params.require(:user).permit(:)
    end

end
