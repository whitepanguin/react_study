import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layout/_component/Layout";
import Main from "../pages/main/_component/Main";
import Intro from "../pages/intro/_component/Intro";
import PostContainer from "../pages/post/PostContainer";
import PostRead from "../pages/post/_component/PostRead";

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
            element :<Intro />,
        },
        {
            path : "/post",
            element :<PostContainer />,
            
        },
        {
            path : "/post/:id",
            element :<PostRead />,
        },
       ]
    },
]);

export default router;