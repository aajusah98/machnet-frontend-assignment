const API_URL = "https://api.github.com/users/";

export const getUserProfile = (usename) => {
    return fetch(API_URL + usename)
        .then((response) => response.json())
        .then((data) => ({
            data: data,
            error: null,
        }))
        .catch((error) => {
            return {
                data: null,
                error: error.message || "Error occurred on fetching User",
            };
        });
};