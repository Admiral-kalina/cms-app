import React from 'react';

const TabElement = ({tab}) => {
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