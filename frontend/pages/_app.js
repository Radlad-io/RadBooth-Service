/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import '../styles/index.css'
import Sidebar from "../components/Sidebar";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}