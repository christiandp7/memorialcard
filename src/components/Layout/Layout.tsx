import React, { FC } from "react";
import s from "./Layout.module.css";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode | string;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={s.root}>
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
