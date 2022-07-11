import Navbar from "./components/Navbar/Navbar";
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";
import {Grid} from "@mui/material";

function App() {
    return (
        <BrowserRouter>
            <Grid container>
                <Navbar/>
                <Router/>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
