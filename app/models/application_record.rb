class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.search(search, column)
    debugger
    column = column.downcase
    return [] unless has_attribute?(column)
    if search
      where(["#{column} LIKE ?", "%#{search}%"])
    else
      all
    end
  end

end
