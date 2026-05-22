import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children : [
        {
            index : true,
            element : <Home></Home>
        },
        {
          path:'/services',
          element: <Services></Services>,
          loader: () => fetch("/service.json")
        },
        {
          path: 'case-study',
        },
        {
          path: 'about',
        },
        {
          path: 'blog'
        },
        {
          path: 'contact'
        }
    ]
  },
]);