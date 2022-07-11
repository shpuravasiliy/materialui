import React from 'react';
import {useRoutes} from "react-router-dom";
import {routes} from "./routes/routes";

const Router = () => {
    return useRoutes(routes);
};

export default Router;