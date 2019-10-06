class Api::ProductsController < ApplicationController
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

  def destroy
  end

  private
  def product_params
    params.require(:product).permit(
      :name, 
      :description, 
      :price, 
      :category_id)
  end
end
