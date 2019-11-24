class Api::ReviewsController < ApplicationController
  # before_action :set_review, only: [:show, :edit, :update, :destroy]
  before_action :require_login, only: [:create, :update, :destroy]

  def show
    @review = set_review
  end

  def index
    @reviews = Review.all
    render :index
  end

  def create
    @product = Product.find(params[:id])
    
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.product_id = @product.id

    if @review.save
      render :show
    else
        render json: @review.errors.full_messages
    end
  end

  def update
    set_review
    if @review.update(review_params)
        render :show
    else
        render json: @review.errors.full_messages
    end
  end

  def destroy
    set_review
    if @review.destroy
        render :show
    else
        render json: @review.errors.full_messages, status: 422
    end
  end

  private
    def set_review
      @review = Review.find(params[:id])
    end

    def review_params
      params.require(:review).permit(
          :rating, 
          :body,
          :author_id, 
          :product_id
          )
    end
end
