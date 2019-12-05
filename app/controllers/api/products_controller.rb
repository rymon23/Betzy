class Api::ProductsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def show
    @product = Product.find(params[:id])
  end

  def index
    if params[:store_id]
      store = Store.find(params[:store_id])
      if store
        @products = []
        search_query = params[:search_query].split
        store_products = store.products
        substrings = {}
        store_products.each do |product|
          substrings[product.id] = substring(product.name.downcase)
        end
        search_query.each do |query|
            substrings.each do |key, value|
                if value.include?(query.downcase)
                    @products << Product.find(key)
                end
            end
        end
        @products
      else
        @products = Product.all 
      end
      @products
    # elsif params[:carted] && current_user && params[:user_id].to_i == current_user.id
    #   @products = current_user.carted_products
    else
      @products = Product.all 
    end
    # debugger

    render :index
  end

  def create
    @product = Product.new(product_params)
    debugger
    if @product.save
      debugger
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

  def substring(string)
      subs = []
      (0...string.length).each do |start_index|
          (start_index...string.length).each do |end_index|
              subs << string[start_index..end_index]
          end
      end
      subs
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
