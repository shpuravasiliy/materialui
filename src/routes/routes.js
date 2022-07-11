import Authentication from "../pages/Authentication/Authentication";
import Database from "../pages/Database/Database";
import Storage from "../pages/Storage/Storage";
import Hosting from "../pages/Hosting/Hosting";
import MachineLearning from "../pages/MachineLearning/MachineLearning";
import Functions from "../pages/Functions/Functions";
import Navbar from "../components/Navbar/Navbar";
import App from "../App";
import StartingPage from "../pages/StartingPage/StartingPage";

export const routes = [
    {
        path: '/',
        element: <StartingPage/>,
        children: [
            {
                path: "authentication",
                element: <Authentication/>,
            },
            {
                path: 'database',
                element: <Database/>,
            },
            {
                path: 'storage',
                element: <Storage/>,
            },
            {
                path: 'hosting',
                element: <Hosting/>,
            },
            {
                path: 'functions',
                element: <Functions/>,
            },
            {
                path: 'machine-learning',
                element: <MachineLearning/>,
            },
        ]
    },
]