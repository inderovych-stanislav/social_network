
export const authUser = {
    setUser,
    getUser,
    setToken,
    getToken,
    isAuthenticated,
    hasToken
};

function setUser(user) {
    localStorage.setItem('user', user);
}

function getUser() {
   return JSON.parse(localStorage.getItem('user')) || {};
}

function setToken(token) {
    localStorage.setItem('token', token);
}

function getToken() {
   return JSON.parse(localStorage.getItem('token')) || {};
}

function hasToken() {
    return !!localStorage.getItem("token");
}

function isAuthenticated() {
    return !!localStorage.getItem("user");
}