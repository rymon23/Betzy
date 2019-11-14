class Api::LineItemsController < ApplicationController
  before_action :require_login, only: [:index, :show, :create, :update, :destroy]

  def show
    # debugger
    @line_item = LineItem.find_by(params[:user_id], params[:id])  #:id is product_id not line_item.id
    # debugger
  end

  def index
    # debugger
    if current_user
      @line_items = LineItem.all
      @line_items.select {|line_item| line_item.user_id == current_user.id }
      # debugger
      render :index
    else
      @line_items = []
      render :index
    end
  end

  def create
    @line_item = LineItem.new(line_item_params)
    if @line_item.save
      # render :index
    else
      render json: ["Something went wrong"], status: 422
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
    params.require(:line_item).permit(
      :quantity,
      :user_id,
      :product_id
      )
  end
end