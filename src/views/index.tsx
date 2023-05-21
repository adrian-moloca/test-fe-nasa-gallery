import Loadable from "components/loadable";
import { FC, lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const Search = Loadable(lazy(() => import('views/search')));
const Show = Loadable(lazy(() => import('views/show')));


const Views: FC= () => {

    const router = () => createBrowserRouter(
            createRoutesFromElements(
                <>
                    <Route path='/' element={<Search />} />
                    <Route path='/show' element={<Show />} />
                </>
            ))

    return <RouterProvider router={router()} />
}

export default Views;
