import React from 'react';

const Footer = () => {
    return (
        <footer className="">
        <div className="footer-copyright text-center py-3">&copy; { new Date().getFullYear() } Copyright
            <a href="demian.xyz"> demian.xyz</a>
        </div>
        </footer>
    );
}

export default Footer;