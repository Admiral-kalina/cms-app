import React, {FC} from 'react';
import {TabProps} from "../pages/tabs/types";

const TabElement:FC<TabProps> = ({tab}) => {

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>{tab.title}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TabElement;