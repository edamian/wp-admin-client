import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div class="footer-copyright text-center py-3">&copy; { new Date().getFullYear() } Copyright
            <a href="#"> demian.xyz</a>
        </div>
        </footer>
    );
}

export default Footer;