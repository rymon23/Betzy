class Api::ProductsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

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
    set_product
    if @product.update(product_params)
        render :show
    else
        render json: @product.errors.full_messages
    end
  end

  def destroy
    set_product
    if @product.destroy
        render :show
    else
        render json: @product.errors.full_messages, status: 422
    end
  end

  private
  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(
      :name, 
      :description, 
      :price,
      :quantity, 
      :category_id,
      :store_id)
  end
end
