import Navbar from "./components/Navbar/Navbar";
import _Router from "./_Router";
import {BrowserRouter} from "react-router-dom";
import {Grid} from "@mui/material";
import Header from "./components/common/Header/Header";
import {useState} from "react";

function App() {
    const [title, setTitle] = useState(null);

// let location = subscriberLocation()
    // useEffect(() => {
    //     console.log(location);
    // }, [location]);

    return (
        <BrowserRouter>
            <Grid container>
                <Navbar/>
                <Header title={title}/>
                <_Router/>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
