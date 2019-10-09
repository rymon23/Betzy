json.extract! user, 
    :id, 
    :username, 
    :email,
    :gender, 
    :birthday,
    :store

if user
    if user.store
        json.storeId user.store.id
    else
        json.storeId nil
    end
    if user == current_user
        json.store user.store
    end
end