import React from 'react';

import { useSelector} from "react-redux";
import { Link} from 'react-router-dom';

import {RootState} from "../app/store";

const TabList = () => {
    const {tabsList} = useSelector((state:RootState) => state.tabs);

    return (
        <nav>
            {tabsList.map(tab => (
                <Link key={tab.id} to={`/${tab.path}`}>
                    {tab.title}
                </Link>
            ))}
        </nav>
    );
};

export default TabList;
