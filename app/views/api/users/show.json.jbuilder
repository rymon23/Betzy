# json.extract! @user, :username, :id, :email
json.partial! "api/users/user", user: @user
