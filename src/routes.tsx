import React from 'react';

import {RootState} from "./app/store";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TabElement from "./Components/TabElement";
import TabList from "./Components/TabList";

const Routing = () => {
    const {tabsList} = useSelector((state: RootState) => state.tabs);

    return (
        <Router>
            <TabList/>
            <Routes>
                <Route path="/" element={<TabElement tab={tabsList[0]}/>}/>
                {tabsList.map(tab => (
                    <Route
                        key={tab.id}
                        path={`/${tab.path}`}
                        element={<TabElement tab={tab}/>}
                    />
                ))}
            </Routes>
        </Router>
    );
};

export default Routing;
