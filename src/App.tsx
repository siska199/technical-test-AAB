import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Auth, Universities, }from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>,
  },
  {
    path: "/universities",
    element: <Universities/>,
  },

]);


export default function App() {
  return (
    <main className="container">
      <RouterProvider router={router} />
    </main>
  )
}