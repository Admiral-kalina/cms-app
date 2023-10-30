import React from 'react';

const TabComponent = ({tab}) => {
    console.log(tab)
    return (
        <div>
            <table><tr><td>{tab.title}</td></tr></table>
        </div>
    );
};

export default TabComponent;