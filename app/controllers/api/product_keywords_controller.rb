class Api::ProductKeywordsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    if params[:product_id]
        product = Product.find(params[:product_id])
        @product_keywords = product ? product.product_keywords : ProductKeyword.all
    else
        @product_keywords = ProductKeyword.all
    end
    render :index
  end

  def create
    @product_keyword = ProductKeyword.new(product_keyword_params)
    if @product_keyword.save
      render :show
    else
      render json: ["Something went wrong"], status: 422
    end
  end

  def destroy
    set_product_keyword
    if @product_keyword.destroy
      render :show
    else
      render json: @product_keyword.errors.full_messages, status: 422
    end
  end

  private
  def set_product_keyword
    @product_keyword = ProductKeyword.find(params[:id])
  end

  def product_keyword_params
    params.require(:product_keyword).permit(
      :keyword_id,
      :product_id)
  end
end