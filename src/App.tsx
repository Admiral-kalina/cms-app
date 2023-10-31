import React from 'react';

import {Provider} from "react-redux";
import {store} from "./app/store";

import './App.css';
import Layout from "./Components/Layout";

function App() {
    return (
        <Provider store={store}>
            <Layout/>
        </Provider>
    )

}

export default App;
