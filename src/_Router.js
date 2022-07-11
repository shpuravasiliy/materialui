import React from 'react';
import {useRoutes} from "react-router-dom";
import {routes} from "./routes/routes";


const _Router = () => {
    return useRoutes(routes);
};

export default _Router;