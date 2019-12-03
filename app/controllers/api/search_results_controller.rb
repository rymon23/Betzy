class Api::SearchResultsController < ApplicationController

  before_action :force_json, only: :index
  # before_action :force_json, only: :search
  # def index
  #   debugger
  #   @items = Product.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
  #   debugger
  # end

  def index
      @results = []
      substrings = {}

      if !params[:search_query] || params[:search_query].length <= 0
          @results = Product.all
      else
        all_products = Product.all 
        search_query = params[:search_query].split
        all_products.each do |product|
            substrings[product.id] = substring(product.name.downcase)
        end
        
        # debugger
        search_query.each do |query|
            substrings.each do |key, value|
                if value.include?(query.downcase)
                    @results << Product.find(key)
                end
            end
        end
      end

      # debugger
      render :index  
  end

  private
  def substring(string)
      subs = []
      (0...string.length).each do |start_index|
          (start_index...string.length).each do |end_index|
              subs << string[start_index..end_index]
          end
      end
      subs
  end

  def force_json
    request.format = :json
  end
end