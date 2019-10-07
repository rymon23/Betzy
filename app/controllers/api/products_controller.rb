class Api::ProductsController < ApplicationController
  before_action :require_login, only: [:create, :update]

  def show
    @product = Product.find(params[:id])
  end

  def index
    @products = Product.all 
    render :index
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
        render json: @product.errors.full_messages
    end
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
