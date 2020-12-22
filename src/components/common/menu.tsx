import React from 'react';
import {Link} from "react-router-dom"

export class Menu extends React.PureComponent {
    render() {
        return (
            <div className="menu">
                <div className="menu__links-wrapper">
                    <Link to="/math">Math tests</Link>
                </div>
            </div>
        );
    }
}
