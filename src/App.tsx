import React from 'react';

import Routing from "./routes";
import Layout from "./components/Layout";

import {useTabsController} from "./controllers/useTabsController";

import './App.css';


function App() {
    const {tabsList,isLoading, error} = useTabsController()

    if (isLoading) {
        return <div>Loading tabs...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Layout>
            <Routing dynamicTabRoutes={tabsList}/>
        </Layout>
    )
}

export default App;
