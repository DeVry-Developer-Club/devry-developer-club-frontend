import React from "react";
import {GlobalStyle} from "./AppStyle";
import {Layout} from "./components/Layout/Layout";
import {Route} from "react-router-dom";

export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Layout>
                <Route exact path="/">Testing</Route>
            </Layout>
        </>
    );
};
