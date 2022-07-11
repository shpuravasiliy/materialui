import Navbar from "./components/Navbar/Navbar";
import {Outlet, useLocation} from "react-router-dom";
import {Grid} from "@mui/material";
import Header from "./components/common/Header/Header";
import {useEffect, useState} from "react";

function App() {
    const [title, setTitle] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname.replace(/\W/gi, ' '))
    }, [location]);

    return (
        <Grid container>
            <Navbar/>
            <Header title={title}/>
            <Outlet/>
        </Grid>
    );
}

export default App;
