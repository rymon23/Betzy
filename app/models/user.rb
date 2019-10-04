# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 } , allow_nil: true

  after_initialize :ensure_session_token

  # has_many :authored_products
  # has_many :authored_reviews
  # has_one :cart ?

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    (@user && @user.is_password?(password)) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
end