/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { Header, Footer } from "components";
import {
  Outlet,
} from "react-router-dom";

// layout component for the entire app
export const Layout = () => {
  const styles = {
    header: "bg-yellow py-2 pl-9",
    img: "h-8",
    footer: "bg-dark-blue h-10",
  };
  return (
    <div className="relative h-screen">
      <Header classes={styles} />
      <div className="min-h-screen  md:w-10/12 mx-auto py-2">
        <Outlet />
      </div>
      <Footer classes={styles} />
    </div>
  );
};
