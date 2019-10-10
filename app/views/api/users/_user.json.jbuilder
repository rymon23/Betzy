json.extract! user, 
    :id, 
    :username, 
    :email,
    :gender, 
    :birthday

if user
    if user.profile_image.attached?
        json.imageUrl url_for(user.profile_image)
    end

    if user.store
        json.storeId user.store.id
    else
        json.storeId nil
    end
    if user == current_user
        json.store user.store
    end
end