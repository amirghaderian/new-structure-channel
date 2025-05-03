import "../styles/Layout.scss";
// import FullContainer from "../components/FullContainer";
import { ReactNode } from "react";
import { Navbar, Sidebar } from "./parts";
// import logo from "../assets/images/logo.png";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        {/* <FullContainer> */}
        <Sidebar />
        {children}
        {/* </FullContainer> */}
      </main>
      <footer className="footer">
        <p>
          &copy; تمام حقوق مادی و معنوی این سامانه متعلق به بانک ملت می باشد
        </p>
      </footer>
    </div>
  );
};

export default Layout;
