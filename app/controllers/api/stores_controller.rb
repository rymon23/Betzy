class Api::StoresController < ApplicationController
  def show
  end

  def index
  end

  def create
  end

  def edit
  end

  def update
  end

  private
  def store_params
    params.require(:store).permit(:title)
  end
end
