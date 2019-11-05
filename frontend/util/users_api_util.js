export const fetchAllUsers = () => {
    return $.ajax({
        method: "GET",
        url: `api/users`
    });
};

export const updateUser = (formData) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${formData.get('user[id]')}`,
        data: formData,
        contentType: false,
        processData: false        
    });
};