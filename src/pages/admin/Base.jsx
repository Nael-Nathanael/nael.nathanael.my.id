import React, { Component } from 'react'
import SideNav from 'components/Navigation/SideNav'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

export class Base extends Component {
    render() {
        return (
            <div className="bg-black w-100" style={{ height: "100vh" }}>
                <SideNav />
            </div>
        )
    }
}

export default Base
