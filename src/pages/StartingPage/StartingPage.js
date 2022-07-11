import React from 'react';
import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";

const StartingPage = () => {
    return (
        <Grid item xs={8}>
            <Outlet/>
        </Grid>
    );
};

export default StartingPage;