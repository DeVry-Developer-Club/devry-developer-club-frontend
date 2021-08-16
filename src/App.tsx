import React from "react";
import { GlobalStyle } from "./AppStyle";
import { Layout } from "./components/Layout/Layout";
import { Route, Router } from "react-router-dom";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <Route path="/">Testing</Route>
        </Router>
      </Layout>
    </>
  );
};
