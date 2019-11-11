class Api::LineItemsController < ApplicationController
  before_action :require_login, only: [:index, :create, :update, :destroy]

  def index
    @line_items = LineItem.all 
    render :index
  end

  def create
    @line_item = LineItem.new(line_item_params)
    if @line_item.save
      render :index
    else
        render json: @line_item.errors.full_messages
    end
  end

  def update
    set_line_item
    if @line_item.update(line_item_params)
        render :index
    else
        render json: @line_item.errors.full_messages
    end
  end

  def destroy
    set_line_item
    if @line_item.destroy
        render :index
    else
        render json: @line_item.errors.full_messages, status: 422
    end
  end

  private
  def set_line_item
    @line_item = LineItem.find(params[:id])
  end

  def line_item_params
    params.require(:line_items).permit(
      :quantity
      :user_id,
      :product_id
      )
  end
end