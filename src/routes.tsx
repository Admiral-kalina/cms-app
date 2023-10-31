import React, { lazy, Suspense, FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {Tab} from "./app/store.types";

const  DummyTable = lazy(() => import("./pages/tabs/DummyTable"))  ;
const  DummyChart = lazy(() => import("./pages/tabs/DummyChart"))  ;
const  DummyList  = lazy(() => import("./pages/tabs/DummyList"))  ;


const Routing: FC<{dynamicTabRoutes:Tab[]}> = ({dynamicTabRoutes}) => {
    const DEFAULT_PATH = `/${dynamicTabRoutes[0].path}`;

    const routes = {
        "dummyTable": DummyTable,
        "dummyChart": DummyChart,
        "dummyList": DummyList,
    };

    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/" element={<Navigate to={DEFAULT_PATH} />} />
                {dynamicTabRoutes.map(tab => {
                    const Component = routes[tab.id] ;
                    return (
                        <Route
                            key={tab.id}
                            path={`/${tab.path}`}
                            element={<Component tab={tab}/>}
                        />
                    );
                })}
                <Route path="*" element={<Navigate to={DEFAULT_PATH} />} />
            </Routes>
        </Suspense>
    );
};

export default Routing;
