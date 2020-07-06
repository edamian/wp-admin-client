import React from 'react';
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout;