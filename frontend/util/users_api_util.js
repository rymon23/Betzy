export const fetchAllUsers = () => {
    return $.ajax({
        method: "GET",
        url: `api/users`
    });
};
export const updateUser = (user) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: user
    });
};