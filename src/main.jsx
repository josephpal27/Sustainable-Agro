import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS
import "aos/dist/aos.css"; // Import AOS CSS

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Solutions from './pages/Solutions.jsx';
import Error from './pages/Error.jsx';
import Blogs from './pages/Blogs.jsx';
import EsgImpact from './pages/EsgImpact';
import Careers from './pages/Careers';
import CareersDetails from './pages/CareersDetails.jsx';
import Contact from './pages/Contact';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/esg-and-impact", element: <EsgImpact /> },
      { path: "/careers", element: <Careers /> },
      { path: "/careers/:slug", element: <CareersDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={routers} />
    </HelmetProvider>
  </StrictMode>,
)
