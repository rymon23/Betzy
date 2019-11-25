class Api::KeywordsController < ApplicationController
  def index
    @keywords = Keyword.all
    debugger
    render :index
  end
  
end