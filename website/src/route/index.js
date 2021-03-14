import routers from "./routers";

const route = (routeName) =>
    routers[routeName].path

export default route;
