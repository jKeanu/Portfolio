import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Page from './page/Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  }]
);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
