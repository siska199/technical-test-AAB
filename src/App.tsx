import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Auth, Universities, University }from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>,
  },
  {
    path: "/universities",
    element: <Universities/>,
  },
  {
    path: "/universities/:id",
    element: <University/>,
  },
]);


export default function App() {
  return (
    <main className="container">
      <RouterProvider router={router} />
    </main>
  )
}