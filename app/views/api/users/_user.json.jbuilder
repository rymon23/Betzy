json.extract! user, 
    :id, 
    :username, 
    :email,
    :gender, 
    :birthday,
    :created_at,
    :dark_mode,
    :about

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
        json.hasLineItems user.line_items.length > 0
    end
    json.createdDate user.created_at.to_date
end