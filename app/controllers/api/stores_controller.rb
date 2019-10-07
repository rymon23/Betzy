class Api::StoresController < ApplicationController
  before_action :require_login, only: [:create, :update]

  def show
    @store = Store.find(params[:id])
    render :show
  end

  def index
    @stores = Store.all
    render :index
  end

  def create
    @store = Store.new(store_params)
    if @store.save
      render "api/stores/show"
    else
      render json: ["Something went wrong"], status: 422
    end
  end

  def update
    @store = Store.find(params[:id])
    if @store.update(store_params)
      render :show
    else
      render json: @store.errors.full_messages, status: 422
    end
  end

  private
  def store_params
    params.require(:store).permit(:title, :id, :owner_id)
  end
end