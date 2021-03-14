import Default from "../layouts/Default";
import Main from "../components/Main";
import Login from "../components/Login";
import Auth from "../layouts/Auth";
import NotFound from "../components/NotFound";

const routers = {
    login: {
        path: '/login',
        component: Login,
        layout: Auth
    },
    home: {
        path: '/',
        component: Main,
        exact: true,
        layout: Default
    },
    notFound: {
        path: '*',
        component: NotFound,
        layout: Default
    }
};

export default routers;
