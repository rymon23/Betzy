class Api::LineItemsController < ApplicationController
  before_action :require_login, only: [:index, :show, :create, :update, :destroy]

  def show
    if current_user
      @line_item = current_user.line_items.select {|line_item| line_item.product_id == params[:id].to_i}.first
    else
      @line_item = nil
    end  
    render :show
  end

  def index
    if current_user
      @line_items = current_user.line_items
    else
      @line_items = []
    end
    render :index
  end

  def create
    #If user has a line_item already with the product_id don't make new one
    @line_item = current_user.line_items.select {|line_item| line_item.product_id == params[:product_id].to_i}.first
    if @line_item
      render :show
    else     
      @line_item = LineItem.new(line_item_params)
      if @line_item.save
        render :show
      else
        render json: ["Something went wrong"], status: 422
      end
    end
  end

  def update
    set_line_item
    if @line_item.update(line_item_params)
      render :show
    else
      render json: @line_item.errors.full_messages
    end
  end

  def destroy
    set_line_item
    if @line_item.destroy
      render :show
    else
      render json: @line_item.errors.full_messages, status: 422
    end
  end

  private
  def set_line_item
    @line_item = LineItem.find(params[:id])
  end

  def line_item_params
    params.require(:line_item).permit(
      :quantity,
      :user_id,
      :product_id)
  end
end