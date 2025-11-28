import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import toast, { Toaster } from "react-hot-toast";

function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster></Toaster>
    </>
  );
}
export default HeaderLayout;
