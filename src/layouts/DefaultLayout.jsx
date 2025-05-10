import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 min-h-[600px]">
        <div className="container px-10 mx-auto ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
