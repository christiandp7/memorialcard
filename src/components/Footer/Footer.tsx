import React from "react";
import s from "./Footer.module.css";
import { QuestionMark } from "../svg";

const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.address}>
        jackie onassis reservoir, central park, 86st - 91st
      </div>
      <div className={s.toolbar}>
        <QuestionMark />
      </div>
    </div>
  );
};

export default Footer;
