import React, {FC} from 'react';

import TabElement from "../../components/TabElement";

import {TabProps} from "./types";


const DummyList:FC<TabProps> = ({tab}) => {

    return <TabElement tab={tab}/>;
};

export default DummyList;