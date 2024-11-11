import About from "./Components/About";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import Jobs from "./Components/Jobs";
import Company from "./Components/Company";
import Gigs from "./Components/Gigs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/company", element: <Company /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/gigs", element: <Gigs /> },
      { path: "/faq", element: <Faq /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
