import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Home, ProductPage, About, AgentsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "agents",
        element: <AgentsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
