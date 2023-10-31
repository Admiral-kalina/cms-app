import React from 'react';
import TabList from "./TabList";


const Layout = ({children}) => {
    return (
        <>
            <TabList/>
            {children}
        </>
    )
};

export default Layout;