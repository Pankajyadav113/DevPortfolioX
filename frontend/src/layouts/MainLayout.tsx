import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import ScrollProgress from "../components/ui/ScrollProgress";

function MainLayout() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>

      <ScrollToTop />
    </>
  );
}

export default MainLayout;