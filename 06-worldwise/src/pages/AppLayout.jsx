import React from "react";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
import App from "../App";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";

export default function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
