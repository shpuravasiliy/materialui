import React from 'react';
import {useRoutes} from "react-router-dom";
import {mainNavbarItems} from "./components/Navbar/consts/navbarListitems";

const Router = () => {
    return useRoutes(mainNavbarItems.map(item => ({
        path: item.route,
        element: item.element,
    })))
};

export default Router;