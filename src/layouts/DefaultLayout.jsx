import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="h-screen bg-gray-900">
        <div className="w-[1200px] mx-auto ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
