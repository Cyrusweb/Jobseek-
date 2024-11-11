import Nav from "./Components/pages/Nav";

import Footer from "./Components/pages/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full pt-[120px]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
