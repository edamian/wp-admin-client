import WPAPI from 'wpapi';

const wp = new WPAPI({
    endpoint: process.env.REACT_APP_WP_URL,
    username: process.env.REACT_APP_WP_USER,
    password: process.env.REACT_APP_WP_PWD
});

export default wp;