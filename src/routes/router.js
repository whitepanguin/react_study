import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layout/_component/Layout";
import Main from "../pages/main/_component/Main";
import Intro from "../pages/intro/_component/Intro";

const router = createBrowserRouter([
    {
        path : "/",
       element :<Layout />,
       children :[
        {
            index : true,
            element :<Main />,
        },
        {
            path : "/intro",
            element :<Intro />
        },
       ]
    },
]);

export default router;